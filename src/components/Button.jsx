import React from 'react';
import { Link } from 'react-scroll';
import { ButtonWrapper } from './sections/styles/ButtonWrapper';

const Button = () => {
  return (
    <ButtonWrapper>
      <p>
        <Link to="about" smooth duration={1000}>
          Learn More
        </Link>
      </p>
    </ButtonWrapper>
  );
};

export default Button;
