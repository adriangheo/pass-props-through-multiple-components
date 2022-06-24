import React from 'react'
import ChildComponent from './ChildComponent'
import './ParentComponent.css'

function ParentComponent(props) {
  const {title} = props
  return (
    <div className='parent-component'>
        <h3>ParentComponent.jsx </h3>
        <ChildComponent title={title}/>
    </div>
  )
}

export default ParentComponent