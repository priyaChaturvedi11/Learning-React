import React, { Component } from 'react'
import ChildComponent from './ChildComponent'

class Parent extends Component {

    constructor(props) {
        super(props)
    
        this.state = {
             parentName:'parent'
        }

        this.greetParent = this.greetParent.bind(this)
    }

    greetParent(childName){
        // alert('Hello' + this.state.parentName)
        alert(`Hello ${this.state.parentName} from ${childName}`)
    }
    

    render() {
        return (
            <div>
                {/*Passing a reference to method to ChildComponent
                   as a prop called greetHandller
                   so no need to use parenthesis 
                */}
                <ChildComponent greetHandlerAttr={this.greetParent}/>                
            </div>
        )
    }
}

export default Parent
