import { PageParams } from '@/types/PageParams'
import { fetchSongs } from './fetch'
import { SongPanel } from './panel'
import { toSearchOptions } from '@/utils/toSearchOptions'

const TopSongs = async ({ searchParams: { q } }: PageParams) => {
    const searchOptions = toSearchOptions(q)
    const songs = await fetchSongs(searchOptions)

    return songs.map((song) => <SongPanel key={song.id} song={song} />)
}

export default TopSongs
