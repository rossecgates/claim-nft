/* eslint-disable no-console */
import React from 'react';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';
import { EmailShareButton } from 'react-share';
import useShareReferr from '../../hooks/useShareReferr';

import twitter from '../../assets/images/twitter.svg';
import linkedin from '../../assets/images/linkedin.svg';
import instagram from '../../assets/images/instagram.svg';
import email from '../../assets/images/email.svg';
import facebook from '../../assets/images/facebook.svg';
import wechat from '../../assets/images/wechat.svg';
import telegram from '../../assets/images/telegram.svg';
import discord from '../../assets/images/discord.svg';

const ShareSocialList = ({ setCopy }) => {
  const { msg, handleShareReferr } = useShareReferr(setCopy);

  return (
    <ul className="share-social-list">
      <li>
        <a
          href="https://twitter.com/"
          // eslint-disable-next-line spaced-comment
          /*href={`https://twitter.com/intent/tweet?url=http%3A%2F%2F${msg.shortLink}/&text=${msg.twitter}`}*/

          target="_blank"
          rel="noopener noreferrer"
        >
          <ReactSVG src={twitter} />
        </a>
      </li>
      <li>
        <a
          href={`https://www.linkedin.com/sharing/share-offsite/?url=http%3A%2F%2F${msg.shortLink}`}
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleShareReferr}
          data-social="linkedin"
        >
          <ReactSVG src={linkedin} />
        </a>
      </li>
      <li>
        <a
          href="https://www.instagram.com/direct/inbox/"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleShareReferr}
          data-social="instagram"
        >
          <ReactSVG src={instagram} />
        </a>
      </li>
      <li>
        <EmailShareButton
          subject="Referr and win "
          body={msg.instagram}
          separator=""
          url=""
        >
          <ReactSVG src={email} />
        </EmailShareButton>
      </li>
      <li>
        <a
          href={`https://www.facebook.com/sharer/sharer.php?u=http%3A%2F%2F${msg.shortLink}&quote=${msg.facebook}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ReactSVG src={facebook} />
        </a>
      </li>
      <li>
        <a
          href="weixin://"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleShareReferr}
          data-social="wechat"
        >
          <ReactSVG src={wechat} />
        </a>
      </li>
      <li>
        <a
          href={`https://telegram.me/share/?text=${msg.telegram}&url=http%3A%2F%2F${msg.shortLink}`}
          target="_blank"
          rel="noopener noreferrer"
        >
          <ReactSVG src={telegram} />
        </a>
      </li>
      <li>
        <a
          href="https://discord.com/channels/@me"
          target="_blank"
          rel="noopener noreferrer"
          onClick={handleShareReferr}
          data-social="discord"
        >
          <ReactSVG src={discord} />
        </a>
      </li>
    </ul>
  );
};

ShareSocialList.propTypes = {
  setCopy: PropTypes.func,
};

export default ShareSocialList;
