import Link from 'next/link'
import { ReactNode } from 'react'

type Props = {
    type: string
    href: string
    children: ReactNode
}

export const Panel = ({ type, href, children }: Props) => {
    return (
        <div className="m-4 w-[calc(100%-2rem)]">
            <Link
                href={href}
                className="relative block h-8 w-40 overflow-hidden border-l border-gray-200"
            >
                <div className="h-full w-full origin-bottom-left skew-x-[45deg] border-r border-t border-gray-200"></div>
                <div className="absolute left-0 top-0 flex h-full w-full items-center justify-center">
                    {type}
                </div>
            </Link>
            <Link
                href={href}
                className="block w-full border border-gray-200 shadow-md"
            >
                {children}
            </Link>
        </div>
    )
}
