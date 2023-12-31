import Image from 'next/image'
import Link from 'next/link'
import { SearchInput } from '../molecules/SearchInput'

export const Header = () => {
    return (
        <header className="fixed top-0 z-10 flex h-24 w-full items-center justify-between border-b border-black bg-white px-16">
            <Link href={'/'}>
                <Image
                    src={'/vstudio.png'}
                    alt="VStudio"
                    width={50}
                    height={50}
                />
            </Link>
            <div className="my-6 flex justify-between gap-4">
                <button
                    type="button"
                    className="border-def flex h-12 w-12 items-center justify-center shadow-md"
                >
                    <Image
                        src={'/sort.svg'}
                        alt="ソート"
                        width={20}
                        height={20}
                    />
                </button>
                <div className="border-def flex h-12 items-center gap-4 px-2 shadow-md">
                    <Image
                        src={'/search.svg'}
                        alt="検索"
                        width={20}
                        height={20}
                    />
                    <SearchInput />
                </div>
            </div>
        </header>
    )
}
