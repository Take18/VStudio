import { formatNumber } from '@/utils/formatter'
import Image from 'next/image'

type Props = {
    goods: number
}

export const Goods = ({ goods }: Props) => {
    return (
        <div className="flex items-center gap-1">
            <Image
                src={'/thumbs-up.svg'}
                width={10}
                height={10}
                alt="高評価数"
            />
            <span className="text-lg">{formatNumber(goods)}</span>
        </div>
    )
}
