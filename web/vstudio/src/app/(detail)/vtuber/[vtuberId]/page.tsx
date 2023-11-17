import { PageParams } from '@/types/PageParams'
import { fetchMoviesByVTuber, fetchVTuber } from './fetch'
import { notFound } from 'next/navigation'
import Link from 'next/link'
import { Icon } from '@/app/components/atoms/Icon'
import { formatNumber } from '@/utils/formatter'
import { Movies } from '../../components/Movies'
import { MovieRow } from '../../components/MovieRow'
import { Tags } from '@/app/components/atoms/Tags'

const VTuber = async ({ params: { vtuberId } }: PageParams<['vtuberId']>) => {
    const vtuber = await fetchVTuber(vtuberId)
    const movies = await fetchMoviesByVTuber(vtuberId)

    if (vtuber === null) notFound()

    return (
        <div className="w-full">
            <div className="m-4 flex">
                <div className="flex w-3/5 flex-col gap-4 pr-1">
                    <Link
                        href={vtuber.channelUrl}
                        className="flex items-center justify-start gap-4 overflow-hidden"
                    >
                        <Icon
                            iconPath={vtuber.iconPath}
                            name={vtuber.name}
                            size={50}
                        />
                        <h1 className="whitespace-nowrap text-2xl">
                            {vtuber.name}
                        </h1>
                    </Link>
                    <div>
                        <span className="text-xl">
                            {formatNumber(vtuber.subscribers)} 登録
                        </span>
                    </div>
                    <div className="flex justify-center">
                        <Tags tags={vtuber.tags} />
                    </div>
                </div>
                <div className="flex w-2/5">
                    <p className="h-32 w-full overflow-hidden">
                        {vtuber.profile}
                    </p>
                </div>
            </div>
            <hr />
            <div className="m-4 flex flex-col gap-4">
                <Movies>
                    {movies.map((movie) => (
                        <MovieRow
                            key={movie.id}
                            movie={movie}
                            name={movie.song.name}
                        />
                    ))}
                </Movies>
            </div>
        </div>
    )
}

export default VTuber
