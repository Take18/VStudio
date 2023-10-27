export const numberFormatter = new Intl.NumberFormat()

export const formatNumber = (num: number): string => {
    return numberFormatter.format(num)
}
