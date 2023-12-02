import { PageParams } from '@/types/PageParams'
import { fetchSong } from './fetch'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Icon } from '@/app/components/atoms/Icon'
import { Plays } from '@/app/components/atoms/Plays'
import { Goods } from '@/app/components/atoms/Goods'
import { Tags } from '@/app/components/atoms/Tags'
import { Embed } from '@/app/components/atoms/Embed'
import { Suspense } from 'react'
import { Movies } from './movies'

const Song = async ({ params: { songId } }: PageParams<['songId']>) => {
    const song = await fetchSong(songId)

    if (song === null) notFound()

    return (
        <div className="w-full">
            <div className="m-4 flex">
                <div className="flex w-3/5 flex-col gap-4 pr-1">
                    <h1 className="text-2xl font-semibold">{song.name}</h1>
                    <Link
                        href={song.author.channelUrl}
                        className="flex h-[3.6rem] items-center justify-start gap-4 overflow-hidden"
                    >
                        <Icon
                            iconPath={song.author.iconPath}
                            name={song.author.name}
                            size={36}
                        />
                        <h2 className="whitespace-nowrap text-xl">
                            {song.author.name}
                        </h2>
                    </Link>
                    <div className="flex justify-center gap-4">
                        <Plays plays={song.plays} />
                        <Goods goods={song.goods} />
                    </div>
                    <div className="flex justify-center">
                        <Tags tags={song.tags} />
                    </div>
                </div>
                <div className="flex w-2/5 flex-col items-center gap-4 pl-1">
                    <Embed width={120} height={84} videoId={song.videoId} />
                    <p className="h-32 w-full overflow-hidden">
                        {song.description}
                    </p>
                </div>
            </div>
            <hr />
            <div className="m-4 flex flex-col gap-4">
                <Suspense fallback={<></>}>
                    <Movies songId={songId} />
                </Suspense>
            </div>
        </div>
    )
}

export default Song
