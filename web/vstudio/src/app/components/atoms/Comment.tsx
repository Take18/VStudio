type Props = {
    content?: string
}

export const Comment = ({ content = '' }: Props) => {
    return (
        <div className="relative h-[3.6rem] w-full">
            <div className="border-def absolute right-0 h-[3.6rem] w-[calc(100%-1.8320508rem)]"></div>
            <div className="absolute top-4 h-[1.1rem] w-[1.9320508rem] origin-top-right skew-x-[60deg] border-l-2 border-t border-border bg-white"></div>
            <span className="absolute right-0 h-[3.6rem] w-[calc(100%-1.8320508rem)] overflow-hidden border border-transparent p-1 text-base">
                {content}
            </span>
        </div>
    )
}
