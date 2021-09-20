import React from 'react';
import { Route, Switch, Redirect } from 'react-router';
import PropTypes from 'prop-types';
import ScrollToTop from '../ScrollToTop';
import RouteWithSubRoutes from './RouteWithSubRoutes';

const RenderRoutes = ({ routes }) => (
  <>
    <Switch>
      {routes.map((route) => (
        <RouteWithSubRoutes key={route.key} {...route} />
      ))}
      <Route component={() => <Redirect to="/" />} />
    </Switch>
    <ScrollToTop />
  </>
);

RenderRoutes.propTypes = {
  routes: PropTypes.array,
};

export default RenderRoutes;
