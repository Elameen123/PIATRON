import React from 'react'
import './Section1.css'
import NavBar from '../NavBar/NavBar'
import logo from '../../img/logo.png'
const Section1 = () => {
  return (
    <div className='section1-container'>
      <NavBar/>
     {/* <div className='logo-container'>
     <img src={logo} alt='logo'/>
      <NavBar/>
     </div> */}

      <div className='section1-content'>
        <h2>
          Make it Happen
        </h2>

        <p>
          Driving technology to the future with you along!
        </p>
      </div>

      <div className='section1-button'>
        <button>
          <a href='https://sst.pau.edu.ng/'>
            Get Started
          </a>
        </button>
      </div>
    </div>
  )
}

export default Section1