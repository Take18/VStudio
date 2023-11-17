import { ReactNode, Suspense } from 'react'

type Props = {
    children: ReactNode
}

const DetailLayout = ({ children }: Props) => {
    return (
        <div className="mx-auto my-8 w-[375px]">
            <div className="border border-gray-200">
                <Suspense fallback={<></>}>{children}</Suspense>
            </div>
        </div>
    )
}

export default DetailLayout
