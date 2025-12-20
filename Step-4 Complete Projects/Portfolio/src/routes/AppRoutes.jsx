import React from 'react'
import { Route, Routes } from 'react-router-dom'
import MainLayout from '../layouts/MainLayout'
import HomePage from '../pages/HomePage'
import AboutPage from '../pages/AboutPage'
import ContactPage from '../pages/ContactPage'
import ServicePage from '../pages/ServicePage'

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={
        <div className='bg-gray-800 min-h-screen'>
          <MainLayout/>
        </div>
      }>
        <Route index element={<HomePage/>}/>
        <Route path='about' element={<AboutPage/>}/>
        <Route path='contact' element={<ContactPage/>}/>
        <Route path='service' element={<ServicePage/>}/>
      </Route>
    </Routes>
  )
}

export default AppRoutes
