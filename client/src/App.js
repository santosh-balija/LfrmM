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
  // To the existing cookie if exists
  state = {
    existingCookie: Cookies.get('Lfrm-jwt-token'),
  };
  render() {
    // Function to set the cookie when the user logins or registered for the first time
    const setCookie = (token) => {
      const currentCookie = Cookies.set('Lfrm-jwt-token', token);
      this.setState({ existingCookie: currentCookie });
    };

    // console.log(this.state.existingCookie);

    return (
      <div>
        <Layout>
          {/* Using Provider we are passing the existing Cookie and setCookie reference to the Context AuthContext */}
          {/* We can acess the latest info of tokens from the AuthContext */}
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
