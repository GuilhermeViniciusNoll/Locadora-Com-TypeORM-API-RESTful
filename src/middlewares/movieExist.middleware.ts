import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { TMovie } from "../interfaces/movies.interfaces";
import { AppDataSource } from "../data-source";
import appError from "../errors/appError";

const movieExist = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const movieRepo: Repository<TMovie> = AppDataSource.getRepository("movies")
    const movie: TMovie | null = await movieRepo.findOneBy({ id: parseInt(req.params.id) })

    if (!movie) throw new appError("Movie not found", 404)

    return next()
}

export default movieExist