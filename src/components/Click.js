
import React from 'react'

function Click() {
    function ClickEnter() {
     console.log('Enter');   
    }

    return (
        <div>
            <button onClick={ClickEnter}>Click DID</button>            
        </div>
    )
}

export default Click
