import React from 'react';
import PropTypes from 'prop-types';
import ShareSocialList from '../ShareSocialList';

const ShareSocial = ({ className, copy, setCopy }) => (
  <div className={`share-social ${className || ''}`}>
    <div className="share-social__title">or easily share on social</div>
    <ShareSocialList
      copy={copy}
      setCopy={setCopy}
      className="share-social__list"
    />
  </div>
);

ShareSocial.propTypes = {
  className: PropTypes.string,
  copy: PropTypes.bool,
  setCopy: PropTypes.func,
};

export default ShareSocial;
