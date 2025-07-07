import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Header from './components/Header'

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      <Header />
      <div className="flex flex-1">
        <Navbar />
        <main className="flex-">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
