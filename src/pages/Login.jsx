import React, { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { logIn } from '../redux/actions/auth'
import { useNavigate } from "react-router-dom";
import styles from '../styles/scss/login.module.scss'
import { Alert } from 'antd';


const Login = () => {
  const dispatch = useDispatch()

  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')

  const [isLoginDirty, setIsLoginDirty] = useState(false)
  const [isPasswordDirty, setIsPasswordDirty] = useState(false)

  const [error, setError] = useState({})
  const [successfully, setSuccessfully] = useState(false)

  const [isAlert, setIsAlert] = useState(false)

  let navigate = useNavigate();


  useEffect(() => {
    if (error.login || error.password || error.user || !isLoginDirty || !isPasswordDirty) {
      setSuccessfully(false)
    }
    else {
      setSuccessfully(true)
    }
  }, [error])

  const onLoginChange = (e) => {
    const value = e.target.value

    setLogin(value)
    setIsLoginDirty(true)

    if (error.user) {
      setError(prev => ({ ...prev, user: '' }))
    }

    if (!value.length) {
      setError(prev => ({ ...prev, login: 'Login is required' }))
    }
    else {
      setError(prev => ({ ...prev, login: '' }))
    }
  }

  const onPasswordChange = (e) => {
    const value = e.target.value

    setPassword(e.target.value)
    setIsPasswordDirty(true)

    if (error.user) {
      setError(prev => ({ ...prev, user: '' }))
    }

    if (value.length < 3) {
      setError(prev => ({ ...prev, password: 'Password must contain at least 3 chars' }))

      if (!value.length) {
        setError(prev => ({ ...prev, password: 'Password is required' }))
      }
    }
    else {
      setError(prev => ({ ...prev, password: '' }))
    }
  }


  const onSubmit = (e) => {
    const [loginValue, passwordValue] = [login, password];
    e.preventDefault()

    if (checkUser()) {
      setIsAlert(true)
      dispatch(logIn(loginValue, passwordValue))
      setTimeout(() => {
        navigate("/", { replace: true });
      }, 1500)
    }
    else {
      setError({ user: 'No match this user' })
    }
  }

  const checkUser = () => (login === 'qwe' && password === 'qwe') ? true : false


  return (
    <>
      {isAlert && <Alert banner type='success' message='Successfully!' />}
      <div className={styles.container}>
        <form
          className={styles.form}
          onSubmit={onSubmit}
        >
          <div className={styles.title}>Login</div>
          {error.user && <div className={[styles.error, styles.error__nomatch].join(' ')}>{error.user}</div>}

          <div className={styles.login}>

            <input
              value={login}
              onChange={onLoginChange}
              type="text"
              placeholder='enter your login' />
            {error.login && <div className={styles.error}>{error.login}</div>}
          </div>
          <div className={styles.password}>
            <input
              value={password}
              onChange={onPasswordChange}
              type="password"
              placeholder='enter your password'
            />
            {error.password && <div className={styles.error}>{error.password}</div>}
          </div>
          <button disabled={!successfully} className={styles.submit}>Log in</button>
        </form>
      </div>
    </>
  )
}

export default Login