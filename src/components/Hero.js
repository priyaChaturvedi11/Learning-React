import React from 'react'

function Hero({heroName}) {
    if(heroName !== 'Joecarr'){
        throw new Error('Not a hero')
    }
    return (
        <h1>JoeCarr</h1>
    )
}

export default Hero
