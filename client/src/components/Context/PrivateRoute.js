import React from 'react';
import { useAuth } from './../Context/Auth';
import { Route, Redirect } from 'react-router-dom';

const privateRoute = ({ component: Component, ...rest }) => {
  const { existingCookie } = useAuth();
  console.log(existingCookie);
  let render_component;
  if (existingCookie) {
    render_component = <Component {...rest} />;
  } else {
    render_component = <Redirect to='/' />;
  }
  return <Route {...rest} render={(props) => render_component} />;
};

export default privateRoute;
