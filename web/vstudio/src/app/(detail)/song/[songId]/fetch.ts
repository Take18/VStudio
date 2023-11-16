import { PrismaClient } from '@prisma/client'

const prismaClient = new PrismaClient()

export const fetchSong = async (songId: string) => {
    try {
        const song = await prismaClient.song.findFirstOrThrow({
            where: { id: songId },
        })
        return song
    } catch {
        return null
    }
}

export const fetchMoviesBySong = async (songId: string) => {
    try {
        const movies = await prismaClient.movie.findMany({
            include: { vtuber: true },
            where: { songId },
        })
        return movies
    } catch {
        return []
    }
}
