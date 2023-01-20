import React from 'react';
import Logo from '../../images/logo.png';
import './Header.scss';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="header">
      <div className="logo">
        <Link to="/">
          <img src={Logo} />
        </Link>
      </div>

      <div className="menu">
        <ul>
          <li>
            <Link to="/about">About</Link>{' '}
          </li>
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
