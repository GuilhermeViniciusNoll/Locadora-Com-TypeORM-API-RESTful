import appError from "../errors/appError"
import { TMovie } from "../interfaces/movies.interfaces"
import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { NextFunction, Request, Response } from "express"

const movieExist = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const movieRepo: Repository<TMovie> = AppDataSource.getRepository("movies")
    const movie: TMovie | null = await movieRepo.findOneBy({ id: parseInt(req.params.id) })

    if (!movie) throw new appError("Movie not found", 404)

    res.locals = { ...res.locals, movie }

    return next()
}

export default movieExist