import styled from 'styled-components';

export const HeroWrapper = styled.div`
  min-height: 100vh;
  height: 100vh;
  display: flex;
  align-items: center;
  border-bottom: 0;
  font-weight: 400;
  color: #cbd5e0;
  padding: 0rem 5.6rem;
  margin-bottom: 0;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  z-index: -1;
  background: #0d2438;

  @media (max-width: 37.5em) {
    padding: 0rem;
    font-size: 1.6rem;
  }
`;

export const HeroTitle = styled.div`
  margin-bottom: 3.2rem;
  text-align: left;

  @media (max-width: 75em) {
    font-size: 4rem;
  }

  @media (max-width: 56.25em) {
    font-size: 3.6rem;
    text-align: center;
  }

  @media (max-width: 37.5em) {
    font-size: 3.5rem;
    line-height: 1.5;
  }

  @media (max-width: 20em) {
    font-size: 2.8rem;
  }

  h1 {
    font-size: 5.6rem;
    font-weight: 700;
  }
`;

export const HeroButton = styled.div`
  display: flex;

  @media (max-width: 56.25em) {
    justify-content: center;
  }

  a {
    font-size: 2.4rem;
    border: 3px solid #02aab0;
    border-radius: 5px;
    color: #fff;
    padding: 0.75rem 1.5rem 0.75rem 1.5rem;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    background: transparent;
    cursor: pointer;
    color: #fff !important;

    @media (max-width: 37.5em) {
      font-size: 2rem;
    }

    &:hover {
      background: #02aab0;
    }
  }
`;
