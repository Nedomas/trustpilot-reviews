import React, { Component } from 'react';
import MessengerCustomerChat from 'react-messenger-customer-chat';

class App extends Component {
  render() {
    return (
      <div style={styles.container}>
        <h1>TRUSTUM.io</h1>
        <MessengerCustomerChat
          pageId='369078686897983'
          appId='369233150149061'
        />
      </div>
    );
  }
}

const styles = {
  container: {
    paddingTop: '100px',
    textAlign: 'center',
  },
};

export default App;
