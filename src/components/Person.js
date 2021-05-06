
import React from 'react'

function Person({ person, key }) {
    return (
        <div>
            <h2>
                hello {person.name} {person.age}
                </h2>  
        </div>
    )
}

export default Person
