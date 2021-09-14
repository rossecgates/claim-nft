import React from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router';
import Logo from '../../components/Logo';

const Header = ({ className }) => {
  const { pathname } = useLocation();

  const getHeaderText = () => {
    switch (pathname) {
      case '/':
        return (
          <div className={`header__text ${className || ''} `}>
            Join the Crypto Marketing Conference&nbsp;&&nbsp;Contest
          </div>
        );
      case '/sign-in':
        return (
          <div className={`header__text ${className || ''}`}>
            <span className="header__text-color">Congrats!</span> You are signed
            up and ready to start referring.
          </div>
        );
      case '/login':
        return (
          <div className={`header__text ${className || ''} `}>
            <span className="header__text-color header__text-login">Login</span>{' '}
            to continue
          </div>
        );
      default:
        return undefined;
    }
  };

  return (
    <div className="header">
      <Logo />
      {getHeaderText()}
    </div>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
