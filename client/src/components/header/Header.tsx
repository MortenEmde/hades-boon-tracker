import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import { ServerUrl } from '../../serverURL';

const Header = () => (
  <div className="headerContainer">
    <Link to="/">
      <img src={`${ServerUrl}/hadesLogoWhite.jpeg`} alt="hades-logo" />
    </Link>
    <h1 className="headerText">Boon Tracker</h1>
  </div>
);

export default Header;
