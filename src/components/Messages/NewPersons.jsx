import React from 'react';
import "../../styles/Messages/NewPerson.css";

export default function NewPersons() {
    return (
        <div className='NewPersons'>
            <div className='SelectPerson'>
                <h2>Select Message</h2>
                <div className='message-description'>
                    <p>
                        Choose from your existing conversations, start a new one, or just keep swimming.
                    </p>
                </div>
                <div className='Button'>
                    <h3>
                        New Message
                    </h3>
                </div>
            </div>
        </div>
    )
}
