import React from 'react';
import Home from './Home';
import NewFeed from './NewFeed';
import BottomOptions from './BottomOptions';
import "../../styles/HomeFeed/Feed.css";
function Feed() {
    return (
        <div className='Feed'>
            <div className='Feed-home'>
                <Home />
            </div>
            <div className='newFeed'>
                <NewFeed />
            </div>
            <div className='mobile-options'>
                <BottomOptions />
            </div>
        </div>
    );
}

export default Feed;