import React, { Component } from 'react'
import withIncrement from './withIncrement'

class ClickIncrement extends Component {


    render() {
        // const count = this.state.count

        const {count, incrementCount} = this.props
        return (
            <div>
              <button onClick={incrementCount}>
                  {this.props.name} Clicked {count} times
              </button>  
            </div>
        )
    }
}

export default withIncrement(ClickIncrement, 12)
