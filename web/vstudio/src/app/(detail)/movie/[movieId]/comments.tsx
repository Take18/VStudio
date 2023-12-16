import { Comment } from '@/app/components/atoms/Comment'
import { fetchComments } from './fetch'

type Props = { movieId: string }

export const Comments = async ({ movieId }: Props) => {
    const comments = await fetchComments(movieId)

    // TODO: 無限スクロールの実装
    return comments.map(({ content }, index) => (
        // コメントごとに定まるIDがない、かつコメントは変動しないのでindexをkeyに
        <Comment key={index} content={content} />
    ))
}
