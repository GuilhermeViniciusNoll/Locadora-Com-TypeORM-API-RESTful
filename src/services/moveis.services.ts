import moviesSchemas from "../schemas/movies.schemas"
import { Repository } from "typeorm"
import { AppDataSource } from "../data-source"
import { TCreateMovie, TMovie } from "../interfaces/movies.interfaces"
import { IPagination, IPaginationParams } from "../interfaces/pagination.interfaces"

const cadastreNewMovieService = async (payload: TCreateMovie): Promise<TMovie> => {
    const movieRepo: Repository<TMovie> = AppDataSource.getRepository("movies")
    const movie: TMovie = movieRepo.create(payload)

    await movieRepo.save(movie)

    return moviesSchemas.movieSchema.parse(movie)
}

const getMoviesService = async (payload: IPaginationParams): Promise<IPagination> => {
    const movieRepo: Repository<TMovie> = AppDataSource.getRepository("movies")
    const [listMovies, count]: Array<TMovie[] | number> = await movieRepo.findAndCount({ order: { [payload.sort]: payload.order }, skip: payload.page, take: payload.perPage })
    const result: IPagination = {
        prevPage: payload.prevPage,
        nextPage: count - payload.page <= payload.perPage ? null : payload.nextPage,
        count: count,
        data: listMovies
    }

    return result
}

const updateMovieService = async (movie: TMovie, payload: Omit<TMovie, "id">): Promise<TMovie> => {
    const movieRepo: Repository<TMovie> = AppDataSource.getRepository("movies")
    const data: TMovie = { ...movie, ...payload }
    const updateMovie: TMovie = await movieRepo.save({ id: movie.id, name: data.name, description: data.description, duration: data.duration, price: data.price, })

    return moviesSchemas.movieSchema.parse(updateMovie)
}

const deleteMovieService = async (payload: TMovie) => {
    const movieRepo: Repository<TMovie> = AppDataSource.getRepository("movies")
    await movieRepo.remove(payload)
}

export { cadastreNewMovieService, getMoviesService, deleteMovieService, updateMovieService }