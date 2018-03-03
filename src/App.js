import React, { Component } from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <MessengerCustomerChat
          pageId='369078686897983'
          appId='369233150149061'
        />
      </div>
    );
  }
}

export default App;
