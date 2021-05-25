import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import Title from '../Title/Title';

import { ContactWrapper } from '@style';
import { email } from '@config';

const Contact = () => {
  return (
    <ContactWrapper id="contact">
      <Container>
        <Title title="Get In Touch" />
        <Fade bottom duration={1000} delay={800} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              If you would like to connect, my inbox is always open. Whether you have a question or
              just want to say hello, I will try my best to get back to you!
            </p>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="test text-uppercase"
              href={`mailto:${email}`}
              style={{ background: 'transparent' }}
            >
              Let's Talk
            </a>
          </div>
        </Fade>
      </Container>
    </ContactWrapper>
  );
};

export default Contact;
