import { Layout } from 'antd'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { publicRoutes } from '../routes/publicRoutes'
import { privateRoutes } from '../routes/privateRoutes'
import '../styles/scss/content.scss'
import { useSelector } from 'react-redux'

const { Content } = Layout

const MainContent = () => {
  const isAuth = useSelector(state => state.auth.isAuth)

  return (
    <Content>
      <div className="mainContentCnt">
        <Routes>
          {isAuth
            ? privateRoutes.map(r => (
              <Route path={r.path} exact={r.exact} element={r.element} key={r.path} />
            ))
            : <></>
          }
          {publicRoutes.map(r => (
            <Route path={r.path} exact={r.exact} element={r.element} key={r.path} />
          ))}
        </Routes>
      </div>
    </Content>
  )
}

export default MainContent