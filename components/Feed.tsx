import { RefreshIcon } from '@heroicons/react/outline'
import React, { useState } from 'react'
import { Tweet } from '../typings'
import TweetComponent from '../components/Tweet'
import TweetBox from './TweetBox'
import { fetchTweets } from '../utils/fetchTweets'
import toast from 'react-hot-toast'

interface Props {
  tweets: Tweet[]
}

function Feed({ tweets: tweetsProp }: Props) {
  const [tweets, setTweets] = useState<Tweet[]>(tweetsProp)
  console.log(tweets)
  const handleRefresh = async () => {
    // Refreshing Feed's
    const refreshToast = toast.loading("Refreshing . . .")
    const tweets = await fetchTweets()
    setTweets(tweets)
    // success and close Feed's
    toast.success("Feed Updated ! ", {
      id: refreshToast
    })
  }

  return (
    <div className="col-span-7 border-x lg:col-span-5">
      <div className="flex items-center justify-between">
        <h1 className="p-5 pb-0 text-xl font-bold">Home</h1>
        <RefreshIcon onClick={handleRefresh} className="h8 mr-5 mt-5 w-8 cursor-pointer text-twitter transition-all duration-500 ease-out hover:rotate-180 active:scale-125" />
      </div>

      {/* Tweet Box */}
      <div>
        <TweetBox />
      </div>

      {/* Feed */}
      <div>
        {tweets.map((tweet) => (
          <TweetComponent key={tweet._id} tweet={tweet} />
        ))}
      </div>
      <div></div>
    </div>
  )
}

export default Feed
