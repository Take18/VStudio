import type { Metadata } from 'next'
import { Header } from './components/organisms/Header'
import './globals.css'
import { Footer } from './components/organisms/Footer'
import Favicon from '/public/vstudio.png'
import { ReactNode } from 'react'

export const metadata: Metadata = {
    title: 'VStudio',
    icons: [{ rel: 'icon', url: Favicon.src }],
}

export default function RootLayout({ children }: { children: ReactNode }) {
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
