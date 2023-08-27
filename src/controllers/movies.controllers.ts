import services from "../services"
import { Request, Response } from "express"
import { TCreateMovie, TMovie } from "../interfaces/movies.interfaces"

const cadastreNewMovieController = async (req: Request, res: Response): Promise<Response> => {
    const payload: TCreateMovie = req.body
    const newMovie: TMovie = await services.cadastreNewMovieService(payload)
    return res.status(201).send(newMovie)
}

const getMoviesController = async (req: Request, res: Response,): Promise<Response> => {
    const listMovies: TMovie[] = await services.getMoviesService()
    return res.status(200).send(listMovies)
}

export { cadastreNewMovieController, getMoviesController }