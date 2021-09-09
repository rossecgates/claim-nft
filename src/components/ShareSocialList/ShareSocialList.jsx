import React from 'react';
import { ReactSVG } from 'react-svg';
import twitter from '../../assets/images/twitter.svg';
import linkedin from '../../assets/images/linkedin.svg';
import instagram from '../../assets/images/instagram.svg';
import email from '../../assets/images/email.svg';
import facebook from '../../assets/images/facebook.svg';
import wechat from '../../assets/images/wechat.svg';
import telegram from '../../assets/images/telegram.svg';
import discord from '../../assets/images/discord.svg';

const ShareSocialList = () => (
  <ul className="share-social-list">
    <li>
      <ReactSVG src={twitter} />
    </li>
    <li>
      <ReactSVG src={linkedin} />
    </li>
    <li>
      <ReactSVG src={instagram} />
    </li>
    <li>
      <ReactSVG src={email} />
    </li>
    <li>
      <ReactSVG src={facebook} />
    </li>
    <li>
      <ReactSVG src={wechat} />
    </li>
    <li>
      <ReactSVG src={telegram} />
    </li>
    <li>
      <ReactSVG src={discord} />
    </li>
  </ul>
);

export default ShareSocialList;
