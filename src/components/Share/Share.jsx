import React from 'react';
import PropTypes from 'prop-types';

const Share = ({ className }) => (
  <div className={`share ${className || ''}`}>
    <p className="share__title">Share your link to compete.</p>
    <div className="share__link">
      <p className="share__link-text">referallcodez.io/?un=ross@near.org</p>
      <button className="share__link-btn" type="button">
        Copy
      </button>
    </div>
  </div>
);

Share.propTypes = {
  className: PropTypes.string,
};

export default Share;
