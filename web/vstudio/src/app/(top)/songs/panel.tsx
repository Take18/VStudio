import { Embed } from '@/app/components/Embed'
import { Song } from '../fetch'
import { Panel } from '../../components/Panel'

type Props = {
    song: Song
}

export const SongPanel = ({ song }: Props) => {
    return (
        <Panel type="楽曲" href={`/songs/${song.id}`}>
            <div className="flex">
                <div className="flex w-44 flex-col gap-2 px-2 py-4">
                    <span className="text-xl">{song.name}</span>
                    <Embed width={100} height={70} videoId={song.videoId} />
                </div>
                <div className="flex w-[calc(100%-11rem)] flex-col items-center gap-[.3rem] px-2 py-4">
                    <span className="h-[2.4rem] text-xl">
                        {song.authorName}
                    </span>
                    <ul className="flex w-full list-inside list-disc flex-wrap">
                        {song.vtubers.map(
                            (vtuber, idx) =>
                                idx < 4 && (
                                    <li
                                        key={vtuber.id}
                                        className="h-7 w-1/2 overflow-hidden break-words text-lg"
                                    >
                                        {vtuber.name}
                                    </li>
                                ),
                        )}
                    </ul>
                    <span className="h-6 overflow-y-hidden break-words text-base">
                        {song.tags.map((tag) => `#${tag}`).join(' ')}
                    </span>
                </div>
            </div>
        </Panel>
    )
}
