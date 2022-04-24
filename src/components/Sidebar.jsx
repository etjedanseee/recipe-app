import { Menu } from 'antd'
import Sider from 'antd/lib/layout/Sider'
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { logIn, logOut } from '../redux/actions/auth'
import { cleanFavorites } from '../redux/actions/recipes'
import '../styles/scss/sidebar.scss'



const Sidebar = () => {
  const isAuth = useSelector(state => state.auth.isAuth)
  const dispatch = useDispatch()

  const onLogOutClick = () => {
    dispatch(cleanFavorites())
    dispatch(logOut())
  }
  const onLogInClick = () => {
    // dispatch(logIn())
  }

  return (
    <Sider
      breakpoint="sm"
      collapsedWidth="150"
      style={{
        overflow: 'auto',
        height: '100vh',
        position: 'fixed',
        left: 0,
        top: 0,
        bottom: 0,
      }}
    >
      <Menu
        theme='dark'
        selectable={false}
        style={{ padding: '1rem 0.5rem' }}
      >
        <Menu.Item key={1}>
          <Link to='/'><span className='sidebar__link'>Home</span></Link>
        </Menu.Item>
        <Menu.Item key={2}>
          <Link to='/selections'><span className='sidebar__link'>Selections</span></Link>
        </Menu.Item>
        {isAuth
          ? <>
            <Menu.Item key={3}>
              <Link to='/favorite'><span className='sidebar__link'>Favorite meals</span></Link>
            </Menu.Item>
            <Menu.Item key={5}>
              <Link to='/profile'><span className='sidebar__link'>Profile</span></Link>
            </Menu.Item>
            <Menu.Item key={4}
              onClick={onLogOutClick}
            >
              <Link to='/'><span className='sidebar__link'>Log out</span></Link>
            </Menu.Item>
          </>
          : <>
            <Menu.Item key={4}
              onClick={onLogInClick}
            >
              <Link to='/login'><span className='sidebar__link'>Log in</span></Link>
            </Menu.Item>
          </>
        }
        <Menu.Item key={6}>
          <Link to='/about'><span className='sidebar__link'>About</span></Link>
        </Menu.Item>
      </Menu>
    </Sider >
  )
}

export default Sidebar