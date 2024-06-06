import { NextFunction, Request, Response } from "express";
import { HttpException } from "../../types/HttpExeceptions";

export function errorMiddlewares(
    err: HttpException,
    req: Request,
    res: Response,
    next:NextFunction
) {
    return res.status(err.status).json({ 
        status: 500,
        message: err.message || "Internal Server Error"
    });
}