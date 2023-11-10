import { Suspense } from 'react'
import { fetchMovies } from './fetch'
import { MoviePanel } from './panel'

const TopMovies = async () => {
    const fetchingMovies = fetchMovies()

    return (
        <Suspense fallback={<></>}>
            {fetchingMovies.then((movies) =>
                movies.map((movie) => (
                    <MoviePanel key={movie.id} movie={movie} />
                )),
            )}
        </Suspense>
    )
}

export default TopMovies
