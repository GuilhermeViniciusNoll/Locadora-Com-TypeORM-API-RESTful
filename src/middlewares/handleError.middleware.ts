import "express-async-errors"
import appError from "../errors/appError"
import { ZodError } from "zod"
import { NextFunction, Request, Response } from "express"

const handleError = (err: Error, req: Request, res: Response, next: NextFunction): Response => {
    if (err instanceof appError) return res.status(err.statusCode).json({ message: err.message })
    if (err instanceof ZodError) return res.status(400).json({ message: err.flatten().fieldErrors })

    console.log(err)
    return res.status(500).json({ message: "Internal Server Error" })
}

export default handleError