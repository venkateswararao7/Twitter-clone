import React from 'react';
import Tweet from './Tweet';
import DataBaseFeed from './DataBaseFeed';
import BottomOptions from './BottomOptions';
import "../../styles/HomeFeed/NewFeed.css";

function NewFeed() {
    return (
        <div className='Feeds'>
            <div className='NewFeed'>
                <Tweet />
                <DataBaseFeed />
            </div>
            <div className="bottom-options">
                <BottomOptions />
            </div>
        </div>

    )
}

export default NewFeed