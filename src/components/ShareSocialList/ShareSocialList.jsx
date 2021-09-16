/* eslint-disable no-console */
import React from 'react';
import { ReactSVG } from 'react-svg';
import { EmailShareButton } from 'react-share';
import twitter from '../../assets/images/twitter.svg';
import linkedin from '../../assets/images/linkedin.svg';
import instagram from '../../assets/images/instagram.svg';
import email from '../../assets/images/email.svg';
import facebook from '../../assets/images/facebook.svg';
import wechat from '../../assets/images/wechat.svg';
import telegram from '../../assets/images/telegram.svg';
import discord from '../../assets/images/discord.svg';

const ShareSocialList = () => {
  const onClick = () => {
    const el = document.createElement('textarea');
    el.value = 'Referral : https://reverent-snyder-9335f9.netlify.app/';
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    el.select();
    document.execCommand('copy');
    document.body.removeChild(el);
  };

  return (
    <ul className="share-social-list">
      <li>
        <a
          href="https://twitter.com/intent/tweet?url=http%3A%2F%2Freverent-snyder-9335f9.netlify.app/&text=Referral"
          onClick={onClick}
          target="_blank"
        >
          <ReactSVG src={twitter} />
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/sharing/share-offsite/?url=http%3A%2F%2Freverent-snyder-9335f9.netlify.app&title=Create LinkedIn Share button on Website Webpages&summary=chillyfacts.com"
          target="_blank"
        >
          <ReactSVG src={linkedin} />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/direct/inbox/"
          target="_blank"
          onClick={onClick}
        >
          <ReactSVG src={instagram} />
        </a>
      </li>
      <li>
        <EmailShareButton
          subject="Hello"
          body="text"
          separator=""
          url="https://reverent-snyder-9335f9.netlify.app/"
        >
          <ReactSVG src={email} />
        </EmailShareButton>
      </li>
      <li>
        <a
          href="https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2Freverent-snyder-9335f9.netlify.app&quote=Referral"
          target="_blank"
        >
          <ReactSVG src={facebook} />
        </a>
      </li>
      <li>
        <a href="weixin://" target="_blank" onClick={onClick}>
          <ReactSVG src={wechat} />
        </a>
      </li>
      <li>
        <a
          href="https://telegram.me/share/?url=http%3A%2F%2Freverent-snyder-9335f9.netlify.app&text=Referral"
          target="_blank"
        >
          <ReactSVG src={telegram} />
        </a>
      </li>
      <li>
        <a
          href="https://discord.com/channels/@me"
          target="_blank"
          onClick={onClick}
        >
          <ReactSVG src={discord} />
        </a>
      </li>
    </ul>
  );
};

export default ShareSocialList;
