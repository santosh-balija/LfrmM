import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import LoginPage from './components/Login/LoginPage';
import Register from './components/Register/Register';
import PageLayout from './components/PageLayout/PageLayout';
import HomePage from './components/HomePage/HomePage';
import { Route, Switch } from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <Switch>
            <Route path='/register' component={Register} />
            <Route path='/home' component={HomePage} />
            {/* <Route path='/Notifications' component={HomePage} /> */}
            <Route path='/' exact component={LoginPage} />

            <Route />
          </Switch>
        </Layout>
      </div>
    );
  }
}

export default App;
