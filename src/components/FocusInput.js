import React, { Component } from 'react'
import Input from './Input'

class FocusInput extends Component {
constructor(props) {
    super(props)

    this.compRef = React.createRef()
}

// calls child's focus method
handleClick = () => {
    this.compRef.current.focusInput()
}

    render() {
        return (
            <div>
                <input type="text"/>
                <Input ref={this.compRef}/>             
                <button onClick={this.handleClick}>Focus Input</button>   
            </div>
        )
    }
}

export default FocusInput
