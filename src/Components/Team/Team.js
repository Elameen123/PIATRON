import React from 'react'
import './Team.css'
import Alhameen from '../../img/Alhameen.jpg'

const Team = () => {
  return (
    <div className='Team-Container'>
      <div className='Team-Header'>
        Meet The Team
      </div>

      <div className='Team-members'>
        <div className='Team'>
          <img src={Alhameen} alt='Pius'/>

          <h3>
            Pius Ndukwu
          </h3>

          <p>
            Market Research Analyst
            <br/>
            Embedded Systems Developer
          </p>
        </div>

        <div className='Team'>
          <img src={Alhameen} alt='Igwe'/>
          
          <h3>
            Onyedika Igwe 
          </h3>

          <p>
            Research Analyst
            <br/>
            Design Engineer
          </p>
        </div>

        <div className='Team'>
          <img src={Alhameen} alt='Alhameen'/>
          
          <h3>
            Al-Hameen Mohammed
          </h3>

          <p>
            Project & Operations Manager 
            <br/>
            Web Developer
          </p>
        </div>
      </div>
    </div>
  )
}

export default Team