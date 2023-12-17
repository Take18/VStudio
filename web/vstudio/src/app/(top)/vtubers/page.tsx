import { PageParams } from '@/types/PageParams'
import { fetchVTubers } from './fetch'
import { VTuberPanel } from './panel'
import { toSearchOptions } from '@/utils/toSearchOptions'

const TopVTubers = async ({ searchParams: { q } }: PageParams) => {
    const searchOptions = toSearchOptions(q)
    const vtubers = await fetchVTubers(searchOptions)

    return vtubers.map((vtuber) => (
        <VTuberPanel key={vtuber.id} vtuber={vtuber} />
    ))
}

export default TopVTubers
