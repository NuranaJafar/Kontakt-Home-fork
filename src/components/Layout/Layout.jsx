import React from 'react'
import { Outlet } from 'react-router-dom'
import Headers from '../Header/Header'
import Footer from '../Footer/Footer'

const Layout = () => {
  return (
    <div>
      <Headers />
      <Outlet />
      <Footer />
    </div>
  )
}

export default Layout