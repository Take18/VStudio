import { ReactNode } from 'react'

type Props = {
    children: ReactNode
}

const DetailLayout = ({ children }: Props) => {
    return (
        <div className="mx-auto my-8 w-[375px]">
            <div className="border border-gray-200">{children}</div>
        </div>
    )
}

export default DetailLayout
