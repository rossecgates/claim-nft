import React from 'react';
import Home from './pages/Home';
import SignIn from './pages/SignIn';

const routes = [
  {
    path: '/',
    key: 'ROOT',
    exact: true,
    component: () => <Home />,
  },
  {
    path: '/sign-in',
    key: 'SIGN_IN',
    component: () => <SignIn />,
  },
];

export default routes;
