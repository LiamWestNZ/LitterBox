import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {FeedComponent, TweetsComponent, TweetDetailComponent} from './tweets'
import {ProfileBadgeComponent} from './profiles'

const e = React.createElement

const appEl = document.getElementById('root')
if (appEl) {
  ReactDOM.render(<App />, appEl);
}
const tweetsEl = document.getElementById("LitterFeed")
if (tweetsEl) {
  ReactDOM.render(e(TweetsComponent, tweetsEl.dataset), tweetsEl);
}

const tweetsFeedEl = document.getElementById("LitterFeed-mainfeed")
if (tweetsFeedEl) {
  ReactDOM.render(e(FeedComponent, tweetsFeedEl.dataset), tweetsFeedEl);
}

const tweetDetailElements = document.querySelectorAll(".litter-detail")

tweetDetailElements.forEach(container=> {
    ReactDOM.render(
        e(TweetDetailComponent, container.dataset), 
        container);
})

const userProfileBadgeElement = document.querySelectorAll(".litter-profile-badge")

userProfileBadgeElement.forEach(container=> {
    ReactDOM.render(
        e(ProfileBadgeComponent, container.dataset), 
        container);
    })
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
