import { fetchVTubers } from '../fetch'
import { VTuberPanel } from './panel'

const TopAll = async () => {
    const vtubers = await fetchVTubers()

    return (
        <>
            {vtubers.map((vtuber) => (
                <VTuberPanel key={vtuber.id} vtuber={vtuber} />
            ))}
        </>
    )
}

export default TopAll
