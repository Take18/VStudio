import { VTuber, fetchVTubers } from './vtubers/fetch'
import { Song, fetchSongs } from './songs/fetch'
import { Movie, fetchMovies } from './movies/fetch'
import { SearchOptions } from '@/types/SearchOptions'

export type All =
    | {
          type: 'vtuber'
          vtuber: VTuber
      }
    | {
          type: 'song'
          song: Song
      }
    | {
          type: 'movie'
          movie: Movie
      }

export const fetchAll = async (
    searchOptions: SearchOptions = {},
): Promise<All[]> => {
    const fetchingVTubers: Promise<All[]> = fetchVTubers(searchOptions).then(
        (vtubers) => vtubers.map((vtuber) => ({ type: 'vtuber', vtuber })),
    )
    const fetchingSongs: Promise<All[]> = fetchSongs(searchOptions).then(
        (songs) => songs.map((song) => ({ type: 'song', song })),
    )
    const fetchingMovies: Promise<All[]> = fetchMovies(searchOptions).then(
        (movies) => movies.map((movie) => ({ type: 'movie', movie })),
    )
    return Promise.all([fetchingVTubers, fetchingSongs, fetchingMovies]).then(
        (promises) => promises.flat(),
    )
}
