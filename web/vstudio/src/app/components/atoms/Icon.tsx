import Image from 'next/image'

type Props = {
    iconPath: string
    name: string
    size: number
}

export const Icon = ({ iconPath, name, size }: Props) => {
    return (
        <Image
            src={iconPath}
            alt={`${name}アイコン`}
            width={size}
            height={size}
            className="rounded-full"
        />
    )
}
