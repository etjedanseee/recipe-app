import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import React from 'react'
import { NavLink } from 'react-router-dom'
import './ui.scss'

const GoBackBtn = ({ to = '/' }) => {
  return (
    <span className="goback">
      <NavLink to={to}>
        <Button
          size='large'
          icon={<ArrowLeftOutlined style={{ color: '#fff' }} />}
          style={{ backgroundColor: 'transparent', border: 'none' }} />
      </NavLink>
    </span>
  )
}

export default GoBackBtn