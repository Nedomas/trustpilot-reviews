import React, { Component } from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';

class App extends Component {
  render() {
    return (
      <div>
        <header>
          <h1>TRUSTUM.io</h1>
        </header>
        <MessengerCustomerChat
          pageId='369078686897983'
          appId='369233150149061'
        />
      </div>
    );
  }
}

export default App;
