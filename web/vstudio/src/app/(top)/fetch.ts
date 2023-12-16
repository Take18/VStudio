import { VTuber, fetchVTubers } from './vtubers/fetch'
import { Song, fetchSongs } from './songs/fetch'
import { Movie, fetchMovies } from './movies/fetch'

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

export const fetchAll = async (): Promise<All[]> => {
    const fetchingVTubers: Promise<All[]> = fetchVTubers().then((vtubers) =>
        vtubers.map((vtuber) => ({ type: 'vtuber', vtuber })),
    )
    const fetchingSongs: Promise<All[]> = fetchSongs().then((songs) =>
        songs.map((song) => ({ type: 'song', song })),
    )
    const fetchingMovies: Promise<All[]> = fetchMovies().then((movies) =>
        movies.map((movie) => ({ type: 'movie', movie })),
    )
    return Promise.all([fetchingVTubers, fetchingSongs, fetchingMovies]).then(
        (promises) => promises.flat(),
    )
}
