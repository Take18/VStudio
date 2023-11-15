import { PrismaClient } from '@prisma/client'

export type Movie = {
    id: string
    songName: string
    vtuberName: string
    plays: number
    goods: number
    videoId: string
    comments: {
        content: string
        goods: number
    }[]
    tags: string[]
}

const prismaClient = new PrismaClient()

export const fetchMovies = async (): Promise<Movie[]> => {
    try {
        const movies = await prismaClient.movie.findMany({
            include: { song: true, vtuber: true },
        })
        return movies.map(({ song, vtuber, ...movie }) => ({
            ...movie,
            songName: song.name,
            vtuberName: vtuber.name,
        }))
    } catch {
        return []
    }
}
