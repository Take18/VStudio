'use client'

import { useSearch } from '@/app/hooks/useSearch'

export const SearchInput = () => {
    const { value, onChange, onSubmitForm } = useSearch()

    return (
        <form onSubmit={onSubmitForm}>
            <input
                type="text"
                className="h-full w-80 text-xl"
                placeholder="Search"
                onChange={onChange}
                value={value}
            />
        </form>
    )
}
