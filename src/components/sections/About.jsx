import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { graphql, Link, useStaticQuery } from 'gatsby';
import Title from '../Title/Title';
import Img from 'gatsby-image';

import { AboutWrapper, AboutSkillsList, ButtonWrapper } from '@style';
import { Button } from '@components';
import Resume from '@/images/resume.pdf';
import { skills, aboutMe } from '@config';

const About = () => {
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

  const data = useStaticQuery(graphql`
    query {
      images: allFile {
        edges {
          node {
            relativePath
            name
            childImageSharp {
              fixed(width: 350) {
                ...GatsbyImageSharpFixed
              }
            }
          }
        }
      }
    }
  `);

  const image = data.images.edges.find((n) => n.node.relativePath === 'profile.jpg');

  const imageFixed = image.node.childImageSharp.fixed;

  return (
    <AboutWrapper id="about">
      <Container>
        <Title title="About Me" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={1000} delay={600} distance="30px">
              <div className="about-wrapper__image">
                <Img
                  className="rounded shadow-lg"
                  alt="Picture of me in the about section"
                  fixed={imageFixed}
                />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={1000} distance="30px">
              <div className="about-wrapper__info">
                {aboutMe &&
                  aboutMe.map((about, i) => {
                    return (
                      <p key={i} className="about-wrapper__info-text">
                        {about.paragraph}
                      </p>
                    );
                  })}
                <AboutSkillsList>
                  <ul className="test about-wrapper__info-skills">
                    {skills && skills.map((skill, i) => <li key={i}>{skill}</li>)}
                  </ul>
                </AboutSkillsList>
                <ButtonWrapper>
                  <span className="d-flex mt-3">
                    <a
                      href={Resume}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ fontSize: '1.6rem' }}
                    >
                      Resume
                    </a>
                  </span>
                </ButtonWrapper>
              </div>
            </Fade>
          </Col>
        </Row>
      </Container>
    </AboutWrapper>
  );
};

export default About;
