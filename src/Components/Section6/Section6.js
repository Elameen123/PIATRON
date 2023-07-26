import React from 'react'
import SST from '../../img/SST.png'
import PAU from '../../img/PAU.png'
import Foundries from '../../img/foundry.png'
import './Section6.css'

const Section6 = () => {
  return (
    <div className='sponsor-container'>
      <h3>
        Our Sponsors
      </h3>

      <div className='Sponsors'>
        <img src={ PAU } alt='PAU Logo'/>
        <img src={ SST } alt='SST Logo'/>
        <img src={ Foundries } alt='Nigerian Foundries Logo'/>

      </div>
    </div>
  )
}

export default Section6