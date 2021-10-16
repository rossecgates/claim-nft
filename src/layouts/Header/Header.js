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
          <h1 className={`header__text ${className || ''} `}>
            Claim a Generation Crypto NFT
          </h1>
        );
      case '/sign-in':
        return (
          <h1 className={`header__text ${className || ''}`}>
            <span className="header__text-color">Congrats!</span> Check your
            email for your NFT link
          </h1>
        );
      case '/login':
        return (
          <div className={`header__text ${className || ''} `}>
            <h1>
              <span className="header__text-color header__text-login">
                Login
              </span>{' '}
              to continue
            </h1>
          </div>
        );
      default:
        return undefined;
    }
  };

  return (
    <header className="header">
      <Logo />
      {getHeaderText()}
    </header>
  );
};

Header.propTypes = {
  className: PropTypes.string,
};

export default Header;
