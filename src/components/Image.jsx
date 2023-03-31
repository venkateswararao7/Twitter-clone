import React from 'react'

function Image(props) {
    return (
        <img src={props.src} alt={props.value} draggable="false" style={{ width: props.width, height: props.height, borderRadius: props.borderradius, display: "inline" }} />
    )
}

export default Image;