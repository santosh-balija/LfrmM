import React from 'react';
import { useAuth } from './../Context/Auth';
import { Route, Redirect } from 'react-router-dom';

const privateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useAuth();
  console.log('Private Route rendered');
  return (
    <Route
      {...rest}
      render={(props) =>
        isAuthenticated ? <Component {...rest} /> : <Redirect to='/' />
      }
    />
  );
};

export default privateRoute;
