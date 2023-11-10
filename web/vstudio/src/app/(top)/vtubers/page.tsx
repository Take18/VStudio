import { Suspense } from 'react'
import { fetchVTubers } from './fetch'
import { VTuberPanel } from './panel'

const TopVTubers = async () => {
    const fetchingVTubers = fetchVTubers()

    return (
        <Suspense fallback={<></>}>
            {fetchingVTubers.then((vtubers) =>
                vtubers.map((vtuber) => (
                    <VTuberPanel key={vtuber.id} vtuber={vtuber} />
                )),
            )}
        </Suspense>
    )
}

export default TopVTubers
