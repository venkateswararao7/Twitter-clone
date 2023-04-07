import React from 'react';
import Home from './Home';
import NewFeed from './NewFeed';
import "../../styles/HomeFeed/Feed.css";
function Feed() {
    return (
        <div className='Feed'>
            <div className='Feed-home'>
                <Home />
            </div>
            <NewFeed />
        </div>
    )
}

export default Feed