import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class LifecycleA extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Bella'
        }

        console.log('Lifecycle A constructor')
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('Lifecycle A getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('Lifecycle A componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('Lifecycle A shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Lifecycle A getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('Lifecycle AREYYY componentDidUpdate')
    }

    clickHandler = () => {
        this.setState({
            name: 'Hella'
        })
    }


    render() {
        console.log('Lifecycle A render')
        return (
            <div>
                Lifecycle A 
                {this.state.name}
                <button onClick={this.clickHandler}>cLICK</button>
                <LifecycleB />
            </div>
        )
    }
}

export default LifecycleA
