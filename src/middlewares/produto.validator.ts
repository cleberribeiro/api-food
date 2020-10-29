import { NextFunction, Request, Response } from "express";

export default async (request: Request, response: Response, next: NextFunction) => {
    await console.log('DBG[produtoValidator] req', request.body);
    next();
}