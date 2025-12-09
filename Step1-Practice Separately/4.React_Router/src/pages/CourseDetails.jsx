import React from 'react'
import { useNavigate, useParams } from 'react-router-dom'

const CourseDetails = () => {
   const params=useParams();
   console.log(params.id);

   const navigate=useNavigate();

   const btn=()=>{
      navigate('/')
   }
   
  return (
    <div className='text-bold gap-4 text-4xl mx-auto flex justify-center my-40'>
      <p>Course Details</p>
      <button onClick={btn} className='cursor-pointer bg-gray-800 text-white p-4 rounded-2xl'>Return home page</button>
    </div>
  )
}

export default CourseDetails
