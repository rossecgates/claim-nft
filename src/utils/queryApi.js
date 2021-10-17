/* eslint-disable no-console */
const URL = 'https://hook.integromat.com/yeiqdj9umkq8u05robvyty64w3r230t3';

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
      api_key: 'X',
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
