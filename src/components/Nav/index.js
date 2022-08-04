// import React from 'react';
// import '../../index.css';
// 

import React from 'react'
import '../../index.css'
// import {BsArrowDownCircle} from 'react-icons/bs'
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'reactstrap';

function Nav(props) {
    var section = document.getElementById("header"); 
  return (
    <>
    <nav id='navbar'>
    <div className='buttons'>
        <Button
        color="warning"
        outline
        onClick={() => props.setCurrentPage(0)}>About</Button>
        <Button
        color="warning"
        outline
         onClick={() => props.setCurrentPage(1)}>Contact</Button>
        <Button 
        color="warning"
        outline
        onClick={() => props.setCurrentPage(2)}>Portfolio</Button>
        <Button 
        color="warning"
        outline
        onClick={() => props.setCurrentPage(3)}>Resume</Button>
        </div>
    </nav>

    {/* <header id="header" className="hero">
    <div>
    <p className="hero-intro">Hi, I&rsquo;m</p> 
            <h1 className="hero-heading">V!</h1>
            <a href="#abtSec">
                <BsArrowDownCircle className='headerIcon' onClick={() => (section === false)}/> </a>
        </div>
    </header> */}
    </>
  )
}

export default Nav

// function Nav(props) {
//     const {
//         contactSelected,
//         setContactSelected,
//         setResumeSelected,
//         resumeSelected,
//       } = props;

//   return (
//     <div id="navbar">
//         <nav className='navigation'>
//         <ul className="flex-row">
//           <li className="mx-2">
//           <a data-testid="about" href="#abtSec" onClick={() => setContactSelected(false)}>
//               About
//             </a>
//           </li>

//           <li className={`mx-2 ${contactSelected && 'navActive'}`}>
//           <span onClick={() => setContactSelected(true)}>Contact</span>
//           </li>

//             <li className={`mx-2 ${contactSelected && 'navActive'}`}>
//             <a data-testid="portfolio" href="#portfolio" onClick={() => setContactSelected (false)}>
//                 Portfolio
//                 </a>
//             </li>

//                 <li className={`mx-2 ${resumeSelected && 'navActive'}`}>
//                 <a data-testid="resume" href="#resume" onClick={() => setResumeSelected (true)}>
//                     Resume
//                     </a>
//                 </li>
//             </ul>
//         </nav>
//      </div>
//   );
// }

// export default Nav;