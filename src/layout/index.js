import React from 'react'
import Navigator from '../components/navigator'
import '../styles/main.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Navigator />
      <main>{children}</main>
    </>
  )
}

export default Layout
