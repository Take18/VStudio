import { PageParams } from '@/types/PageParams'
import { fetchMovies } from './fetch'
import { MoviePanel } from './panel'
import { toSearchOptions } from '@/utils/toSearchOptions'

const TopMovies = async ({ searchParams: { q } }: PageParams) => {
    const searchOptions = toSearchOptions(q)
    const movies = await fetchMovies(searchOptions)

    return movies.map((movie) => <MoviePanel key={movie.id} movie={movie} />)
}

export default TopMovies
