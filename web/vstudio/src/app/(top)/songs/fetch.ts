import { PrismaClient } from '@prisma/client'

export type Song = {
    id: string
    name: string
    videoId: string
    authorName: string
    tags: string[]
    vtubers: { name: string; id: string }[]
}

const prismaClient = new PrismaClient()

export const fetchSongs = async (): Promise<Song[]> => {
    try {
        const songs = await prismaClient.song.findMany({
            include: { movies: { include: { vtuber: true } } },
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
