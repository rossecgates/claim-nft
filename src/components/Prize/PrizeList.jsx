import React from 'react';
import PropTypes from 'prop-types';
import { ReactSVG } from 'react-svg';
import background from '../../assets/images/prize-background.svg';

const PrizeList = ({ className }) => (
  <div className={`prize-list ${className || ''}`}>
    <ReactSVG className="prize-list__background" src={background} />
    <div className="prize-list__item">
      <p className="prize-list__amount">$10k</p>
      <p className="prize-list__text">
        for referring the most attendees in October
      </p>
    </div>

    <div className="prize-list__item">
      <p className="prize-list__amount">$10k</p>
      <p className="prize-list__text">
        for referring the most attendees in November
      </p>
    </div>

    <div className="prize-list__item">
      <p className="prize-list__amount">10%</p>
      <p className="prize-list__text">
        of the prize money for referring a winning team.
      </p>
    </div>
  </div>
);

PrizeList.propTypes = {
  className: PropTypes.string,
};

export default PrizeList;
