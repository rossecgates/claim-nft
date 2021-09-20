/* eslint-disable no-console */

const URL = 'https://getwaitlist.com/api/v1/waitlists/submit';
const API_KEY = process.env.REACT_APP_API_KEY;

const setupObj = (email) => {
  const referralLink =
    localStorage.getItem('referralLink') === null
      ? document.URL
      : localStorage.getItem('referralLink');

  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json;charset=utf-8',
    },
    body: JSON.stringify({
      api_key: API_KEY,
      email,
      referral_link: referralLink,
    }),
  };
};

const signInUp = async (email) => {
  let data;

  try {
    const response = await fetch(URL, setupObj(email));

    data = await response.json();
  } catch (e) {
    console.log(e);
  }
  return data;
};

export { signInUp };
