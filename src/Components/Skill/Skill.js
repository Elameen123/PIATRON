import React from 'react'
import Calendar from '../../img/calendar1.png'
import Phone from '../../img/phone.png'
import Durable from '../../img/durable.png'

import './Skill.css'

const Skill = () => {
  return (
    <div className='skill-container'>
        <h2>Our Products and Services Offer</h2>
      <div className='skill-content'>
        <div className='skill'>
            <img src={Calendar} alt='Calendar Checklist'/>
            <p>
              Timely
              <br/> projects
            </p>
        </div>

        <div className='skill'>
            <img src={Phone} alt='Calendar Checklist'/>
            <p>
              Easy
              <br/> Access
            </p>
        </div>

        <div className='skill'>
            <img src={Durable} alt='Calendar Checklist'/>
            <p>
              Durable
              <br/> And Secure
            </p>
        </div>
      </div>
    </div>
  )
}

export default Skill
