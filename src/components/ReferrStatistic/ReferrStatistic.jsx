import React from 'react';
import { ReactSVG } from 'react-svg';
import background from '../../assets/images/referr-background.svg';

const ReferrStatistic = () => (
  <div className="referr-statistic">
    <ReactSVG className="referr-statistic__background" src={background} />
    <p className="referr-statistic__title">You have referred</p>
    <div className="referr-statistic__count">
      <span className="referr-statistic__count-color">12</span> agencies
    </div>
    <p className="referr-statistic__text">
      Currently in{' '}
      <span className="referr-statistic__text-color">12th place</span>
    </p>
  </div>
);

export default ReferrStatistic;
