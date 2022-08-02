import React from 'react'
import '../../index.css'
import {FaGithub, FaTwitter, FaEnvelopeSquare } from 'react-icons/fa'

function Footer() {

  return (
    <section>
  
      <div className='socialMediaIcons'>
        <FaGithub className='socialMediaIcons'/>
        <FaTwitter className='socialMediaIcons'/>
        <FaEnvelopeSquare className='socialMediaIcons'/>
      </div>
    </section>
  )
}
export default Footer