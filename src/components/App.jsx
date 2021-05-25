import React, { useState, useEffect } from 'react';
import { PortfolioProvider } from '../context/context';

import { Hero, About, Projects, Contact, Footer } from '@components';

import { heroData, aboutData, projectsData, contactData, footerData } from '../mock/data';
import GlobalStyle from '../globalStyles';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [projects, setProjects] = useState([]);
  const [contact, setContact] = useState({});
  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setProjects([...projectsData]);
    setContact({ ...contactData });
    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, projects, contact, footer }}>
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
