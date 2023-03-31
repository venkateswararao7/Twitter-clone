import React from 'react';
import Tweet from '../Tweet';
import Home from './Home';
import NewFeed from './NewFeed';
import "../../styles/Feed.css";
function Feed() {
    return (
        <div className='Feed'>
            <Home />
            <Tweet />
            <NewFeed />
        </div>
    )
}

export default Feed