import React from 'react';

import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import "../../styles/Notifications/DisplayNotification.css";

function DisplayNotifications() {
    return (
        <div className='Notifications'>
            <div className='Heading'>
                <h2>Notifications</h2>
                <SettingsOutlinedIcon />
            </div>
            <div className='Notification-options'>
                <div className='Noti-option'>
                    <h4> ALL</h4>
                </div>
                <div className='Noti-option'>
                    <h4>Verified</h4>
                </div>
                <div className='Noti-option'>
                    <h4> Mentions</h4>
                </div>
            </div>
        </div>
    )
}

export default DisplayNotifications;