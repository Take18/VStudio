import { formatNumber } from '@/utils/formatter'
import Image from 'next/image'

type Props = {
    plays: number
}

export const Plays = ({ plays }: Props) => {
    return (
        <div className="flex items-center gap-1">
            <Image src={'/plays.svg'} width={10} height={10} alt="再生数" />
            <span className="text-lg">{formatNumber(plays)}</span>
        </div>
    )
}
