import React from 'react';
import { Link } from 'react-router-dom';
import "../styles/Icon.css";
function Icons(props) {

    return (
        <Link to={props.text} className='links'>
            <div className='option' >
                <props.icon className="slide-options" />
                <h2>{props.text}</h2>
            </div>
        </Link>

    )
}

export default Icons;