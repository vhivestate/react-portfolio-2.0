import React from 'react';
import '../../index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
// import { Button } from 'reactstrap';


function Nav(props) {
    const {
        contactSelected,
        setContactSelected,
        setResumeSelected,
        resumeSelected,
      } = props;

  return (
    <div id="navbar">
        <nav className='navigation'>
        <ul className="flex-row">
          <li className="mx-2">
          <a data-testid="about" href="#abtSec" onClick={() => setContactSelected(false)}>
              About
            </a>
          </li>

          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
          <span onClick={() => setContactSelected(true)}>Contact</span>
          </li>

            <li className={`mx-2 ${contactSelected && 'navActive'}`}>
            <a data-testid="portfolio" href="#portfolio" onClick={() => setContactSelected (false)}>
                Portfolio
                </a>
            </li>

                <li className={`mx-2 ${resumeSelected && 'navActive'}`}>
                <a data-testid="resume" href="#resume" onClick={() => setResumeSelected (true)}>
                    Resume
                    </a>
                </li>
            </ul>
        </nav>
     </div>
  );
}

export default Nav;