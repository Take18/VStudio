import { PrismaClient } from '@prisma/client'

const prismaClient = new PrismaClient()

export const fetchMovie = async (movieId: string) => {
    try {
        const {
            song: { name, description },
            vtuber: { name: singer, channelUrl, iconPath },
            ...movie
        } = await prismaClient.movie.findFirstOrThrow({
            where: { id: movieId },
            include: { song: true, vtuber: true },
        })

        return {
            ...movie,
            song: { name, description },
            vtuber: { name: singer, channelUrl, iconPath },
        }
    } catch {
        return null
    }
}
