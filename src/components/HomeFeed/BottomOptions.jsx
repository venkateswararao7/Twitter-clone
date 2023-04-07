import React from 'react';
import { Link } from 'react-router-dom';
import DefaultHome from "../DefaultHome";
import News from '../News/News';
import Explore from '../Explore/Explore';
import Notification from '../Notifications/Notification';
import Message from '../Messages/Messages';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import NotificationsNoneOutlinedIcon from '@mui/icons-material/NotificationsNoneOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import "../../styles/HomeFeed/BottomOptions.css";

function BottomOptions() {
    return (
        <div className='mobile-slidebar'>
            <Link to="/Home" element={<DefaultHome />}>
                <HomeOutlinedIcon />
            </Link>
            <Link to="/News" element={<News />}>
                <SearchOutlinedIcon />
            </Link>
            <Link to="/Explore" element={<Explore />}>
                <TravelExploreIcon />
            </Link>
            <Link path="/Notification" element={<Notification />} >
                <NotificationsNoneOutlinedIcon />
            </Link>
            <Link to="/Message" element={<Message />}>
                <EmailOutlinedIcon />
            </Link>
        </div >
    )
}

export default BottomOptions;