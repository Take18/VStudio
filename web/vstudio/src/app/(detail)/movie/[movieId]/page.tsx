import { PageParams } from '@/types/PageParams'
import { fetchMovie } from './fetch'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Icon } from '@/app/components/atoms/Icon'
import { Plays } from '@/app/components/atoms/Plays'
import { Goods } from '@/app/components/atoms/Goods'
import { Tags } from '@/app/components/atoms/Tags'
import { Embed } from '@/app/components/atoms/Embed'
import { Comment } from '@/app/components/atoms/Comment'

const Movie = async ({ params: { movieId } }: PageParams<['movieId']>) => {
    const movie = await fetchMovie(movieId)

    if (movie === null) notFound()

    return (
        <div className="w-full">
            <div className="m-4 flex">
                <div className="flex w-3/5 flex-col gap-4 pr-1">
                    <h1 className="text-2xl font-semibold">
                        {movie.song.name}
                    </h1>
                    <Link
                        href={movie.vtuber.channelUrl}
                        className="flex h-[3.6rem] items-center justify-start gap-4 overflow-hidden"
                    >
                        <Icon
                            iconPath={movie.vtuber.iconPath}
                            name={movie.vtuber.name}
                            size={36}
                        />
                        <h2 className="whitespace-nowrap text-xl">
                            {movie.vtuber.name}
                        </h2>
                    </Link>
                    <div className="flex justify-center gap-4">
                        <Plays plays={movie.plays} />
                        <Goods goods={movie.goods} />
                    </div>
                    <div className="flex justify-center">
                        <Tags tags={movie.tags} />
                    </div>
                </div>
                <div className="flex w-2/5 flex-col items-center gap-4 pl-1">
                    <Embed width={120} height={84} videoId={movie.videoId} />
                    <p className="h-32 w-full overflow-hidden">
                        {movie.description}
                    </p>
                </div>
            </div>
            <div className="m-4 flex flex-col gap-4">
                {/* TODO: 無限スクロールの実装 */}
                {movie.comments.map(({ content }, index) => (
                    // コメントごとに定まるIDがない、かつコメントは変動しないのでindexをkeyに
                    <Comment key={index} content={content} />
                ))}
            </div>
        </div>
    )
}

export default Movie
