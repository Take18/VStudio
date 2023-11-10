import { generateCopyright } from '@/utils/copyright'

export const Footer = () => {
    const copyright = generateCopyright()

    return (
        <footer className="flex h-16 items-center justify-center border-t border-black">
            <p>{copyright}</p>
        </footer>
    )
}
