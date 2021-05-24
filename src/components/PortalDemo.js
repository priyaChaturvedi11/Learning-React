import React from 'react'
import ReactDOM from 'react-dom'

function PortalDemo() {
    return ReactDOM.createPortal(
        <h1>Portal</h1>,
        document.getElementById('react-portal')
    )
}


export default PortalDemo
