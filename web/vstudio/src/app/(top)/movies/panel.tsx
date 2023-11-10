import { Embed } from '@/app/components/atoms/Embed'
import { Movie } from './fetch'
import { Panel } from '../components/Panel'
import Image from 'next/image'
import { formatNumber } from '@/utils/formatter'
import { Goods } from '@/app/components/atoms/Goods'
import { Plays } from '@/app/components/atoms/Plays'
import { Tags } from '@/app/components/atoms/Tags'
import { Comment } from '@/app/components/atoms/Comment'

type Props = {
    movie: Movie
}

export const MoviePanel = ({ movie }: Props) => {
    return (
        <Panel type="歌ってみた" href={`/movie/${movie.id}`}>
            <div className="flex">
                <div className="flex w-44 flex-col gap-2 px-2 py-4">
                    <span className="text-xl">{movie.songName}</span>
                    <Embed width={100} height={70} videoId={movie.videoId} />
                </div>
                <div className="flex w-[calc(100%-11rem)] flex-col items-center gap-[.3rem] px-2 py-4">
                    <span className="h-[2.4rem] text-xl">
                        {movie.vtuberName}
                    </span>
                    <div className="flex h-[1.6rem] justify-around gap-2">
                        <Plays plays={movie.plays} />
                        <Goods goods={movie.goods} />
                    </div>
                    <Comment content={movie.comments[0]?.content} />
                    <Tags tags={movie.tags} />
                </div>
            </div>
        </Panel>
    )
}
