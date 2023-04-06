import React from 'react';
import "../styles/Icon.css";
function Icons(props) {

    return (

        <div className='option' >
            <props.icon className="slide-options" />
            <h2>{props.text}</h2>
        </div>


    )
}

export default Icons;