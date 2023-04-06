import React from 'react';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import TextsmsOutlinedIcon from '@mui/icons-material/TextsmsOutlined';
import "../../styles/Messages/MidMessage.css";
import Search from "../../components/TrendingFeed/Search";
function MidMessages() {
    return (
        <div className='MidMessages'>
            <div className='Heading'>
                <h3>Messages</h3>
                <div className='icons'>
                    <SettingsOutlinedIcon />
                    <TextsmsOutlinedIcon />
                </div>
            </div>
            <div className='Message-search'>
                < Search />
            </div>
        </div>
    )
}

export default MidMessages;