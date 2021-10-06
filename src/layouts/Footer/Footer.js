import React from 'react';
import { ReactSVG } from 'react-svg';
import PropTypes from 'prop-types';

import footerLogo from '../../assets/images/footer-logo.svg';

const Footer = ({ className }) => (
  <footer className={`footer ${className || ''} `}>
    <p className="footer__text">
      The Generation Crypto Conference and Contest is awarding over $1,000,000
      in prizes and new business opportunities.
    </p>
    <time className="footer__text footer__time" dateTime="2021-11-01">
      Nov 1 — Nov 30, 2021
    </time>
    <a
      className="footer__link"
      href="https://generationcrypto.org/"
      target="_blank"
      rel="noopener noreferrer"
    >
      Win Bounties &gt;
    </a>
    <div>
      <a
        href="https://generationcrypto.org/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <ReactSVG className="footer__logo" src={footerLogo} />
      </a>
    </div>
  </footer>
);

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
