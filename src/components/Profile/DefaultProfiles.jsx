import React from 'react';
import default_pic from "../../images/default_pic.jpg";
import default_profile from "../../images/default_profile.png";
import "../../styles/Profile/DefaultProfiles.css";
function DefaultProfiles() {
    return (
        <div>
            <div className='background-image'>
                <img src={default_pic} alt="default pic" draggable='false' />
                <div className='default_profile'>
                    <img src={default_profile} alt="default_profile" draggable='false' />
                </div>
            </div>
        </div>
    )
}

export default DefaultProfiles;