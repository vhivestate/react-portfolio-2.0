
import ResumePdf from '../../assets/vhivestate-resume.pdf'
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {FaDownload} from 'react-icons/fa';



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


        <h1>Backend:</h1>
        <div className='backend'>
        <li>Python</li>
        <li>Node.js</li>
        <li>Frameworks</li>
        <p>- Express.js</p>
        <p>- React.js</p>

        <p>- BootStrap</p>
        <li>Database</li>
        <p>- MongoDB</p>
        <p>- GraphQL</p>
        <p>- MySQL</p>
        <li>API</li>
        <p>- REST</p>
        <p>- JSON</p>
        </div>
      </ul>
    
      
      </div>
      
      <div>
      </div>
      <div className='download'>
        <a href={ResumePdf} download="vhivestate-resume.pdf">
        <FaDownload/>
            download resume 
        </a>
        </div>
      </section>
    );
  }



export default Resume