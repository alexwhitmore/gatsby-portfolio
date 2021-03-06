import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&display=swap');

body {
  font-family: 'Montserrat', sans-serif;
  text-align: center;
}

html {
  font-size: 62.5%;
  font-family: 'Montserrat', sans-serif;
}

body {
  font-family: 'Montserrat', sans-serif;
  text-align: center !important;
}

p,
a {
  font-family: 'Montserrat', sans-serif;
  font-size: 1.6rem;
}

a,
a:link,
a:hover,
a:visited,
a:active {
  text-decoration: none;
} 

a:hover {
  transition: all 0.3s ease-in-out;
}

.section-title {
  text-align: center;
  margin: 0px;
  margin-bottom: 4.5rem;
  font-size: 4rem;
  font-weight: bold;
  text-transform: uppercase;

  @media (max-width: 37.5em) {
    font-size: 2.8rem;
  }
}

.text-color-main {
  color: #02aab0;

  @media (max-width: 37.5em) {
    background-image: none;
    -webkit-text-fill-color: #02aab0;
  }
}

section {
  padding: 5rem 0rem;

  @media (max-width: 37.5em) {
    border: none;
    padding-left: 1rem;
    padding-right: 1rem;
  }
}
`;

export default GlobalStyle;
