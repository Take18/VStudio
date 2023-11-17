import { Comment } from '@/app/components/atoms/Comment'
import { Embed } from '@/app/components/atoms/Embed'
import { Goods } from '@/app/components/atoms/Goods'
import { Plays } from '@/app/components/atoms/Plays'
import { Movie } from '@prisma/client'

type Props = {
    movie: Movie
    name: string
}

export const MovieRow = ({ movie, name }: Props) => {
    return (
        <div className="flex items-center justify-between gap-4">
            <Embed width={100} height={70} videoId={movie.videoId} />
            <div className="flex w-44 flex-col items-end justify-center gap-2">
                <span className="w-full overflow-hidden whitespace-nowrap">
                    {name}
                </span>
                <Plays plays={movie.plays} />
                <Goods goods={movie.goods} />
            </div>
            <div className="flex w-[120px] flex-col gap-2">
                {movie.comments.map(
                    (comment, index) =>
                        index < 2 && (
                            <Comment key={index} content={comment.content} />
                        ),
                )}
            </div>
        </div>
    )
}
