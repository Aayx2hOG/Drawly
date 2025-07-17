import WebSocket, { WebSocketServer } from "ws";
import jwt from "jsonwebtoken";
import { prismaClient } from "db/client";

const jwt_secret = process.env.JWT_SECRET || "secret not found";
const wss = new WebSocketServer({ port: 8080 });

interface User {
    ws: WebSocket;
    rooms: string[];
    userId: string
}

const users: User[] = [];

function checkUser(token: string): string | null {
    try {
        const decoded = jwt.verify(token, jwt_secret);

        if (typeof decoded === "string") {
            return null;
        }

        if (!decoded || !decoded.userId) {
            return null;
        }

        return decoded.userId;
    } catch (error) {
        return "Invalid token";
    }
}
wss.on("connection", function connection(ws, request) {
    const url = request.url;
    if (!url) {
        return;
    }

    const queryParams = new URLSearchParams(url.split("?")[1]);
    const token = queryParams.get("token") ?? "";
    const userId = checkUser(token);

    if (userId === null) {
        ws.close();
        return;
    }

    users.push({
        ws,
        rooms: [],
        userId
    })

    ws.on("message", async function message(data) {
        const parsedData = JSON.parse(data as unknown as string);

        if (parsedData.type === "join_room") {
            const user = users.find(x => x.ws === ws);
            user?.rooms.push(parsedData.roomId);
        }
        if (parsedData.type === "leave_room") {
            const user = users.find(x => x.ws === ws);
            if (!user) {
                return;
            };
            user.rooms = user?.rooms.filter(x => x === parsedData.roomId);
        }
        if (parsedData.type === "chat") {
            const roomId = parsedData.roomId;
            const message = parsedData.message;

            // better approach would be to store it in a queue or queue it/
            await prismaClient.chat.create({
                data: {
                    roomId,
                    message,
                    userId
                }
            })
            users.forEach(user => {
                if (user.rooms.includes(roomId)) {
                    user.ws.send(JSON.stringify({
                        type: "chat",
                        message: message,
                        roomId
                    }))
                }
            })
        }
    });
});