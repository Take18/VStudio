import Image from 'next/image'
import { VTuber } from './fetch'
import { Panel } from '../components/Panel'
import { formatNumber } from '@/utils/formatter'
import { Tags } from '@/app/components/atoms/Tags'
import { Icon } from '@/app/components/atoms/Icon'

type Props = {
    vtuber: VTuber
}

export const VTuberPanel = async ({ vtuber }: Props) => {
    return (
        <Panel type="Vtuber" href={`/vtuber/${vtuber.id}`}>
            <div className="flex">
                <div className="flex w-[45%] flex-col items-center gap-4 px-2 py-4">
                    <div className="flex w-full items-center gap-4">
                        <Icon
                            iconPath={vtuber.iconPath}
                            name={vtuber.name}
                            size={36}
                        />
                        <span className="text-xl">{vtuber.name}</span>
                    </div>
                    <span className="text-lg">
                        {formatNumber(vtuber.subscribers)} 登録
                    </span>
                </div>
                <div className="flex w-[55%] flex-col px-2 py-4">
                    <ul className="list-inside list-disc">
                        {vtuber.songs.map((song, idx) =>
                            idx < 3 ? (
                                <li key={song.id} className="text-lg">
                                    {song.name}
                                </li>
                            ) : null,
                        )}
                    </ul>
                    <Tags tags={vtuber.tags} />
                </div>
            </div>
        </Panel>
    )
}
