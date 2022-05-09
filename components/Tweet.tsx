import {
  ChatAlt2Icon,
  HeartIcon,
  SwitchHorizontalIcon,
  UploadIcon,
} from '@heroicons/react/outline'
import React, { useEffect, useState } from 'react'
import Timeago from 'react-timeago'
import { Tweet } from '../typings'
import { fetchComments } from '../utils/fetchComments'

interface Props {
  tweet: Tweet
}

function Tweet({ tweet }: Props) {
  const [comments, setComments] = useState<Comment[]>([])
  const refreshComments = async () => {
    const comments: Comment[] = await fetchComments(tweet._id)
    setComments(comments)
  }
  useEffect(() => {
    refreshComments()
  }, [])
  console.log(comments)

  return (
    <div className="flex flex-col space-x-3 border-y border-gray-100 p-5">
      <div className="flex space-x-3">
        {/* Profile */}
        <img
          className="h-10 w-10 rounded-full object-cover"
          src={tweet.profileImg}
          alt="pfimage"
        />
        {/* Content */}
        <div>
          {/* Tweeter Username and Id */}
          <div className="flex items-center space-x-1">
            {/* Username */}
            <p className="mr-1 font-bold">{tweet.username}</p>
            {/* Id */}
            <p className="hidden text-sm text-gray-500 sm:inline">
              @{tweet.username.replace(/\s+/g, '').toLowerCase()} .
            </p>
            {/* Time Ago Components */}
            <Timeago
              className="text-sm text-gray-500"
              date={tweet._createdAt}
            />
          </div>
          {/* Tweet Content */}
          <p className="pt-1">{tweet.text}</p>
          {/* Tweet Image */}
          {tweet.image && (
            <img
              src={tweet.image}
              alt="Post"
              className="m-5 ml-0 mb-1 max-h-60 rounded-lg object-cover shadow-sm"
            />
          )}
        </div>
      </div>

      <div className="mt-5 flex justify-between">
        {/* Comment Icon */}
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <ChatAlt2Icon className="h5 w-5" />
          {comments.length}
        </div>
        {/* Retweet Icon */}
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <SwitchHorizontalIcon className="h5 w-5" />
        </div>
        {/* Like Icon */}
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <HeartIcon className="h5 w-5" />
        </div>
        {/* Upload Icon */}
        <div className="flex cursor-pointer items-center space-x-3 text-gray-400">
          <UploadIcon className="h5 w-5" />
        </div>
      </div>

      {/* Comment Box logic */}
      {comments?.length > 0 && (
        <div className='my-2 mt-5 max-h-44 space-y-5 overflow-y-scroll border-t border-gray-100 p-5 '>
          {comments.map((comment) => (
            <div key={comment._id} className="flex space-x-2 relative">
              <hr  className='border-twitter/30 absolute left-5 top-10 h-8 border-x'/>
              <img
                src={comment.profileImg}
                className="mt-2 h-7 w-7 rounded-full object-cover"
                alt="ProfileImage"
              />
              <div>
                <div className='flex items-center space-x-1'>
                  <p className='mr-1 font-bold'>{comment.username}</p>
                  <p className='hidden text-sm text-gray-500 lg:inline'>
                    @{comment.username.replace(/\s+/g, '').toLowerCase()} .{' '}
                  </p>
                <Timeago
                  className="text-sm text-gray-500"
                  date={tweet._createdAt}
                />
                </div>
              {/* Comment Content */}
              <p>{comment.comment}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  )
}

export default Tweet
