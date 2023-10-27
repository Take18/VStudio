import { fetchSongs } from '../fetch'
import { SongPanel } from './panel'

const TopSongs = async () => {
    const songs = await fetchSongs()

    return (
        <>
            {songs.map((song) => (
                <SongPanel key={song.id} song={song} />
            ))}
        </>
    )
}

export default TopSongs
