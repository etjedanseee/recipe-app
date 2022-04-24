import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import styles from '../styles/scss/profile.module.scss'
import EditName from '../UI/EditName'

const Profile = () => {
  const login = useSelector(state => state.auth.user.login)
  const name = useSelector(state => state.auth.user.name)

  const [isEdit, setIsEdit] = useState(false)

  const onEditNameClick = () => {
    setIsEdit(true)
  }

  return (
    <div className={styles.container}>
      <div className={styles.title}>Profile</div>
      <div className={styles.login}>Login: {login}</div>
      <div className={styles.name}>
        <div>Name: {name}</div>
        <button
          onClick={onEditNameClick}
          className={styles.edit}
        >Edit name</button>
      </div>
      {isEdit && <EditName
        oldName={name}
        setIsEdit={setIsEdit}
      />}
    </div>
  )
}

export default Profile