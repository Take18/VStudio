import { PrismaClient } from '@prisma/client'

const prismaClient = new PrismaClient()

export const fetchVTuber = async (vtuberId: string) => {
    try {
        const vtuber = await prismaClient.vTuber.findFirstOrThrow({
            where: { id: vtuberId },
        })
        return vtuber
    } catch {
        return null
    }
}

export const fetchMoviesByVTuber = async (vtuberId: string) => {
    try {
        const movies = await prismaClient.movie.findMany({
            include: { song: true },
            where: {
                vtuberId,
            },
        })
        return movies
    } catch {
        return []
    }
}
