import moviesSchemas from "../schemas/movies.schemas";
import { Repository } from "typeorm";
import { AppDataSource } from "../data-source";
import { TCreateMovie, TMovie } from "../interfaces/movies.interfaces";


const cadastreNewMovieService = async (payload: TCreateMovie): Promise<TMovie> => {
    const movieRepo: Repository<TMovie> = AppDataSource.getRepository("movies")
    const movie: TMovie = movieRepo.create(payload)

    await movieRepo.save(movie)

    return moviesSchemas.movieSchema.parse(movie)
}

const getMoviesService = async (): Promise<TMovie[]> => {
    const movieRepo: Repository<TMovie> = AppDataSource.getRepository("movies")
    const listMovies: TMovie[] = await movieRepo.find()

    return listMovies
}

export { cadastreNewMovieService, getMoviesService }