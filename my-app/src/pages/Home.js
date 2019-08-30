import React, {useState} from 'react'
import App from '../containers/App'
import TweetForm from '../pages/TweetForm'
import { useSelector, useDispatch } from 'react-redux';

const Home = () =>  {
    const tweets = useSelector(state =>state.tweets)
    const dispatch = useDispatch()
    const  handleSubmit = ({ tweet }) => {
        dispatch({
            type:'TWEETS_ADD',
            payload: tweet
        })
    }


    return (
        <App>
            <TweetForm onSubmit={handleSubmit}/>
            <ul>
                {tweets.map((tweet, index) => (
                    <li>{ tweet }</li>
                ))}
            </ul>
        </App>
    )
}

export default Home