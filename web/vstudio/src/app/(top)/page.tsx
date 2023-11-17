import { Suspense } from 'react'
import { fetchAll } from './fetch'
import { MoviePanel } from './movies/panel'
import { SongPanel } from './songs/panel'
import { VTuberPanel } from './vtubers/panel'

const TopAll = async () => {
    const contents = await fetchAll()

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
