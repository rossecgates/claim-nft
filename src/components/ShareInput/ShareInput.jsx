import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import DataContext from '../../contexts/DataContext';

const ShareInput = ({ className, copy, setCopy }) => {
  const { data } = useContext(DataContext);

  const handleCopy = () => setCopy(true);

  return (
    <div className={`share-input ${className || ''}`}>
      <p className="share-input__title">Share your link to compete.</p>
      <div className="share-input__link-wrapper">
        <div className="share-input__link">
          <p className="share-input__link-text">{data.referral_link}</p>
          <CopyToClipboard
            className="share-input__link-btn"
            text={data.referral_link}
            onCopy={handleCopy}
          >
            <button className="share-input__link-btn" type="button">
              Copy
            </button>
          </CopyToClipboard>
        </div>
        <span
          className={`share-input__link-copy ${
            copy ? 'share-input__link-animation' : ''
          }`}
        >
          Copied
        </span>
      </div>
    </div>
  );
};

ShareInput.propTypes = {
  className: PropTypes.string,
  copy: PropTypes.bool,
  setCopy: PropTypes.func,
};

export default ShareInput;
