import React from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';

const SignButton = ({ text, className }) => {
  const history = useHistory();

  const onClick = async (e) => {
    // eslint-disable-next-line no-console
    console.log('click in', e);

    const response = await fetch(
      'https://getwaitlist.com/api/v1/users/status',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify({
          api_key: '7YJ774',
          email: 'ikharchenko2008@gmail.com',
        }),
      },
    );
    history.push('/sign-in');
    const data = await response.json();

    // eslint-disable-next-line no-console
    console.log(data);
  };
  return (
    <button onClick={onClick} className={`${className || ''}  `} type="button">
      {text}
    </button>
  );
};

SignButton.propTypes = {
  text: PropTypes.string,
  className: PropTypes.string,
};

export default SignButton;
