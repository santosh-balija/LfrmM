import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import LoginPage from './components/Login/LoginPage';
import Register from './components/Register/Register';
import HomePage from './components/HomePage/HomePage';
import { AuthContext } from './components/Context/Auth';
import PrivateRoute from './components/Context/PrivateRoute';
import { Route, Switch } from 'react-router-dom';
import Cookies from 'js-cookie';

class App extends Component {
  state = {
    existingCookie: Cookies.get('Lfrm-jwt-token'),
  };
  render() {
    // const existingToken = Cookies.get('Lfrm-jwt-token');
    // this.setState({ existingCookie: existingToken });
    const setCookie = (token) => {
      const currentCookie = Cookies.set('Lfrm-jwt-token', token);
      this.setState({ existingCookie: currentCookie });
    };
    return (
      <div>
        <Layout>
          <AuthContext.Provider
            value={{
              existingCookie: this.state.existingCookie,
              setCookie: setCookie,
            }}
          >
            <Switch>
              <Route path='/register' component={Register} exact />
              <PrivateRoute path='/home' component={HomePage} exact />
              <Route path='/Notifications' component={HomePage} exact />
              <Route path='/' exact component={LoginPage} exact />

              <Route />
            </Switch>
          </AuthContext.Provider>
        </Layout>
      </div>
    );
  }
}

export default App;
