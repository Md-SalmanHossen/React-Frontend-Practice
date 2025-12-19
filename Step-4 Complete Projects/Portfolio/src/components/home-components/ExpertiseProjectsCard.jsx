import React from 'react'

const ExpertiseProjectsCard = ({title,img}) => {
  return (
    <div>
      <div className=' border-2 border-dotted flex my-4 justify-center items-center border-white rounded-2xl shadow-lg'>
        <div className='p-4 text-white w-full'>

          <h4 className='text-center text-xl font-bold mb-6 uppercase text-pink-500'>
            Services
          </h4>

          <div className='flex gap-4 justify-center items-center'>
            <div className=' transition-transform duration-300 hover:scale-110'>
              <img
                className='size-14 object-contain filter'
                src="src/assets/react_original_logo_icon_146374.png"
                alt="react-icon"
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  )
}

export default ExpertiseProjectsCard
