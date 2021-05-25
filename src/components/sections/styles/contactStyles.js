import styled from 'styled-components';

export const ContactWrapper = styled.section`
  background-color: #0d2438;
  padding: 15rem 0 10rem 0;
  margin-top: -15rem;
  margin-bottom: -1px;
  color: #fff;

  @media (max-width: 75em) {
    padding: 10rem 0;
    margin-top: 0;
  }

  .contact-wrapper {
    margin-top: 3.2rem;
    padding: 0 2rem;
    backface-visibility: hidden;

    &__text {
      margin-bottom: 2.5rem;
    }

    &__text,
    a {
      font-size: 2.4rem;
      text-align: center;

      @media (max-width: 37.5em) {
        font-size: 2rem;
      }
    }
    .test {
      border: 3px solid #02aab0;
      border-radius: 5px;
      color: #fff;
      padding: 0.75rem 1.5rem 0.75rem 1.5rem;
      letter-spacing: 0.1em;
    }

    .test:hover {
      background: #02aab0 !important;
    }
  }
`;
