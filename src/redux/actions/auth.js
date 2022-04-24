import { LOG_IN, LOG_OUT, EDIT_NAME } from '../actionsCounts'

export const logOut = () => ({
  type: LOG_OUT
})

export const logIn = (login = 'LOGIN', password = 'PASSWORD') => ({
  type: LOG_IN,
  payload: {
    login,
    password
  }
})

export const editName = (str) => ({
  type: EDIT_NAME,
  payload: str
})