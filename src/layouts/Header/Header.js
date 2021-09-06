import React from 'react';
import { ReactSVG } from 'react-svg';

import logo from '../../assets/images/logo.svg';

const Header = () => (
  <div className="header">
    <ReactSVG className="header__logo" src={logo} />
    <div className="header__text">
      Join the Crypto Marketing Conference & Contest
    </div>
  </div>
);

export default Header;
