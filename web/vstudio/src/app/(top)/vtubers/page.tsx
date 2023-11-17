import { fetchVTubers } from './fetch'
import { VTuberPanel } from './panel'

const TopVTubers = async () => {
    const vtubers = await fetchVTubers()

    return vtubers.map((vtuber) => (
        <VTuberPanel key={vtuber.id} vtuber={vtuber} />
    ))
}

export default TopVTubers
