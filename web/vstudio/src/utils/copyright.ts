import { COPYRIGHT_FROM, SERVICE_NAME } from '@/consts'
import dayjs from 'dayjs'

export const generateCopyright = (): string => {
    const currentYear = dayjs().year()
    const copyrightYear = ((): string => {
        if (currentYear === COPYRIGHT_FROM) return `${currentYear}`
        return `${COPYRIGHT_FROM}-${currentYear}`
    })()

    return `© ${copyrightYear} ${SERVICE_NAME}`
}
