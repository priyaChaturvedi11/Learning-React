import React from 'react'



function ChildComponent(props) {
    return (
        <div>
            {/*<button onClick={props.greetHandlerAttr}>Greet Parent</button>*/}
            <button onClick={() => props.greetHandlerAttr('child one')}>Greet Parent</button>
        </div>
    )
}

export default ChildComponent
