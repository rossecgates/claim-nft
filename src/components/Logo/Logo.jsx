import React from 'react';
import { ReactSVG } from 'react-svg';
import logo from '../../assets/images/logo.svg';

const Logo = () => (
  <div className="logo">
    <ReactSVG className="header__logo" src={logo} />
    <div className="logo__background">
      <img
        className="logo__img"
        src="/images/logo-background.png"
        alt="background"
      />
    </div>
  </div>
);

export default Logo;
