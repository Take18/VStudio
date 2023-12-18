'use client'

import { useSearch } from '@/app/hooks/useSearch'

export const SearchInput = () => {
    const { value, onChange, onSubmitForm } = useSearch()

    return (
        <form onSubmit={onSubmitForm} className="h-full">
            <input
                type="text"
                className="max-w-80 h-full text-xl"
                placeholder="Search"
                onChange={onChange}
                value={value}
            />
        </form>
    )
}
