import React from 'react'
import './Section3.css'
import Engineer2 from '../../img/engineer2.jpg'
import PATRION from '../PATRION-TEXT/Patrion'

const Section3 = () => {
  return (
    <div className="section3-container">

        <div className='section3-box1'>
          <PATRION/>

          <p className='section3-box1-column2'>
            We are a team of dedicated engineers that find it necessary in finding solutions to your problems.
            No matter the nature of the problem we employ the tech to solve it!
          </p>
        </div>    

        <div className='section3-box2'>
          <img src={Engineer2} alt='Engineer with Laptop' className='section3-image'/>
        </div> 
        
      </div>
    // </div>
  )
}

export default Section3