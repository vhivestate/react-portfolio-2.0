// import { render } from '@testing-library/react';
import React from 'react';
import ResumePdf from '../../assets/vhivestate-resume.pdf'
import ResumePng from '../../assets/resume.png'


// import styled from 'styled-components';

function Resume() {
    return (
      <section id="resume">
      <h1>Resume:</h1>
      <div>
      <img src={ResumePng} alt="resume"></img>
      </div>
        <a href={ResumePdf} download="vhivestate-resume.pdf">
            Download Resume
        </a>
      </section>
    );
  }



export default Resume