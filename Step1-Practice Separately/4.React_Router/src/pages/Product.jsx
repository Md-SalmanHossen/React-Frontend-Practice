import React from 'react'
import { Link, Outlet } from 'react-router-dom'

const Product = () => {
  return (
    <div>
      <div className='flex gap-10 justify-center text-center py-3 rounded-xl underline px-4'>
        <Link to={'/product/men'}>Men</Link>
        <Link to={'/product/women'}>Women</Link>
      </div>
      <div className='text-bold text-4xl mx-auto flex justify-center my-40'>
        <p>Product page</p>
    </div>
    <Outlet/>
    </div>
  )
}

export default Product
