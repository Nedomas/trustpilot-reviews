import React, { Component } from "react";
import MessengerCustomerChat from "react-messenger-customer-chat";
import Stars from "./Stars";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      badReview: false
    };
  }

  handleReview(num) {
    if (num > 3) return;
    this.handleBadReview();
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
          <Stars handleClick={num => this.handleReview(num)} />
        </header>
        <button onClick={() => this.handleBadReview()}>This is shit</button>
        <MessengerCustomerChat
          pageId="369078686897983"
          appId="369233150149061"
          className={badReview ? "" : "disabled"}
        />
      </div>
    );
  }
}

export default App;
