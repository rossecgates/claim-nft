import React from 'react';
import PropTypes from 'prop-types';
import Header from '../Header';
import Footer from '../Footer';

const Layout = ({ children }) => (
  <div className="layout">
    <Header />
    <div className="layout__content">
      <Footer />
      <div className="layout__page">{children}</div>
    </div>
  </div>
);

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
