import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Header from './components/Header'

const Layout = () => {
  return (
    <div>
        <Header/> {/* 항상 모든 페이지에 존재*/}
        <Outlet/>
    </div>
  )
}

export default Layout;