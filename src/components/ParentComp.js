import React, { Component } from 'react'
import RegComp from './RegComp'
import PureComp from './PureComp'
import MemoComp from './MemoComp'


class ParentComp extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Bella'
        }
    }
    
    componentDidMount(){
        setInterval(() => {
            this.setState({
                name: 'Bella'
            })
        }, 2000);
    }


    render() {

        console.log('*********************** ParentComp ***************************')
        return (
            <div>
                Parent Component
                <MemoComp name={this.state.name} />
                {/* <RegComp name={this.state.name}></RegComp>
                <PureComp name={this.state.name}></PureComp> */}
            </div>
        )
    }
}

export default ParentComp


/*
Now since parent component is also a pure component, 
it sees there's no change in state after doing shallow
comparision and hence, does no re-rendering.
If parent component doesn't re-render,
children components will also not re-render.

*/