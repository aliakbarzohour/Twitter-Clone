import { CommentBody } from "../typings"

export const fetchComments = async (tweetId: string) => {
    const result = await fetch(`/api/getComments?tweetId=${tweetId}`)
    const comments: Comment[] = await result.json()
    return comments
}
