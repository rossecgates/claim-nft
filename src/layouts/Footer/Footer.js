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
    <p className="footer__text">Oct 26 — Nov 14, 2021</p>
    <a className="footer__link" href="/">
      Learn more &gt;
    </a>
    <ReactSVG className="footer__logo" src={footerLogo} />
  </footer>
);

Footer.propTypes = {
  className: PropTypes.string,
};

export default Footer;
