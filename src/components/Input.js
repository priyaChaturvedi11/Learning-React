import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.myInputRef = React.createRef()
    }
    
    // will be called by parent component
    focusInput () {
        this.myInputRef.current.focus()
    }

    render() {
        return (
            <div>
                Refs Demo
                <br />
                <input type="text" ref={this.myInputRef}/>
            </div>
        )
    }
}

export default RefsDemo
