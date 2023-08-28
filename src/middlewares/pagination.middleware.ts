import { IPaginationParams } from "../interfaces/pagination.interfaces"
import { NextFunction, Request, Response } from "express"

const pagination = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    let page: number = Number(req.query.page)
    let perPage: number = Number(req.query.perPage)
    let order: string = String(req.query.order)
    let sort: string = String(req.query.sort)

    order = order && sort && (sort === "price" || sort === "duration") && ((order === "asc") || (order === "desc")) ? order : "asc"
    sort = sort && (sort === "price" || sort === "duration") ? sort : "id"
    perPage = perPage && perPage > 0 && Number.isInteger(perPage) && perPage < 6 ? perPage : 5
    page = page && page > 0 && Number.isInteger(page) ? page : 1

    const baseUrl: string = "http://localhost:3000/movies"
    const prevPage: string = `${baseUrl}?page=${page - 1}&perPage=${perPage}`
    const nextPage: string = `${baseUrl}?page=${page + 1}&perPage=${perPage}`

    const queryParams: IPaginationParams = {
        page: perPage * (page - 1),
        perPage,
        sort,
        order,
        prevPage: page === 1 ? null : prevPage,
        nextPage: nextPage
    }

    res.locals = { ...res.locals, queryParams }

    return next()
}

export default pagination