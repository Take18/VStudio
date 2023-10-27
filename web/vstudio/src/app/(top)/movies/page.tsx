import { fetchMovies } from '../fetch'
import { MoviePanel } from './panel'

const TopMovies = async () => {
    const movies = await fetchMovies()

    return (
        <>
            {movies.map((movie) => (
                <MoviePanel key={movie.id} movie={movie} />
            ))}
        </>
    )
}

export default TopMovies
