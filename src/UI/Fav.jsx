import { HeartFilled, HeartOutlined } from '@ant-design/icons'
import { Alert } from 'antd'
import React, { useState } from 'react'
import './ui.scss'

const Fav = ({ isInFav, isAuth, changeIsInFav, top = '20px', right = '10px', alertTop = '15px', alertRight = '50px' }) => {
  const [isAlert, setIsAlert] = useState(false)

  const onFavClick = () => {
    if (!isAuth) {
      if (!isAlert) {
        setIsAlert(true)
        setTimeout(() => { setIsAlert(false) }, 1500)
      }

      return;
    }
    // show alert successfully
    //change voites and rate on redux and UI
    changeIsInFav(!isInFav)
  }

  return (
    <>
      {isAlert && (
        <div className="fav__alert"
          style={{

            top: alertTop,
            right: alertRight
          }}>
          <Alert message="You can login" type="error" showIcon />
        </div>)}
      <span
        className='fav__cnt'
        onClick={onFavClick}
        style={{
          top,
          right
        }}
      >
        {isInFav
          ? <HeartFilled style={{ fontSize: '30px', color: '#ff1234' }} />
          : <HeartOutlined style={{ fontSize: '30px', color: '#ff1234' }} />
        }
      </span>
    </>
  )
}

export default Fav