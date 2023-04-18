import React from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import "../../styles/Profile/ProfileHeading.css";
import DefaultProfiles from "./DefaultProfiles";


function ProfileHeading(props) {

    return (
        <div className='ProfileHeading'>
            <div className='name'>
                <ArrowBackIcon />
                <h3>{props.Name}</h3>
            </div>
            <div className='profiles'>
                <DefaultProfiles />
            </div>

        </div>
    )
}

export default ProfileHeading;