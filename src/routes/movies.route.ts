import middlewares from "../middlewares"
import moviesSchemas from "../schemas/movies.schemas"
import controllers from "../controllers"
import { Router } from "express"

const movieRoute: Router = Router()

movieRoute.post("", middlewares.validBody(moviesSchemas.createMovieSchema), middlewares.nameExist, controllers.cadastreNewMovieController)
movieRoute.get("", controllers.getMoviesController)

export default movieRoute