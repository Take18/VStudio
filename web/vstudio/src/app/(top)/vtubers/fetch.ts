import { PrismaClient } from '@prisma/client'

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

const prismaClient = new PrismaClient()

export const fetchVTubers = async (): Promise<VTuber[]> => {
    const vtubers = await prismaClient.vTuber.findMany({
        include: { movies: { include: { song: true } } },
    })
    return vtubers.map(({ movies, ...vtuber }) => ({
        ...vtuber,
        songs: movies.map(({ song: { id, name } }) => ({ id, name })),
    }))
}
