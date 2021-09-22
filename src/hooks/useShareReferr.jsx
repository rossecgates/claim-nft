/* eslint-disable no-console */
// import { useContext } from 'react';
// import DataContext from '../contexts/DataContext';

const useShareReferr = (setCopy) => {
  // eslint-disable-next-line spaced-comment
  //const { data } = useContext(DataContext);
  const msg = {};
  // msg.link = data.referral_link;
  msg.link = 'https://gencwin.netlify.app/';
  console.log('msg:', msg.link);
  msg.shortLink = msg.link.slice(8, msg.link.length);

  msg.text =
    'You can win over $1,000,000 in prizes  &  contracts at the Generation Crypto - Conference & Competition. Join me there';
  msg.textUrl = `You can win over $1,000,000 in prizes +%26+ contracts at the Generation Crypto - Conference+%26+Competition. Join me there`;

  msg.hashtagUrl = `%23generationcrypto`;
  msg.hashtag = '#generationcrypto';

  msg.twitter = msg.textUrl;

  msg.linkedIn = `${msg.text} ${msg.hashtag}`;
  msg.instagram = `${msg.text}  
  
${msg.link}
  
${msg.hashtag}`;

  msg.facebook = `${msg.textUrl}%20${msg.hashtagUrl}`;
  msg.telegram = `%0D%0A${msg.textUrl}%0D%0A%0D%0A${msg.hashtagUrl}`;

  const handleShareReferr = (e) => {
    e.preventDefault();

    let text;
    const { social } = e.currentTarget.dataset;
    switch (social) {
      case 'linkedin':
        text = msg.linkedIn;
        break;
      case 'wechat':
      case 'discord':
      case 'instagram':
        text = msg.instagram;
        break;
      default:
        text = 'default';
    }

    e.preventDefault();
    const el = document.createElement('textarea');
    el.value = text;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);

    const link = e.currentTarget.href;
    setCopy(true);

    setTimeout(() => {
      window.open(link, '_blank');
    }, 700);
  };

  return { msg, handleShareReferr };
};

export default useShareReferr;
