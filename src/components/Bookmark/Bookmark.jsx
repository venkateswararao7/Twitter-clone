import React from 'react';
import Slidebar from '../Slidebar';
import "../../styles/BookMark/Bookmark.css";
import MidBookMark from './MidBookMark';
import LatestNews from '../TrendingFeed/LatestNews';

function Bookmark() {
    return (
        <div className='Bookmark'>
            <Slidebar />
            <div className='BookM'>
                <MidBookMark />
            </div>
            <div className='mobile'>
                <LatestNews />
            </div>
        </div>
    )
}

export default Bookmark