import { Suspense } from 'react'
import { fetchSongs } from './fetch'
import { SongPanel } from './panel'

const TopSongs = async () => {
    const fetchingSongs = fetchSongs()

    return (
        <Suspense fallback={<></>}>
            {fetchingSongs.then((songs) =>
                songs.map((song) => <SongPanel key={song.id} song={song} />),
            )}
        </Suspense>
    )
}

export default TopSongs
