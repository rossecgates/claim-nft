import React from 'react';

const SignUp = () => (
  <div className="sign-up">
    <h4 className="sign-up__title">Signup below and start referring</h4>
    <form className="sign-up__form">
      <input
        placeholder="Enter your email..."
        className="sign-up__input"
        type="text"
      />
      <button className="sign-up__button" type="button">
        Sign up
      </button>
    </form>
  </div>
);

export default SignUp;
