import React, { Component } from 'react'

const withIncrement = (WrappedComponent, incrementNumber) => {
    class WithIncrement extends Component {

        constructor(props) {
            super(props)
        
            this.state = {
                 count: 0
            }
        }
        
        incrementCount = () => {
            this.setState( prevState => {
                return {
                    count: prevState.count + incrementNumber
                }
            })
        }
        

            render() {
                return (                
                    <WrappedComponent 
                        count={this.state.count} 
                        incrementCount={this.incrementCount}
                        {...this.props}
                    />
                )
            }
        }
        return WithIncrement
}

export default withIncrement