import middlewares from "../middlewares"
import moviesSchemas from "../schemas/movies.schemas"
import controllers from "../controllers"
import { Router } from "express"

const movieRoute: Router = Router()

movieRoute.post("", middlewares.validBody(moviesSchemas.createMovieSchema), middlewares.nameExist, controllers.cadastreNewMovieController)
movieRoute.get("", middlewares.pagination, controllers.getMoviesController)
movieRoute.patch("/:id", middlewares.movieExist, middlewares.validBody(moviesSchemas.partialMovieSchema), middlewares.nameExist, controllers.updateMovieController)
movieRoute.delete("/:id", middlewares.movieExist, controllers.deleteMovieController)

export default movieRoute