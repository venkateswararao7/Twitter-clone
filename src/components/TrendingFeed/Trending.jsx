import React from 'react';
import LatestNews from './LatestNews';
import Search from './Search';
function Trending() {
    return (
        <div className='trending'>
            <div className='TrendSearch'>
                <Search />
                <LatestNews />
            </div>
        </div>
    )
}

export default Trending