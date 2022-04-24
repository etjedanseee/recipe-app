import { EDIT_NAME, LOG_IN, LOG_OUT } from "../actionsCounts"

const initialState = {
  isAuth: false,
  user: {
    login: '',
    password: '',
    name: ''
  }
}

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case LOG_OUT: {
      return {
        ...state,
        isAuth: false,
        user: {}
      }
    }
    case LOG_IN: {
      return {
        ...state,
        isAuth: true,
        user: { ...action.payload, name: 'test name' }
      }
    }
    case EDIT_NAME: {
      return {
        ...state,
        user: { ...state.user, name: action.payload }
      }
    }
    default: return state
  }
}