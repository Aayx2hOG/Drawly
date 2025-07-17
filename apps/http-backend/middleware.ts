import type { Request, Response, NextFunction } from "express";
import jwt from "jsonwebtoken";

const jwt_secret = process.env.JWT_SECRET || "secret not found";

export function authMiddleware(req: Request, res: Response, next: NextFunction) {
    const token = req.headers["authorization"] ?? "";

    const decoded = jwt.verify(token, jwt_secret);

    if (typeof decoded === "string") {
        return res.status(403).json({
            message: "Invalid token"
        });
    }

    if (decoded) {
        req.userId = decoded.userId;
        next();
    } else {
        res.status(403).json({
            message: "Unauthorized"
        });
    }

}