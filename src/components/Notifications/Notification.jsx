import React from 'react';
import Slidebar from '../Slidebar';
import DisplayNotifications from "../Notifications/DisplayNotifications";
import Trending from '../TrendingFeed/Trending';

import "../../styles/Notifications/Notification.css";
function Notification() {
    return (
        <div className='Main-Notifiaction'>
            <Slidebar />
            <div className='mid-Notification'>
                <div className='noti'>
                    <DisplayNotifications />
                </div>
                <div className='side-news'>
                    <Trending />
                </div>
            </div>
        </div>
    )
}

export default Notification;