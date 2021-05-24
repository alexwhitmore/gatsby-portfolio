import styled from 'styled-components';

export const ButtonWrapper = styled.div`
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
