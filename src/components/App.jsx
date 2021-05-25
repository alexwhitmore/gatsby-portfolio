import React, { useState, useEffect } from 'react';
import { PortfolioProvider } from '../context/context';

import { Hero, About, Projects, Contact, Footer } from '@components';

import { projectsData } from '../mock/data';
import GlobalStyle from '../globalStyles';

function App() {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects([...projectsData]);
  }, []);

  return (
    <PortfolioProvider value={{ projects }}>
      <GlobalStyle />
      <Hero />
      <About />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
