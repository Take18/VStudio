import type { Metadata } from 'next'
import { Header } from './components/Header'
import './globals.css'
import { Footer } from './components/Footer'
import Favicon from '/public/vstudio.png'

export const metadata: Metadata = {
    title: 'VStudio',
    icons: [{ rel: 'icon', url: Favicon.src }],
}

export default function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    return (
        <html lang="ja">
            <body className="h-screen w-full">
                <Header />
                <main className="min-h-[calc(100vh-4rem)] pt-24">
                    {children}
                </main>
                <Footer />
            </body>
        </html>
    )
}
