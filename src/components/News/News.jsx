import React from 'react';
import "../../styles/News/News.css";
import Trending from '../TrendingFeed/Trending';
import Slidebar from '../Slidebar';
import BottomOptions from '../HomeFeed/BottomOptions';
import MobileHeading from '../HomeFeed/MobileHeading';

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