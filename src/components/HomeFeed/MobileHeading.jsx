import React from 'react';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import TwitterIcon from '@mui/icons-material/Twitter';
import "../../styles/HomeFeed/MobileHeading.css";
import { Link } from 'react-router-dom';
import Home from './Home';
import Slidebar from ".././Slidebar";

function MobileHeading() {
    return (
        <div className='mobile-heading'>
            <div className='MobileHeading'>
                <AccountCircleOutlinedIcon />
                <div className='twitter'>
                    <Link to="/Home" element={<Home />}>
                        <TwitterIcon />
                    </Link>
                </div>
            </div>

        </div>
    )
}

export default MobileHeading;