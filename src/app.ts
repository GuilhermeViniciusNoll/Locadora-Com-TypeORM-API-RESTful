import "express-async-errors"
import routes from "./routes"
import middlewares from "./middlewares"
import express, { Application } from "express"

const app: Application = express()

app.use(express.json())
app.use("/movies", routes.movieRoute)
app.use(middlewares.handleError)

export default app