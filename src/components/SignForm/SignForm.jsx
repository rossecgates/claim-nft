import React from 'react';
import PropTypes from 'prop-types';

import SignButton from '../SignButton/SignButton';

const SignForm = ({ isSignIn }) => (
  <form className="sign-form">
    <input
      placeholder="Enter your email..."
      className="sign-form__input"
      type="text"
    />
    {isSignIn ? (
      <SignButton
        className="sign-form__button"
        onSubmit={() => {}}
        text="Sign in"
      />
    ) : (
      <SignButton
        className="sign-form__button"
        onSubmit={() => {}}
        text="Sign up"
      />
    )}
  </form>
);

SignForm.propTypes = {
  isSignIn: PropTypes.bool,
};

SignForm.defaultProps = {
  isSignIn: false,
};
export default SignForm;
