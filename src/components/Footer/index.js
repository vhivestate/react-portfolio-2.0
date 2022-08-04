import React from 'react'
import '../../index.css'
import {FaGithub, FaLinkedin } from 'react-icons/fa';
import { RiTwitterLine } from 'react-icons/ri';
import {TbBrandDiscord} from 'react-icons/tb'
// import { render } from '@testing-library/react';
// import styled from 'styled-components';

function Footer() {
    
  return (
    <footer>
    
      <div className='socialMediaIcons'>
      <a href="https://github.com/vhivestate/">
      <FaGithub className='socialMediaIcons'/></a>

      <a href="https://twitter.com/vhivestate/"> 
      <RiTwitterLine className='socialMediaIcons'/></a>

      <a href="https://discord.com/channels/950224023973933116/950224023973933121/">
      <TbBrandDiscord className='socialMediaIcons'/> </a>

      <a href="https://www.linkedin.com/in/valeriagarcia00974/">
      <FaLinkedin className='socialMediaIcons'/> </a>

      </div>
      
      <div className='endFt' >
        <p>Website by Valeria Garcia</p>
      </div>
    </footer>
  )
}
export default Footer