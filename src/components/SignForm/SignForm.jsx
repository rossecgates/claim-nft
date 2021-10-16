import React, { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import * as EmailValidator from 'email-validator';
import { useHistory } from 'react-router-dom';
import SignButton from '../SignButton/SignButton';
import EmailContext from '../../contexts/EmailContext';

const SignForm = ({ isLoginPage }) => {
  const [error, setError] = useState(false);
  const [value, setValue] = useState('');
  const { setEmail } = useContext(EmailContext);

  const history = useHistory();

  const onSubmit = (e) => {
    e.preventDefault();

    const isEmailValidate = EmailValidator.validate(value);

    if (!isEmailValidate) {
      setError(true);
    } else {
      setEmail(value);
      history.push('/sign-in');
    }
  };

  const onFocus = () => setError(false);

  const onChange = ({ target }) => setValue(target.value.trim());

  return (
    <form
      className={`sign-form ${error ? 'sign-form__error' : ''}`}
      onSubmit={onSubmit}
    >
      <input
        placeholder="Enter your email..."
        className="sign-form__input"
        type="text"
        value={value}
        onChange={onChange}
        onFocus={onFocus}
      />
      {isLoginPage ? (
        <SignButton className="sign-form__button" text="Submit" />
      ) : (
        <SignButton className="sign-form__button" text="Grab an NFT" />
      )}
    </form>
  );
};

SignForm.propTypes = {
  isLoginPage: PropTypes.bool,
};

SignForm.defaultProps = {
  isLoginPage: false,
};
export default SignForm;
