import React from 'react';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <img src="/images/logo.png" />
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

export default Header;
