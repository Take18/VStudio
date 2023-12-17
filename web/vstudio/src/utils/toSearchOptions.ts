import { SearchOptions } from '@/types/SearchOptions'

export const toSearchOptions = (q: string | string[] = []): SearchOptions => {
    if (typeof q === 'string') return { query: [q] }
    return { query: q }
}
