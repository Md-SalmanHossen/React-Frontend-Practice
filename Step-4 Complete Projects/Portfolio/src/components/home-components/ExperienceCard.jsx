import React from 'react'

const ExperienceCard = ({years,subtitle}) => {
  return (
      <div className='border p-2 rounded-md border-pink-500'>
         <h2 className='text-4xl text-pink-500 font-bold'>{years}</h2>
         <p className='text-sm'>{subtitle}</p>
      </div>
  )
}

export default ExperienceCard
