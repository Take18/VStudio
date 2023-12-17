import { prismaClient } from '@/prismaClient'
import { SearchOptions } from '@/types/SearchOptions'

export type Song = {
    id: string
    name: string
    videoId: string
    authorName: string
    tags: string[]
    vtubers: { name: string; id: string }[]
}

export const fetchSongs = async ({ query = [] }: SearchOptions = {}): Promise<
    Song[]
> => {
    try {
        const songs = await prismaClient.song.findMany({
            include: { movies: { include: { vtuber: true } } },
            where: {
                AND: query.map((q) => ({
                    OR: [
                        { name: { contains: q } },
                        { description: { contains: q } },
                        { tags: { has: q } },
                    ],
                })),
            },
        })
        return songs.map(({ movies, author, ...song }) => ({
            ...song,
            authorName: author.name,
            vtubers: movies.map(({ vtuber: { id, name } }) => ({ id, name })),
        }))
    } catch {
        return []
    }
}
