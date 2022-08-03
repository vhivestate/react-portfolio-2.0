import React from 'react';
import '../../index.css'

function Nav(props) {
    const {
        contactSelected,
        setContactSelected
      } = props;

  return (
    <div>
        <nav className='navigation'>
        <ul className="flex-row">
          <li className="mx-2">
          <a data-testid="about" href="#about" onClick={() => setContactSelected(false)}>
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

                <li className={`mx-2 ${contactSelected && 'navActive'}`}>
                <a data-testid="resume" href="#resume" onClick={() => setContactSelected (false)}>
                    Resume
                    </a>
                </li>
            </ul>
        </nav>
     </div>
  );
}

export default Nav;