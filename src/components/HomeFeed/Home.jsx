import React from 'react';
import MobileHeading from "./MobileHeading";
import "../../styles/HomeFeed/Home.css";

function Home() {
    return (
        <div className='Home-Heading'>
            <div className='Heading'>
                <h2>Home</h2>
                <div className='MobileHeading'>
                    <MobileHeading />
                </div>
            </div>
            <div className='Home-option'>
                <div className='Home-Button1'><h2>For You</h2></div>
                <div className='Home-Button2 '><h2>Following</h2></div>
            </div>
            <hr />
        </div>
    )
}

export default Home;