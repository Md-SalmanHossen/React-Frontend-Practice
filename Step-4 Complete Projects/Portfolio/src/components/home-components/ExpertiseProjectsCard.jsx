import React from 'react'

const ExpertiseProjectsCard = ({ title, img }) => {
  return (
    <div className='flex-1 border-2 border-dotted border-gray-500 rounded-2xl p-6 min-h-[100px] flex flex-col items-center justify-between bg-transparent shadow-lg'>
      <h4 className='text-white text-2xl font-semibold mb-4'>
        {title}
      </h4>
      <div className='flex-1 flex items-center justify-center w-full'>
        <img
          className='w-full max-h-12 object-contain transition-transform duration-300 hover:scale-105'
          src={img}
          alt={title}
        />
      </div>
    </div>
  )
}

export default ExpertiseProjectsCard
