'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { ReactNode, Suspense } from 'react'

type Props = {
    children: ReactNode
}

const TopLayout = ({ children }: Props) => {
    type Tab = {
        name: string
        display: string
        path: string
    }

    const tabs: Tab[] = [
        { name: 'all', display: '総合', path: '/' },
        { name: 'movies', display: '歌ってみた', path: '/movies' },
        { name: 'songs', display: '楽曲', path: '/songs' },
        { name: 'vtubers', display: 'VTuber', path: '/vtubers' },
    ]

    const currentPath = usePathname()

    return (
        <div className="mx-auto my-8 w-[375px]">
            <div className="flex justify-center gap-6">
                {tabs.map(({ name, display, path }, idx) => (
                    <Link
                        key={name}
                        href={path}
                        className={`relative flex h-20 w-[8.25rem] items-center justify-center rounded-t-lg border border-gray-200 text-2xl ${
                            path === currentPath
                                ? 'border-b-white'
                                : 'border-b-gray-200'
                        } ${
                            idx &&
                            'after:absolute after:bottom-[-1px] after:right-[calc(100%+1px)] after:h-20 after:w-6 after:border-b after:border-gray-200'
                        }`}
                    >
                        {display}
                    </Link>
                ))}
            </div>
            <div className="flex flex-col border-x border-b border-gray-200">
                <Suspense fallback={<></>}>{children}</Suspense>
            </div>
        </div>
    )
}

export default TopLayout
