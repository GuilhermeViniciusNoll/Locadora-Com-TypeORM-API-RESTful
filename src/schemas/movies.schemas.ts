import { z } from "zod"

const movieSchema = z.object({
    id: z.number().positive().int(),
    name: z.string().min(1).max(50),
    description: z.string().nullable().default(null),
    duration: z.number().gt(0).int(),
    price: z.number().int().gt(0)
})

const createMovieSchema = movieSchema.omit({ id: true })
const partialMovieSchema = movieSchema.partial()

export default { movieSchema, createMovieSchema, partialMovieSchema } 