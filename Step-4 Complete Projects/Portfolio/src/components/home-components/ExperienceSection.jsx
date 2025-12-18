import React from 'react'
import ExperienceCard from './ExperienceCard'

const ExperienceSection = () => {
  return (
    <div className='uppercase my-4 flex gap-4'>
      <ExperienceCard years="4+" subtitle="Years of awesome experience"/>
      <ExperienceCard years="200+" subtitle="Projects complete on the year"/>
      <ExperienceCard years="780+" subtitle="Have team member on 10 country"/>
    </div> 
  )
}

export default ExperienceSection
