import { prismaClient } from '@/prismaClient'
import { SearchOptions } from '@/types/SearchOptions'

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

export const fetchMovies = async ({ query = [] }: SearchOptions = {}): Promise<
    Movie[]
> => {
    try {
        const movies = await prismaClient.movie.findMany({
            include: { song: true, vtuber: true },
            where: {
                AND: query.map((q) => ({
                    OR: [
                        {
                            vtuber: { name: { contains: q } },
                        },
                        {
                            song: { name: { contains: q } },
                        },
                        {
                            description: { contains: q },
                        },
                        {
                            tags: { has: q },
                        },
                    ],
                })),
            },
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
