import React from 'react'
import './CustomComponent.css'

function CustomComponent(props) {
  return (
    <div className='custom-component'>
        <h3>CustomComponent.jsx </h3>
        <p> {props.title}</p>
    </div>
  )
}

export default CustomComponent