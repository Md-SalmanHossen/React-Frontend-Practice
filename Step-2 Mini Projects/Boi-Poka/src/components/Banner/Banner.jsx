import React from 'react'
import BookImg from '../../assets/books-removebg-preview.png'
const Banner = () => {
  return (
    <div className='flex justify-between items-center p-16 w-full bg-gray-200 rounded-2xl my-10'>
      <div>
         <h1 className='font-bold text-4xl'>Books to freshen up <br /> your bookshelf</h1>
         <button className='btn my-10 btn-success'>test test</button>
      </div>
      <div>
         <img className='w-3/2' src={BookImg} alt="" />
      </div>
    </div>
  )
}

export default Banner
