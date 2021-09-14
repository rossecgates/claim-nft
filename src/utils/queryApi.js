/* eslint-disable no-console */
const URL_SIGN_UP = 'https://getwaitlist.com/api/v1/waitlists/submit';
const URL_SIGN_IN = 'https://getwaitlist.com/api/v1/users/status';

const setupObj = (email, isSignIn) => ({
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify(
    isSignIn
      ? {
          api_key: '7YJ774',
          email,
        }
      : {
          api_key: '7YJ774',
          email,
          referral_link:
            'https://reverent-snyder-9335f9.netlify.app/?ref_id=LIUZQQMIX',
        },
  ),
});

const signInUp = async (email, type = 'sign-up') => {
  let data;
  const isSignIn = type === 'sign-in';
  const URL = type === 'sign-in' ? URL_SIGN_IN : URL_SIGN_UP;
  console.log('login: ', isSignIn);

  try {
    const response = await fetch(URL, setupObj(email, isSignIn));

    data = await response.json();
  } catch (e) {
    console.log(e);
  }
  return data;
};

export { signInUp };
