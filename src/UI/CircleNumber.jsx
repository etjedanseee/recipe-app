import React from 'react'
import './ui.scss'

const InstrNumber = ({ number }) => {
  return (
    <span className='circle'>
      <span className="circle__number">{number}</span>
    </span>
  )
}

export default InstrNumber