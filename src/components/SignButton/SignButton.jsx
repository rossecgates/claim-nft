import React from 'react';
import PropTypes from 'prop-types';

const SignButton = ({ onSubmit, text, className }) => (
  <button
    onClick={() => {
      onSubmit();
    }}
    className={`${className || ''}  `}
    type="button"
  >
    {text}
  </button>
);

SignButton.propTypes = {
  onSubmit: PropTypes.func,
  text: PropTypes.string,
  className: PropTypes.string,
};

export default SignButton;
