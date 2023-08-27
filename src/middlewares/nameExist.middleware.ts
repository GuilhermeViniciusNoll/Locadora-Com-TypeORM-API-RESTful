import { NextFunction, Request, Response } from "express";
import { Repository } from "typeorm";
import { TMovie } from "../interfaces/movies.interfaces";
import { AppDataSource } from "../data-source";
import appError from "../errors/appError";

const nameExist = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    const movieRepo: Repository<TMovie> = AppDataSource.getRepository("movies")
    const movie: TMovie | null = await movieRepo.findOneBy({ name: String(req.body.name) })
    
    if (movie) {
        throw new appError("Movie already exists.", 409)
    }
    return next()
}

export default nameExist