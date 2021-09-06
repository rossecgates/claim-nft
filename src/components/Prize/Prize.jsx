import React from 'react';
import PrizeList from './PrizeList';

const Prize = () => (
  <div className="prize">
    <header>
      <h2 className="prize__title">You can win</h2>
    </header>
    <PrizeList className="prize__list" />
  </div>
);

export default Prize;
