import { Spin } from 'antd'
import React from 'react'
import './ui.scss'

const Loader = () => {
  return (
    <div className='loader__cnt'>
      <Spin size="large" />
    </div>
  )
}

export default Loader