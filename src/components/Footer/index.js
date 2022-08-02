import React from 'react'
import '../../index.css'
import {FaGithub, FaTwitter, FaEnvelopeSquare } from 'react-icons/fa'
// import { render } from '@testing-library/react';
// import styled from 'styled-components';

function Footer() {
//     const Title = styled.h1`
//   font-size: 1.5em;
//   text-align: center;
//   color: palevioletred;
// `;
// render(
//     <Title>
//     Connect with me
//     </Title>
// );
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