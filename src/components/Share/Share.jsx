/* eslint-disable no-console */
import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import DataContext from '../../contexts/DataContext';

const Share = ({ className }) => {
  const { data } = useContext(DataContext);
  const [copy, setCopy] = useState(false);

  const handleCopy = () => setCopy(true);

  useEffect(() => {
    const timerId = setTimeout(() => setCopy(false), 1000);
    return () => clearTimeout(timerId);
  }, [copy]);

  return (
    <div className={`share ${className || ''}`}>
      <p className="share__title">Share your link to compete.</p>
      <div className="share__link-wrapper">
        <div className="share__link">
          <p className="share__link-text">{data.referral_link}</p>
          <CopyToClipboard
            className="share__link-btn"
            text={data.referral_link}
            onCopy={handleCopy}
          >
            <button className="share__link-btn" type="button">
              Copy
            </button>
          </CopyToClipboard>
        </div>
        <span
          className={`share__link-copy ${copy ? 'share__link-animation' : ''}`}
        >
          Copied
        </span>
      </div>
    </div>
  );
};
Share.propTypes = {
  className: PropTypes.string,
};

export default Share;
