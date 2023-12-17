import { prismaClient } from '@/prismaClient'
import { SearchOptions } from '@/types/SearchOptions'

export type VTuber = {
    id: string
    name: string
    iconPath: string
    subscribers: number
    channelUrl: string
    profile: string
    tags: string[]
    songs: { name: string; id: string }[]
}

export const fetchVTubers = async ({ query = [] }: SearchOptions = {}): Promise<
    VTuber[]
> => {
    try {
        const vtubers = await prismaClient.vTuber.findMany({
            include: { movies: { include: { song: true } } },
            where: {
                AND: query.map((q) => ({
                    OR: [
                        { name: { contains: q } },
                        { profile: { contains: q } },
                        { tags: { has: q } },
                    ],
                })),
            },
        })
        return vtubers.map(({ movies, ...vtuber }) => ({
            ...vtuber,
            songs: movies.map(({ song: { id, name } }) => ({ id, name })),
        }))
    } catch {
        return []
    }
}
