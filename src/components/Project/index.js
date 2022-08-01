import React from 'react';
import { capitalizeFirstLetter } from '../../utils/helper';


function Project(props) {
    const { currentCategory } = props;
  return (
    <section>
      <h1>{capitalizeFirstLetter(currentCategory.name)}</h1>
      <p>{currentCategory.description}</p>
    </section>
  );
}
export default Project;
