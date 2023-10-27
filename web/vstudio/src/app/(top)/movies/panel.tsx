import { Embed } from '@/app/Embed'
import { Movie } from '../fetch'
import { Panel } from '../panel'
import Image from 'next/image'
import { formatNumber } from '@/utils/formatter'

type Props = {
    movie: Movie
}

export const MoviePanel = ({ movie }: Props) => {
    return (
        <Panel type="歌ってみた" href={`/movies/${movie.id}`}>
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
                        <div className="flex items-center gap-1">
                            <Image
                                src={'/plays.svg'}
                                width={10}
                                height={10}
                                alt="再生数"
                            />
                            <span className="text-lg">
                                {formatNumber(movie.plays)}
                            </span>
                        </div>
                        <div className="flex items-center gap-1">
                            <Image
                                src={'/thumbs-up.svg'}
                                width={10}
                                height={10}
                                alt="高評価数"
                            />
                            <span className="text-lg">
                                {formatNumber(movie.goods)}
                            </span>
                        </div>
                    </div>
                    <div className="relative h-[3.6rem] w-full">
                        <div className="border-def absolute right-0 h-[3.6rem] w-[calc(100%-1.8320508rem)]"></div>
                        <div className="border-border absolute top-4 h-[1.1rem] w-[1.9320508rem] origin-top-right skew-x-[60deg] border-l-2 border-t bg-white"></div>
                        <span className="absolute right-0 h-[3.6rem] w-[calc(100%-1.8320508rem)] overflow-hidden border border-transparent p-1 text-base">
                            {movie.comments[0]?.content ?? ''}
                        </span>
                    </div>
                    <span className="h-6 overflow-y-hidden break-words text-center text-base">
                        {movie.tags.map((tag) => `#${tag}`).join(' ')}
                    </span>
                </div>
            </div>
        </Panel>
    )
}
