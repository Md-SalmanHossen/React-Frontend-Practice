import React from 'react'
import reactLogo from '../../assets/react_original_logo_icon_146374.png'
import jsLogo from '../../assets/5352-html5_102567.png'
import figmaLogo from '../../assets/figma_logo_icon_170157.png'

const ExpertiseCard = () => {
  return (
    <div className='flex-1 border-2 border-dotted border-gray-500 rounded-2xl p-6 min-h-[150px] flex flex-col items-center justify-between bg-transparent shadow-lg'>
      <h4 className='text-white text-2xl font-semibold mb-4'>
        Services
      </h4>

      <div className='flex flex-row justify-center items-center flex-1'>
        <img className='size-10 object-contain' src={reactLogo} alt="react" />
        <img className='size-10 object-contain' src={jsLogo} alt="js" />
        <img className='size-10 object-contain' src={figmaLogo} alt="figma" />
      </div>
    </div>
  )
}

export default ExpertiseCard
