import React from 'react';
import PropTypes from 'prop-types';

const SignButton = ({ text, className }) => (
  <button className={`${className || ''}  `} type="submit">
    {text}
  </button>
);

SignButton.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

export default SignButton;
