import React from 'react'
import HeaderSection from '../components/home-components/HeaderSection'
import ExperienceSection from '../components/home-components/ExperienceSection'
import ExpertiseSection from '../components/home-components/ExpertiseSection'
import ImageSection from '../components/home-components/ImageSection'

const HomePage = () => {
  return (
    <div className='flex gap-4 mt-10 mx-4 w-full'>
      <div className='w-1/2'>

        <HeaderSection/>
        <ExperienceSection/>
        <ExpertiseSection/>

      </div>
      <ImageSection />
    </div>
  )
}

export default HomePage
