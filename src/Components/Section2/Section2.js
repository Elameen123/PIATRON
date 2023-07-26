import React from 'react'
import './Section2.css'
import Engineer from '../../img/group.jpg'
import PATRION from '../PATRION-TEXT/Patrion'

const Section2 = () => {
  return (
    <div className="section2-container">
      <div className='section2-box1'>
        <PATRION/>

        <p className='box1-column2'>
          Let's solve your problems.
        </p>
      </div>  

      <div className='section2-box2'>
        <img src={Engineer} alt='Engineer with Laptop' className='section2-image'/>
      </div>   
    </div>
  )
}

export default Section2