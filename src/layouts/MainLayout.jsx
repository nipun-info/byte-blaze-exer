import React from 'react'
import Nav from '../components/Nav'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer'

const MainLayout = () => {
  return (
    <div>
      <div className='h-16'>
        <Nav />
      </div>
      <Outlet></Outlet>
      <div>
        <Footer />
      </div>
      
    </div>
  )
}

export default MainLayout
