import schemas from "../schemas/movies.schemas"

type TMovie = Zod.infer<typeof schemas.movieSchema>
type TCreateMovie = Zod.infer<typeof schemas.createMovieSchema>
type TPartialMovie = Zod.infer<typeof schemas.partialMovieSchema>

export { TMovie, TCreateMovie, TPartialMovie }