import React from 'react';
import ReactDOM from 'react-dom/client';
import Body from './components/Body/Body';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';

const AppContainer = () => {
  return (
    <>
      <Header />
      <Body />
      <Footer />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppContainer />);
