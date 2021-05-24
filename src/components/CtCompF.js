import React, { Component } from 'react'
import { UserConsumer } from './userContext'

class CtCompF extends Component {
    render() {
        return (
            <UserConsumer>
			{
				username => {
					return <h1> {username}!</h1>
				}
			}
		    </UserConsumer>
        )
    }
}

export default CtCompF
