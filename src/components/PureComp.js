import React, { PureComponent } from 'react'

class PureComp extends PureComponent {
    render() {
        console.log('PureComp')
        return (
            <div>
                PureComp {this.props.name}
            </div>
        )
    }
}

/*
    It sees previous prop value of name 
    'Bella' is not different from current prop value 
    name provided by setInterval, it will not re-render
*/

export default PureComp
