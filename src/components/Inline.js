import React from 'react'

// why rem, em do not work here while px, vh, vw do??

const heading = {
    fontSize: '72px',
    color: 'blue',
    display: 'block'
}

function Inline() {
    return (
        <div>
            <h1 className='error'> Errror</h1>
            <h1 style={heading}>Inline</h1>
        </div>        
    )
}

export default Inline
