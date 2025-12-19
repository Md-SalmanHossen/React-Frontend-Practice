import React from 'react'
import ExpertiseCard from './ExpertiseServiceCard'
import ExpertiseProjectsCard from './ExpertiseProjectsCard'
import img1 from '../../assets/Gemini_Generated_Image_acnco1acnco1acnc.png'
import img2 from '../../assets/Gemini_Generated_Image_s288o2s288o2s288.png'

const ExpertiseSection = () => {
  return (

    <div className='flex gap-4'>
      
      <ExpertiseCard/>
      <ExpertiseProjectsCard title="Projects" img={img1}/>
      <ExpertiseProjectsCard title="About Us" img={img2}/>

    </div>
  )
}

export default ExpertiseSection