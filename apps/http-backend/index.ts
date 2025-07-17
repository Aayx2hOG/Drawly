import express from "express";
import type { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { authMiddleware } from "./middleware";
import { CreateRoomSchema, CreateUserSchema, SignInSchema } from "validator";
import { prismaClient } from "db/client";

const app = express();
app.use(express.json());
const jwt_secret = process.env.JWT_SECRET || "secret not found";

app.post("/signup", async (req: Request, res: Response) => {
    const parsedData = CreateUserSchema.safeParse(req.body);
    if (!parsedData.success) {
        console.log("Invalid data", parsedData.error);
        res.json({
            message: "Invalid data",
        });
        return;
    }
    try {
        const user = await prismaClient.user.create({
            data: {
                email: parsedData.data.email,
                password: parsedData.data.password,
                name: parsedData.data.name,
            }
        })
        res.json({
            userId: user.id
        })
    } catch (e) {
        res.status(411).json({
            message: "User already exists",
        });
    }
})

app.post("/signin", async (req: Request, res: Response) => {
    const parsedData = SignInSchema.safeParse(req.body);
    if (!parsedData.success) {
        res.json({
            message: "Invalid data",
        });
        return;
    }

    const user = await prismaClient.user.findFirst({
        where: {
            email: parsedData.data.email,
            password: parsedData.data.password
        }
    })

    if (!user) {
        res.status(403).json({
            message: "User not found",
        });
        return;
    }
    const token = jwt.sign({
        userId: user.id,
    }, jwt_secret);
    res.json({
        token
    })
})

app.post("/room", authMiddleware, async (req: Request, res: Response) => {
    const parsedData = CreateRoomSchema.safeParse(req.body);
    if (!parsedData.success) {
        res.json({
            message: "Invalid data",
        });
        return;
    }

    const userid = req.userId;
    try {
        const room = await prismaClient.room.create({
            data: {
                slug: parsedData.data.name,
                adminId: userid ?? "",
            }
        });

        res.json({
            roomId: room.id
        })
    } catch (e) {
        res.status(411).json({
            message: "Room already exists",
        });
    }
})

app.get("/chats/:roomId", async (req: Request, res: Response) => {
    const roomId = Number(req.params.roomId);
    const messages = await prismaClient.chat.findMany({
        where: {
            roomId: roomId
        },
        orderBy: {
            id: "desc"
        },
        take: 50
    });

    res.json({
        messages
    })
})

app.listen(3001);