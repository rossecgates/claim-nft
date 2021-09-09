import React from 'react';
import PropTypes from 'prop-types';
import ShareSocialList from '../ShareSocialList';

const ShareSocial = ({ className }) => (
  <div className={`share-social ${className || ''}`}>
    <div className="share-social__title">or easily share on social</div>
    <ShareSocialList className="share-social__list" />
  </div>
);

ShareSocial.propTypes = {
  className: PropTypes.string,
};

export default ShareSocial;
