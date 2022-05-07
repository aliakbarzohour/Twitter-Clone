import React from 'react'
import {Tweet} from '../typings'

interface Props {
  tweet: Tweet
}

function Tweet({ tweet }: Props) {
  return <div>
      <div>
          <img src={tweet.profileImg} alt="pfimage" />

          <div>
              <div>
                  <p>{tweet.username}</p>
                  <p>@{tweet.username.replace(/\s+/g, '').toLowerCase()}</p>
              </div>
          </div>
      </div>
  </div>
}

export default Tweet
