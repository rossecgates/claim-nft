import React from 'react';
import { ReactSVG } from 'react-svg';
import {
  EmailShareButton,
  FacebookShareButton,
  LinkedinShareButton,
  TelegramShareButton,
  TwitterShareButton,
} from 'react-share';
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
      <TwitterShareButton>
        <ReactSVG src={twitter} />
      </TwitterShareButton>
    </li>
    <li>
      <LinkedinShareButton>
        <ReactSVG src={linkedin} />
      </LinkedinShareButton>
    </li>
    <li>
      <ReactSVG src={instagram} />
    </li>
    <li>
      <EmailShareButton>
        <ReactSVG src={email} />
      </EmailShareButton>
    </li>
    <li>
      <FacebookShareButton>
        <ReactSVG src={facebook} />
      </FacebookShareButton>
    </li>
    <li>
      <ReactSVG src={wechat} />
    </li>
    <li>
      <TelegramShareButton title="text">
        <ReactSVG src={telegram} />
      </TelegramShareButton>
    </li>
    <li>
      <ReactSVG src={discord} />
    </li>
  </ul>
);

export default ShareSocialList;
