type Props = {
    tags: string[]
}

export const Tags = ({ tags }: Props) => {
    return (
        <span className="h-6 overflow-y-hidden break-words text-center text-base">
            {tags.map((tag) => `#${tag}`).join(' ')}
        </span>
    )
}
