import React from 'react';
import Slidebar from '../Slidebar';
import Heading from './Heading';
import "../../styles/Explore/Explore.css";
function Explore() {
    return (
        <div className='Explore'>
            <Slidebar />
            <div className='mid-level'>
                <Heading />
            </div>
        </div>
    )
}

export default Explore;