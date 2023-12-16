import { MovieRow } from '../../components/MovieRow'
import { fetchMoviesBySong } from './fetch'

type Props = { songId: string }

export const Movies = async ({ songId }: Props) => {
    const movies = await fetchMoviesBySong(songId)

    return movies.map((movie) => (
        <MovieRow key={movie.id} movie={movie} name={movie.vtuber.name} />
    ))
}
