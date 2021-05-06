
import React from 'react'

function Test(props) {
    return (
        <div>
            {/* สกัด ตัวแปร */}
            <h1>HEllo {props.name}, {props.age}, {props.position}</h1>
        </div>
        
    )
}

export default Test;
