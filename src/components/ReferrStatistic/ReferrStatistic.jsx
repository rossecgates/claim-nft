import React, { useContext } from 'react';
import { ReactSVG } from 'react-svg';
import background from '../../assets/images/referr-background.svg';
import DataContext from '../../contexts/DataContext';

const ReferrStatistic = () => {
  const { data } = useContext(DataContext);

  return (
    <div className="referr-statistic">
      <ReactSVG className="referr-statistic__background" src={background} />
      <p className="referr-statistic__title">You have referred</p>
      <div className="referr-statistic__count">
        <span className="referr-statistic__count-color">
          {data.total_referrals}
        </span>{' '}
        agencies
      </div>
      <p className="referr-statistic__text">
        Currently in{' '}
        <span className="referr-statistic__text-color">
          {data.current_priority}th place
        </span>
      </p>
    </div>
  );
};

export default ReferrStatistic;
