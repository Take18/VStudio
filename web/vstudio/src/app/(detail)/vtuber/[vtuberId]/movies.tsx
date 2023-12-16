import { MovieRow } from '../../components/MovieRow'
import { fetchMoviesByVTuber } from './fetch'

type Props = { vtuberId: string }

export const Movies = async ({ vtuberId }: Props) => {
    const movies = await fetchMoviesByVTuber(vtuberId)

    return movies.map((movie) => (
        <MovieRow key={movie.id} movie={movie} name={movie.song.name} />
    ))
}
