import React from 'react';
import PropTypes from 'prop-types';

const PrizeList = ({ className }) => (
  <div className={`prize-list ${className || ''}`}>
    <div className="prize-list__item">
      <p className="prize-list__amount">$1M+</p>
      <p className="prize-list__text">
        Win your piece of $1M+ in marketing bounties
      </p>
    </div>
  </div>
);

PrizeList.propTypes = {
  className: PropTypes.string,
};

export default PrizeList;
