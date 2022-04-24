import { Image } from 'antd'
import React from 'react'
import dishImage from '../assets/images/dish.jpg'
import styles from '../styles/scss/dishtype.module.scss'

const DishType = ({ title, handleDishTypeClick }) => {
  const onDishTypeClick = () => {
    handleDishTypeClick(title)
  }

  return (
    <div
      className={styles.dish}
      onClick={onDishTypeClick}
    >
      <Image src={dishImage} preview={false} />
      <div className={styles.title}>{title}</div>
    </div>
  )
}

export default DishType