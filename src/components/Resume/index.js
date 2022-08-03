// import { render } from '@testing-library/react';
import React from 'react';
import ResumePdf from '../../assets/vhivestate-resume.pdf'


// import styled from 'styled-components';

function Resume() {
    return (
      <section id="resume">
      <h1>Resume:</h1>
        <h3 > JavaScript </h3>
        <h3 > CSS </h3>
        <h3 > MySql </h3>
        <h3 > Node.js </h3>
        <h3 > React </h3>

        <a href={ResumePdf} download="vhivestate-resume.pdf">
            Download Resume
        </a>
      </section>
    );
  }



export default Resume