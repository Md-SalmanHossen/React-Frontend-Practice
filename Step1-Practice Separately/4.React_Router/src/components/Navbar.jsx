import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <div className="flex justify-between bg-gray-800 text-white rounded text-2xl font-medium p-4">
        <h3>Router</h3>
        <div className=" flex justify-center items-center  gap-4 mx-4">
          <Link to='/' className="hover:underline">Home</Link>
          <Link to='/about'   className="hover:underline">about</Link>
          <Link to='/courses' className="hover:underline">course</Link>
          <Link to='/contact' className="hover:underline">contact</Link>
          <Link to='/product' className="hover:underline">product</Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar
