import React from 'react'
// destructuring prop in the parameter
function Person({personProp}) {
    return (
        <div>
            <h2>I have an id: {personProp.id} and I know {personProp.skill}</h2>
        </div>
    )
}

export default Person