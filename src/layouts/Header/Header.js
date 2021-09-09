import React from 'react';
import Logo from '../../components/Logo';

const Header = () => (
  <div className="header">
    <Logo />

    <div className="header__text">
      Join the Crypto Marketing Conference&nbsp;&&nbsp;Contest
    </div>
    {/* <div className="header__text">
      <span className="header__text-color">Congrats!</span> You are signed up
      and ready to start referring.
    </div> */}
  </div>
);

export default Header;
