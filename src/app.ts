import "express-async-errors"
import middlewares from "./middlewares"
import express, { Application } from "express"
import routes from "./routes"

const app: Application = express()

app.use(express.json())

app.use("/movies", routes.movieRoute)

app.use(middlewares.handleError)
export default app