import React from 'react';
import Home from './pages/Home';
import SignIn from './pages/SignIn';
import Login from './pages/Login';

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
  {
    path: '/login',
    key: 'LOGIN',
    component: () => <Login />,
  },
];

export default routes;
