import React, { useState, useEffect } from 'react';
import Slidebar from '../Slidebar';
import "../../styles/Profile/Profile.css";
import ProfileHeading from './ProfileHeading';
import OursTweet from './OursTweet';
import Trending from '../TrendingFeed/Trending';


function Profile() {
    const [Name, setName] = useState("");
    useEffect(() => {
        setName(localStorage.getItem("userName"));
    }, []);
    return (
        <div className='profile'>
            <Slidebar />
            <div className='ourProfile'>
                <ProfileHeading Name={Name} />
                <OursTweet Name={Name} />
            </div>
            <div className='Trending-news'>
                <Trending />
            </div>
        </div>
    )
}

export default Profile;