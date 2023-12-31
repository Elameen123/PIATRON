import React from 'react'
import './Landing.css'
import Section1 from '../../Components/Section1/Section1'
import Section2 from '../../Components/Section2/Section2'
import Section3 from '../../Components/Section3/Section3'
import Skill from '../../Components/Skill/Skill'
import Section6 from '../../Components/Section6/Section6'
import Section5 from '../../Components/Section5/Section5'
import Team from '../../Components/Team/Team'
import Footer from '../../Components/Footer/Footer'
const Landing = () => {
  return (
    <div className="Landing-container">
      <Section1/>
      <Section2/>
      <Section3/>
      <Skill/>
      <Section5/>
      <Section6/>
      <Team/>
      <Footer/>
      <div className='copyright'>
        &copy; PIATRON 2023
      </div>
    </div>
  )
}

export default Landing