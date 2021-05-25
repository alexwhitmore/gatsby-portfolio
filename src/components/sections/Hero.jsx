import React, { useContext, useState, useEffect } from 'react';
import { Container } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';

import { Button } from '@components';
import { HeroWrapper, HeroTitle, HeroButton } from '@style';

const Header = () => {
  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  return (
    <HeroWrapper id="hero" className="jumbotron">
      <Container>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <HeroTitle>
            <h1>
              Hi, my name is <span className="text-color-main">Alex Whitmore</span>
              <br />I like to build things for the web.
            </h1>
          </HeroTitle>
        </Fade>
        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
          <Button />
        </Fade>
      </Container>
    </HeroWrapper>
  );
};

export default Header;
