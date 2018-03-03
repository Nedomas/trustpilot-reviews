import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div onClick={() => (window.location.href = "start")}>
        <Header />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div>
          <h2 className="header--title">Have you ever dealt with bad news?</h2>
          <p>What if we told you that those days are over and we're ready to help you out with negativity?</p>
        </div>
      </div>
    );
  }
}

export default Landing;
