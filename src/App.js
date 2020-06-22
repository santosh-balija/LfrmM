import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import LoginPage from './components/Login/LoginPage';
import RegisterPage from './components/Login/RegisterPage';

class App extends Component {
  render() {
    return (
      <div>
        <Layout>
          <RegisterPage/>
        </Layout>
      </div>
    );
  }
}

export default App;
