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

export default function Slidebar() {
    return (
        <div className='slide-option'>
            <TwitterIcon className='twitter-icon' />
            <Icons text="Home" icon={HomeRoundedIcon} active={true} />
            <Icons text="Explore" icon={TagOutlinedIcon} />
            <Icons text="Notification" icon={NotificationsNoneRoundedIcon} />
            <Icons text="Message" icon={MailOutlineRoundedIcon} />
            <Icons text="Bookmarks" icon={BookmarkBorderRoundedIcon} />
            <Icons text="Profile" icon={Person2OutlinedIcon} />
            <div className='News' >
                <Icons text="News" icon={NewspaperIcon} />
            </div>
            <Icons text="More" icon={MoreHorizOutlinedIcon} />
            <Button variant="outlined" type="button" className='button' fullWidth> Tweet</Button>
        </div>
    )
}
