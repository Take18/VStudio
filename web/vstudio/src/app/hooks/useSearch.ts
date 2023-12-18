import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { ChangeEventHandler, FormEventHandler, useState } from 'react'

export const useSearch = () => {
    const searchParams = useSearchParams()
    const q = searchParams.getAll('q')
    const [searchQuery, setSearchQuery] = useState(q.join(' '))
    const pathname = usePathname()
    const router = useRouter()

    const onChange: ChangeEventHandler<HTMLInputElement> = (e) =>
        setSearchQuery(e.currentTarget.value)
    const onSubmitForm: FormEventHandler<HTMLFormElement> = (e) => {
        e.preventDefault()

        const targetTab = (() => {
            if (pathname.startsWith('/movies')) return '/movies'
            if (pathname.startsWith('/songs')) return '/songs'
            if (pathname.startsWith('/vtubers')) return '/vtubers'
            return '/'
        })()

        const separatedSearchQueries = searchQuery.split(/\s+/)
        const query = separatedSearchQueries.map((q) => `q=${q}`).join('&')
        router.push(`${targetTab}?${query}`)
    }

    return { value: searchQuery, onChange, onSubmitForm }
}
