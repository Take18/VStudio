import { prismaClient } from '@/prismaClient'
import { Prisma } from '@prisma/client'

export const fetchMovie = async (movieId: string) => {
    type Select = Exclude<
        keyof Prisma.MovieSelect,
        'comments' | 'vtuberId' | 'songId'
    >
    try {
        const select: Record<Select, true> = {
            id: true,
            song: true,
            vtuber: true,
            plays: true,
            goods: true,
            description: true,
            uploadedAt: true,
            tags: true,
            videoId: true,
        }
        const {
            song: { name, description },
            vtuber: { name: singer, channelUrl, iconPath },
            ...movie
        } = await prismaClient.movie.findFirstOrThrow({
            where: { id: movieId },
            select,
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

export const fetchComments = async (movieId: string) => {
    try {
        const { comments } = await prismaClient.movie.findFirstOrThrow({
            where: { id: movieId },
            select: { comments: true },
        })
        return comments
    } catch {
        return []
    }
}
