import React, {useEffect, useState}  from 'react'

import {apiTweetsList} from './lookup'
import {Tweet} from './detail'

export function TweetsList(props) {
    const [tweetsInit, setTweetsInit] = useState([])
    const [tweets, setTweets] = useState([])
    const [tweetsDidSet, setTweetsDidSet] = useState(false)
    useEffect(()=>{
      const final = [...props.newTweets].concat(tweetsInit)
      if (final.length !== tweets.length) {
        setTweets(final)
      }
    }, [props.newTweets, tweets, tweetsInit])
  
  
    const handleDidRetweet = (newTweet) =>{
      const updateTweetsInit = [...tweetsInit]
      updateTweetsInit.unshift(newTweet)
      setTweetsInit(updateTweetsInit)
      const updateFinalTweets = [...tweets]
      updateFinalTweets.unshift(tweets)
      setTweets(updateFinalTweets)
    }
  
    useEffect(() => {
      if (tweetsDidSet === false){
        const handleTweetListLookup = (response, status) => {
          if (status === 200){
            setTweetsInit(response)
            setTweetsDidSet(true)
          } else {
            alert("There was an error")
          }
        }
        apiTweetsList(props.username, handleTweetListLookup)
      }
    }, [tweetsInit, tweetsDidSet, setTweetsDidSet, props.username])
    return tweets.map((item, index)=>{
      return <Tweet 
      tweet={item}
      didRetweet={handleDidRetweet}
      className='my-5 py-5 border bg-white text-dark' 
      key={`${index}-{item.id}`} />
    })
  }