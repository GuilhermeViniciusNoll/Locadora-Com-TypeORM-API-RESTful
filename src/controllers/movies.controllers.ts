import services from "../services"
import { Request, Response } from "express"
import { TCreateMovie, TMovie } from "../interfaces/movies.interfaces"
import { IPagination, IPaginationParams } from "../interfaces/pagination.interfaces"

const cadastreNewMovieController = async (req: Request, res: Response): Promise<Response> => {
    const payload: TCreateMovie = req.body
    const newMovie: TMovie = await services.cadastreNewMovieService(payload)
    return res.status(201).send(newMovie)
}

const getMoviesController = async (req: Request, res: Response,): Promise<Response> => {
    const payload: IPaginationParams = res.locals.queryParams
    const listMovies: IPagination = await services.getMoviesService(payload)
    return res.status(200).send(listMovies)
}

const updateMovieController = async (req: Request, res: Response,): Promise<Response> => {
    const payload: Omit<TMovie, "id"> = req.body
    const movie: TMovie = await services.updateMovieService(res.locals.movie, payload)
    return res.status(200).json(movie)
}

const deleteMovieController = async (req: Request, res: Response,): Promise<Response> => {
    const payload: TMovie = res.locals.movie
    await services.deleteMovieService(payload)
    return res.status(204).send()
}


export { cadastreNewMovieController, getMoviesController, deleteMovieController, updateMovieController }