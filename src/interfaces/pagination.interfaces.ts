import { TMovie } from "./movies.interfaces"

interface IPaginationParams {
    page: number,
    perPage: number,
    order: string,
    sort: string,
    prevPage: string | null,
    nextPage: string | null
}

interface IPagination {
    prevPage: string | null,
    nextPage: string | null,
    count: number,
    data: TMovie[]
}

export { IPaginationParams, IPagination }