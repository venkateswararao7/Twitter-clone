import React from 'react';
import "../../styles/News.css";
import Trending from '../TrendingFeed/Trending';
import Slidebar from '../Slidebar';

function News() {
    return (
        <div className='News'>
            <Slidebar />
            <div className='NewsFeed'>
                <Trending />
            </div>

        </div>
    )
}

export default News