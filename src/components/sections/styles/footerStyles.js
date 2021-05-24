import styled from 'styled-components';

export const FooterWrapper = styled.div`
  background-color: #0d2438;
  color: #fff;
  padding: 3rem 0;

  .fa-inverse {
    transition: all 0.2s ease-in;
  }

  .fa-inverse:hover {
    transform: translateY(-2px);
    color: #02aab0;
  }

  @media (max-width: 37.5em) {
    border: 0px;
  }

  .social-links {
    display: flex;
    justify-content: center;

    a {
      display: flex;
      flex-direction: column;
      width: 5rem;
      height: 5rem;
      color: #fff;
      font-size: 3rem;
      margin: 1.6rem;
    }
  }

  .back-to-top i {
    color: #fff;
    transition: all 0.2s ease-in;
    cursor: pointer;

    &:hover {
      transform: translateY(-2px);
      color: #02aab0;
    }
  }
`;
