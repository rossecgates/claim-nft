/* eslint-disable no-console */
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import EmailContext from '../../contexts/EmailContext';
import DataContext from '../../contexts/DataContext';

const initData = {
  current_priority: 0,
  referral_link: 'https://genc.win/',
  total_referrals: 0,
  total_users: 0,
};

const Layout = ({ children }) => {
  const [email, setEmail] = useState('');
  const [data, setData] = useState(initData);

  return (
    <EmailContext.Provider value={{ email, setEmail }}>
      <DataContext.Provider value={{ data, setData }}>
        <div className="layout">{children}</div>
      </DataContext.Provider>
    </EmailContext.Provider>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
