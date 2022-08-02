import { render } from '@testing-library/react';
import React from 'react';

import styled from 'styled-components';

function ResumeFn() {
    return (
      <section id="resume">
        <h1 >My skills</h1>
      </section>
    );
  }

const Title = styled.h1`
  font-size: 1.5em;
  text-align: center;
  color: palevioletred;
`;

render(
    <Title>
    Hello
    </Title>
);

export default ResumeFn