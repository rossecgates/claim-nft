import React from 'react';
import PropTypes from 'prop-types';

const PrizeList = ({ className }) => (
  <div className={`prize-list ${className || ''}`}>
    <div className="prize-list__item">
      <p className="prize-list__amount">10%</p>
      <p className="prize-list__text">
        of the prize money for referring a winning team.
      </p>
    </div>

    <div className="prize-list__item">
      <p className="prize-list__amount">$10k</p>
      <p className="prize-list__text">Refer the most attendees</p>
    </div>

    <div className="prize-list__item">
      <p className="prize-list__amount">$5k</p>
      <p className="prize-list__text">Refer the 2nd most attendees</p>
    </div>

    <div className="prize-list__item">
      <p className="prize-list__amount">$2k</p>
      <p className="prize-list__text">Refer the 3rd most attendees</p>
    </div>
  </div>
);

PrizeList.propTypes = {
  className: PropTypes.string,
};

export default PrizeList;
