// import { render } from '@testing-library/react';

import ResumePdf from '../../assets/vhivestate-resume.pdf'
// import ResumePng from '../../assets/resume.png'

import React from 'react';
// import { validateEmail } from '../../utils/helper';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'reactstrap';



// import styled from 'styled-components';

function Resume() {
    return (
      <section id="resume">
      <p id='titleSk'>Skills</p>
      <div id='skills'>
      <h1>Frontend:</h1>
      <ul>
        <div className='frontend'>
        <li> HTML</li>
        <p>- Forms & Validation</p>
        <p>- Semantic Tags</p>
        <li> CSS</li>
        <p>- Flexbox</p>
        <p>- CSS Grid</p>
        <p>- Responsive Design</p>
        <li> JavaScript</li>
        <p>- Fetch API or AJAX</p>
        <p>- DOM Manipulation</p>
        <p>- Hoisting, Closures, Prototype</p>
        <p>- Event Bubbling, Shadow DOM</p>
        </div>

        <div className='backend'>
        <h1>Backend:</h1>
        <li>Python</li>
        <li>Node.js</li>
        <li>Frameworks</li>
        <p>- Express.js</p>
        <p>- React.js</p>
        <p>- JQuery</p>
        <p>- BootStrap</p>
        <li>Database</li>
        <p>- MongoDB</p>
        <p>- GraphQL</p>
        <p>- MySQL</p>
        <li>API</li>
        <p>- REST</p>
        <p>- JSON</p>
        <p>- SOAP</p>
        </div>
      </ul>
    
      
      </div>
      
      <div>
      </div>
        <a href={ResumePdf} download="vhivestate-resume.pdf">
            download resume 
        </a>
      </section>
    );
  }



export default Resume