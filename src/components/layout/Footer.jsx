import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';

import { socialLinks } from '@config';
import { FooterWrapper } from '@style';

const Footer = () => {
  return (
    <FooterWrapper className="footer navbar-static-bottom">
      <Container>
        <span className="back-to-top">
          <Link to="hero" smooth duration={1000}>
            <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
          </Link>
        </span>
        <div className="social-links">
          {socialLinks &&
            socialLinks.map((links, i) => {
              return (
                <a
                  key={i}
                  href={links.url}
                  rel="noopener noreferrer"
                  target="_blank"
                  aria-label={links.name}
                >
                  <i className={`fa fa-${links.name || 'refresh'} fa-inverse`} />
                </a>
              );
            })}
        </div>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
