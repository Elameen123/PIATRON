import React from 'react'
import './Footer.css'
import {BsInstagram, BsTwitter} from 'react-icons/bs'
import {HiOutlineMail} from 'react-icons/hi'
import { BiPhone} from 'react-icons/bi'


const Footer = () => {
  return (
    <div className='footer-container'>
      <div className='footer-content'>
        <h5>
          PIATRON
        </h5>

        <hr/>
      </div>

      <div className='footer-socials'>
        <div className='social-item'>
        <BsInstagram/>
        <BsTwitter/>
        <HiOutlineMail/>
        </div>

        <button>
          <BiPhone style={{ color: '#158DF3'}}/> <span style={{marginTop: '-20px'}}>Contact Us</span>
        </button>
      </div>
    </div>
  )
}

export default Footer