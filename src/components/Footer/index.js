import React from 'react'
import '../../index.css'
import {FaGithub, FaTwitter, FaDiscord, FaLinkedin } from 'react-icons/fa'
// import { render } from '@testing-library/react';
// import styled from 'styled-components';

function Footer() {
    
  return (
    <footer>
  
      <div className='socialMediaIcons'>
      <a href="https://github.com/vhivestate/">
      <FaGithub className='socialMediaIcons'/></a>

      <a href="https://twitter.com/vhivestate/"> 
      <FaTwitter className='socialMediaIcons'/></a>

      <a href="https://discord.com/channels/950224023973933116/950224023973933121/">
      <FaDiscord className='socialMediaIcons'/> </a>

      <a href="https://www.linkedin.com/in/valeriagarcia00974/">
      <FaLinkedin className='socialMediaIcons'/> </a>

      </div>
    </footer>
  )
}
export default Footer