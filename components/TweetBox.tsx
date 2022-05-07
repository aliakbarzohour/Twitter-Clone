import {
  CalendarIcon,
  EmojiHappyIcon,
  LocationMarkerIcon,
  PhotographIcon,
  SearchCircleIcon,
} from '@heroicons/react/outline'
import React, { useState } from 'react'

function TweetBox() {
  // State's
  const [input, setInput] = useState<string>('')

  return (
    <div className="flex space-x-2 p-5">
      {/* User Image */}
      <img
        src="https://pbs.twimg.com/profile_images/1461703567862120463/7olS5mTx_400x400.jpg"
        alt="user"
        className="mt-4 h-14 w-14 rounded-full object-cover "
      />
      {/* Tweet box section */}
      <div className="flex flex-1 items-center pl-2">
        <form className="flex flex-1 flex-col">
          <input
          value={input}
          onChange={(e)=>setInput(e.target.value)}
            type="text"
            placeholder="What's Happening ? "
            className="h-24 w-full text-xl outline-none placeholder:text-xl"
          />
          <div className="flex items-center ">
            <div className="flex flex-1 space-x-2 text-twitter">
              {/* Icon's */}
              <PhotographIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <SearchCircleIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <EmojiHappyIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <CalendarIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
              <LocationMarkerIcon className="h-5 w-5 cursor-pointer transition-transform duration-150 ease-out hover:scale-150" />
            </div>
            {/* Button for Tweet */}
            <button disabled={!input} className="rounded-full bg-twitter px-5 py-2 font-bold text-white disabled:opacity-40">
              Tweet
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default TweetBox
