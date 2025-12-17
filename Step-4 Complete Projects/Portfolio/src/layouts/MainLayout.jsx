import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../components/Navbar'

const MainLayout = () => {
  return (
    <div className='flex flex-col gap-2 max-w-screen-2xl mx-auto'>
      <Navbar/>
      <Outlet/>
    </div>
  )
}

export default MainLayout
