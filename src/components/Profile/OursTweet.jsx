import React, { useState } from 'react'
import "../../styles/Profile/Ourstweet.css";
import Tweets from "./Tweets";

function OursTweet() {
    const [tweet, setTweet] = useState([]);

    return (
        <div className='oursTweet'>
            <div className='Notification-options'>
                <div className='Noti-option'>
                    <h4> Tweets</h4>
                </div>
                <div className='Noti-option'>
                    <h4>Replies</h4>
                </div>
                <div className='Noti-option'>
                    <h4> Media</h4>
                </div>
                <div className='Noti-option'>
                    <h4> Links</h4>
                </div>
            </div>
            <div className='Tweets-Feed'>
                <Tweets />
            </div>
        </div>
    )
}

export default OursTweet;