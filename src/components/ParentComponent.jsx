import React from 'react'
import './ParentComponent.css'

function ParentComponent(props) {
  return (
    <div className='parent-component'>
        <h3>ParentComponent.jsx </h3>
        <p> {props.title}</p>
    </div>
  )
}

export default ParentComponent