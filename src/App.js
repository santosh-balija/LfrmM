import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import LoginPage from './components/Login/LoginPage';
import RegisterPage from './components/Login/RegisterPage';
import { Router } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <div>
          <Layout>
            <LoginPage/>
          </Layout>
        </div>
    );
  }
}

export default App;
