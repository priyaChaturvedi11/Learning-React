import React, { Component } from 'react'
import CtCompF from './CtCompF'
import UserContext from './userContext'

class CtCompE extends Component {
    render() {
        return (
            <div>
                Component E {this.context}
                <CtCompF />
            </div>
        )
    }
}
CtCompE.contextType = UserContext

export default CtCompE
