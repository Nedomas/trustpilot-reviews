import React, { Component } from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      badReview: false
    };
  }
  handleBadReview() {
    this.setState({
      badReview: true
    });
  }
  render() {
    const { badReview } = this.state;

    return (
      <div>
        <header>
          <h1>TRUSTUM.io</h1>
        </header>
        <button onClick={() => this.handleBadReview()}>This is shit</button>
        {badReview && (
          <MessengerCustomerChat
            pageId="369078686897983"
            appId="369233150149061"
          />
        )}
      </div>
    );
  }
}

export default App;
