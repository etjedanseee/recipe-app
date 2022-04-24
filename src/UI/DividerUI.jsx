import React from 'react'
import './ui.scss'

const DividerUI = ({ dashed = false, margin = '7px' }) => {
  return (
    <div
      className='dividerui'
      style={{
        borderBottom: dashed ? '1px dashed white' : '1px solid white',
        margin: `${margin} 0`
      }}
    >

    </div>
  )
}

export default DividerUI