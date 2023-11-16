'use client'

import { ComponentProps, ReactElement, Suspense } from 'react'
import { MovieRow } from './MovieRow'

type Props = {
    children: ReactElement<ComponentProps<typeof MovieRow>>[]
}

export const Movies = ({ children }: Props) => {
    return <Suspense fallback={<></>}>{children}</Suspense>
}
