import React from 'react';
import Icons from './Icons';
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import NotificationsNoneRoundedIcon from '@mui/icons-material/NotificationsNoneRounded';
import MailOutlineRoundedIcon from '@mui/icons-material/MailOutlineRounded';
import BookmarkBorderRoundedIcon from '@mui/icons-material/BookmarkBorderRounded';
import Person2OutlinedIcon from '@mui/icons-material/Person2Outlined';
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined';
import TagOutlinedIcon from '@mui/icons-material/TagOutlined';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { Button } from '@mui/material';
import "../styles/slidbar.css";
import { Link } from 'react-router-dom';


export default function Slidebar() {
    return (
        <div className='slide-option'>
            <Link to="/Home" className='links'><TwitterIcon className='twitter-icon' /></Link>
            <Link to="/Home" className='links'><Icons text="Home" icon={HomeRoundedIcon} active={true} /></Link>
            <Link to="/Explore" className='links'><Icons text="Explore" icon={TagOutlinedIcon} /></Link>
            <Link to="/Notification " className='links'><Icons text="Notification" icon={NotificationsNoneRoundedIcon} /></Link>
            <Link to="/Message " className='links'><Icons text="Message" icon={MailOutlineRoundedIcon} /></Link>
            <Link to="/Bookmarks " className='links'><Icons text="Bookmarks" icon={BookmarkBorderRoundedIcon} /></Link>
            <Link to="/Profile " className='links'><Icons text="Profile" icon={Person2OutlinedIcon} /></Link>
            <Link to="/News " className='links'><Icons text="News" icon={NewspaperIcon} /></Link>
            <Link to="/More " className='links'><Icons text="More" icon={MoreHorizOutlinedIcon} /></Link>
            <Button variant="outlined" type="button" className='button' fullWidth> Tweet</Button>
        </div>
    )
}
