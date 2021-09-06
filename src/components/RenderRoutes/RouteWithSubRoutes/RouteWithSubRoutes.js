import React from 'react';
import { Route } from 'react-router';
import PropTypes from 'prop-types';

export const RouteWithSubRoutes = (route) => {
  const { path, exact, routes } = route;
  return (
    <Route
      path={path}
      exact={exact}
      render={(props) => <route.component {...props} routes={routes} />}
    />
  );
};

RouteWithSubRoutes.propTypes = {
  route: PropTypes.object,
};

export default RouteWithSubRoutes;
