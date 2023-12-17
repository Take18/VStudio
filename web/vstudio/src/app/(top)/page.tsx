import { PageParams } from '@/types/PageParams'
import { fetchAll } from './fetch'
import { MoviePanel } from './movies/panel'
import { SongPanel } from './songs/panel'
import { VTuberPanel } from './vtubers/panel'
import { toSearchOptions } from '@/utils/toSearchOptions'

const TopAll = async ({ searchParams: { q } }: PageParams) => {
    const searchOptions = toSearchOptions(q)
    const contents = await fetchAll(searchOptions)

    return contents.map((content) => {
        if (content.type === 'vtuber')
            return (
                <VTuberPanel key={content.vtuber.id} vtuber={content.vtuber} />
            )
        if (content.type === 'movie')
            return <MoviePanel key={content.movie.id} movie={content.movie} />
        if (content.type === 'song')
            return <SongPanel key={content.song.id} song={content.song} />
    })
}

export default TopAll
