import React, { Component } from 'react'
import withIncrement from './withIncrement'

export class HoverIncrement extends Component {

    render() {
        // const {count} = this.state

        // const count = this.state.count , is also valid but more verbose
        // used approach just extracts that key of the object as the one within braces
        return (
            <div>
                <h1 onMouseOver={this.props.incrementCount}>
                     Hovered {this.props.count} times
                </h1>
            </div>
        )
    }
}

export default withIncrement(HoverIncrement, 2)
