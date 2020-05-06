import React from 'react'
import Navigator from '../components/navigator'
import Footer from '../components/footer'
import '../styles/main.scss'

const Layout = ({ children }) => {
  return (
    <>
      <Navigator />
      <main>{children}</main>
      <Footer />
    </>
  )
}

export default Layout
