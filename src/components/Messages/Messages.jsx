import React from 'react';
import Slidebar from '../Slidebar';
import MidMessages from './MidMessages';
import "../../styles/Messages/Message.css";
import NewPersons from './NewPersons';

function Messages() {
    return (
        <div className='Message'>
            <Slidebar />
            <MidMessages />
            <div className='mobile'>
                <NewPersons />
            </div>
        </div>
    )
}

export default Messages