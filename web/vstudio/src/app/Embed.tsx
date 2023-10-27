'use client'

import { toEmbedUrl } from '@/utils/toEmbedUrl'
import { MouseEventHandler, useState } from 'react'

type Props = {
    width: number
    height: number
    videoId: string
}

export const Embed = ({ width, height, videoId }: Props) => {
    const src = toEmbedUrl(videoId)

    const [started, setStarted] = useState(false)

    const createPostMessage = (func: string) =>
        JSON.stringify({
            event: 'command',
            func,
            args: '',
        })

    const playOrPause: MouseEventHandler<HTMLIFrameElement> = (e) => {
        e.preventDefault()
        e.currentTarget.contentWindow?.postMessage(
            createPostMessage(started ? 'pauseVideo' : 'playVideo'),
            '*',
        )
        setStarted(true)
    }

    return (
        <iframe
            width={width}
            height={height}
            src={src}
            title="YouTube Video Player"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
            onClick={playOrPause}
        />
    )
}
