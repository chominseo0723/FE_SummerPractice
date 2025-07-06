import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Header from './components/Header'

const Layout = () => {
  return (
    <div className="flex flex-col h-screen">
      {/* 상단 헤더 */}
      <Header />

      {/* 하단 영역: Navbar(왼쪽) + Outlet(오른쪽) */}
      <div className="flex flex-1 overflow-hidden">
        <Navbar />
        <main className="flex-1 overflow-y-auto p-4">
          <Outlet />
        </main>
      </div>
    </div>
  )
}

export default Layout
