import React from 'react';
import BookMarkImage from "../../images/BookmarkImage.png";
import "../../styles/BookMark/MidBookMark.css";

function MidBookMark() {
    return (
        <div className='MidBookMark'>
            <h1>Bookmarks</h1>
            <div className='image'>
                <img src={BookMarkImage} alt="BookMarkImage" draggable="false" />
                <div className='messages'>
                    <h2>Save the Tweets for later</h2>
                    <p>
                        Don’t let the good ones fly away! Bookmark Tweets to easily find them again in the future.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default MidBookMark