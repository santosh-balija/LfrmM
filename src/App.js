import React, { Component } from 'react';
import Layout from './components/Layout/Layout';
import LoginPage from './components/Login/LoginPage';

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
