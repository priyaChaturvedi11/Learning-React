import React, { Component } from 'react'

export class ErrorBoundary extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             hasError: false
        }
    }
    
    // remember to declare it has a static method
    // otherwise it will be considered an instance method 
    // and will be ignored

    // do not modify state rather return a new object
    // rreflecting the new state. Why so? Because it is
    // a static method and thus has no access to
    // 'this' keyword.
    static getDerivedStateFromError(){
       return{
        hasError: true
       }
    }

    componentDidCatch(error, logs){
        console.log(error)
        console.log(logs)
    }

    render() {
        if(this.state.hasError){
            return (
                <h1>Something went wrong</h1>
            )
        }else{
            /// below refers to the children of error boundary
            return  this.props.children
        }
    }
}

export default ErrorBoundary
