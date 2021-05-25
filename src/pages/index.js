import React from 'react';
import { Helmet } from 'react-helmet';
import App from '../components/App';
import { headData } from '../mock/data';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../layout.css';

export default () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Alex Whitmore</title>
        <html lang="en" />
        <meta name="description" content="Gatsby Portfolio" />
      </Helmet>
      <App />
    </>
  );
};
