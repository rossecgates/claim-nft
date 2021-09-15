/* eslint-disable no-console */

const URL = 'https://getwaitlist.com/api/v1/waitlists/submit';

const referralLink = localStorage.getItem('referralLink');

const setupObj = (email) => ({
  method: 'POST',
  headers: {
    'Content-Type': 'application/json;charset=utf-8',
  },
  body: JSON.stringify({
    api_key: '7YJ774',
    email,
    referral_link: referralLink,
  }),
});

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
