import React from 'react'

// const FRInput = React.forwardRef((props, ref) => {
//     return (
//         <div>
//             <input type="text" ref={ref}/>
//         </div>
//     )    
// })

function FRInput({ref}) {
    return (
        <div>
            <input type="text" ref={ref}/>
        </div>
    )
}

export default FRInput
