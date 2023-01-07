import React from 'react';
import ReactDOM from 'react-dom';

const Title = () => {
  return <h3>This is title component 1</h3>;
};

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="./images/logo.png" />
      </div>
      <div className="search">
        <input
          type="search"
          className="search-bar"
          placeholder="Search for food/restaurant"
        />
      </div>
      <div className="menu">
        <ul>
          <li>Offers</li>
          <li>Help</li>
          <li>Sign In</li>
          <li>Cart</li>
        </ul>
      </div>
    </header>
  );
};

const AppContainer = () => {
  return (
    <>
      <Header />
    </>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<AppContainer />);
