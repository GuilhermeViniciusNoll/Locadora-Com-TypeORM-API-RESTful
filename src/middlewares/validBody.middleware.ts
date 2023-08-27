import { NextFunction, Request, Response } from "express";
import { ZodTypeAny } from "zod";

const validBody = (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction): void => {
    schema.parse(req.body)
    return next()
}

export default validBody