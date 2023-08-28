import { ZodTypeAny } from "zod"
import { NextFunction, Request, Response } from "express"

const validBody = (schema: ZodTypeAny) => (req: Request, res: Response, next: NextFunction): void => {
    schema.parse(req.body)
    return next()
}

export default validBody