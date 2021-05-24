import React, { Component } from 'react'

class RefsDemo extends Component {
    constructor(props) {
        super(props)
        this.cbRef = null // a class property
        // below method will assign a dom element to the 
        // callback ref that we just created
        this.setCbRef = (element) => {
            this.cbRef = element
        }
        this.myInputRef = React.createRef()
    }
    
    componentDidMount(){
        // this.myInputRef.current.focus()
        /*
            About callback refs:
            React will call the callback ref with dom element
            when the component mounts
            and will call it with null when component unmounts
            so you should check if the 
            callback ref property has dom elemennt or has null
        */
        if(this.cbRef){
            this.cbRef.focus()
        }
    }

    handleClick = (element) => {
        element = this.myInputRef.current.value
        alert(element)
    }

    render() {
        return (
            <div>
                Refs Demo
                <br />
                <input type="text" ref={this.myInputRef}/>
                <br />
                <input type="text" ref={this.setCbRef}/>
                <br />
                <button onClick={this.handleClick}>Click Me</button>
            </div>
        )
    }
}

export default RefsDemo
