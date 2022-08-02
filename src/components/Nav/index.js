import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from "../../utils/helper";


function Nav(props) {
    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
        contactSelected,
        setContactSelected
      } = props;

    useEffect(() => {
        document.title = capitalizeFirstLetter(currentCategory.name);
      }, [currentCategory]);

  return (
    <header>
        <h2>
            <a href='/'>
                Valeria Garcia
            </a>
        </h2>
        <nav>
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
          <a data-testid="about" href="#portfolio" onClick={() => setContactSelected(false)}>
              Portfolio
            </a>
          </li>

          <li className={`mx-2 ${contactSelected && 'navActive'}`}>
          <a data-testid="resume" href="#resume" onClick={() => setContactSelected(false)}>
              Resume
            </a>
          </li>
            </ul>
        </nav>
    </header>
  );
}

export default Nav;