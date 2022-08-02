import React from 'react'
import '../../App.css'
import {FaGithub, FaTwitter, FaEnvelopeSquare } from 'react-icons/fa'

function Footer() {

  return (
    <section>
        <script src="https://kit.fontawesome.com/35b768dd6f.js" crossorigin="anonymous"></script>
      <h1 id="Footer"> footer</h1>
      <div className='socialMediaIcons'>
        <FaGithub/>
        <FaTwitter/>
        <FaEnvelopeSquare/>
      </div>
    </section>
  )
}
export default Footer