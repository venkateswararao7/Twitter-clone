import React from 'react';
import Tweet from './Tweet';
import DataBaseFeed from './DataBaseFeed';
import "../../styles/HomeFeed/NewFeed.css";

function NewFeed() {
    return (
        <div className='Feeds'>
            <div className='NewFeed'>
                <Tweet />
                <DataBaseFeed />
            </div>
        </div>

    )
}

export default NewFeed