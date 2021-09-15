import React, { useState } from 'react';
import PropTypes from 'prop-types';
import EmailContext from '../../contexts/EmailContext';
import DataContext from '../../contexts/DataContext';

const initData = {
  current_priority: 0,
  referral_link: 'https://reverent-snyder-9335f9.netlify.app/',
  total_referrals: 0,
  total_users: 0,
};

const initSubmit = {
  email: '',
  referral_link: 'https://reverent-snyder-9335f9.netlify.app/',
  type: 'sign-up',
};

const Layout = ({ children }) => {
  const [submitData, setSubmitData] = useState(initSubmit);
  const [data, setData] = useState(initData);

  return (
    <EmailContext.Provider value={{ submitData, setSubmitData }}>
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
