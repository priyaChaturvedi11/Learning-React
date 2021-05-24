import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             name: 'Bella'
        }

        console.log('Lifecycle B constructor')
    }
    
    static getDerivedStateFromProps(props, state){
        console.log('Lifecycle B getDerivedStateFromProps')
        return null
    }

    componentDidMount(){
        console.log('Lifecycle B componentDidMount')
    }

    shouldComponentUpdate(nextProps, nextState){
        console.log('Lifecycle B shouldComponentUpdate')
        return true
    }

    getSnapshotBeforeUpdate(prevProps, prevState){
        console.log('Lifecycle B getSnapshotBeforeUpdate')
        return null
    }

    componentDidUpdate(prevProps, prevState, snapshot){
        console.log('Lifecycle B componentDidUpdate')
    }


    render() {
        console.log('Lifecycle B render')
        return (
            <div>
                Lifecycle B 
                {this.state.name}
            </div>
        )
    }
}

export default LifecycleB
