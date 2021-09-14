import React from 'react';
import PropTypes from 'prop-types';

const Loader = ({ className }) => (
  <div className={`loader ${className || ''}`}>
    <div className="lds-dual-ring"></div>
  </div>
);

Loader.propTypes = {
  className: PropTypes.string,
};
export default Loader;
