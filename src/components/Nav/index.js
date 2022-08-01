import React, { useEffect } from 'react';
import { capitalizeFirstLetter } from '../../utils/helper';

function Nav(props) {

    const {
        categories = [],
        setCurrentCategory,
        currentCategory,
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
            <ul className='flex-row'>
                {categories.map((category) => (
            <li
              className={`mx-1 ${
                currentCategory.name === category.name && 'navActive'
                }`}
              key={category.name}
            >
              <span
                onClick={() => {
                  setCurrentCategory(category)
                }}
              >
                {capitalizeFirstLetter(category.name)}
              </span>
            </li>
          ))}

            </ul>
        </nav>
    </header>
  );
}

export default Nav;