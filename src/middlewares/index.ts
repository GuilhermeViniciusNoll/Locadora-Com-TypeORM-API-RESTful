import handleError from "./handleError.middleware"
import validBody from "./validBody.middleware"
import nameExist from "./nameExist.middleware"
import movieExist from "./movieExist.middleware"
import pagination from "./pagination.middleware"

export default { nameExist, handleError, validBody, movieExist, pagination }