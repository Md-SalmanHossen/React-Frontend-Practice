import React from 'react'
import HeaderSection from '../components/home-components/HeaderSection'
import ExperienceSection from '../components/home-components/ExperienceSection'
import ExpertiseSection from '../components/home-components/ExpertiseSection'
import ImageSection from '../components/home-components/ImageSection'

const HomePage = () => {
  return (
    <div>
      <div>

        <HeaderSection/>
        <ExperienceSection/>
        <ExpertiseSection/>

      </div>
      <ImageSection/>
    </div>
  )
}

export default HomePage
