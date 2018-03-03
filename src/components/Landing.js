import React, { Component } from "react";

class Landing extends Component {
  render() {
    return (
      <div>
        <Header />
        <Info />
      </div>
    );
  }
}

class Header extends Component {
  render() {
    return (
      <div className="header">
        <div className="header--nav">
          <img src="/logo-black.png" class="logo_black" alt="" />
          <p className="link">HOME</p>
          <p className="link">ABOUT</p>
          <button
            className="button button__demo"
            onClick={() => (window.location.href = "start")}
          >
            <span>DEMO</span>
          </button>
        </div>
        <div className="header--content">
          <div className="header--info">
            <h2 className="header--title">
              Have you ever dealt with bad news?
            </h2>
            <p className="header--text">
              What if we told you that those days are over and we're ready to
              help you out with negativity?
            </p>
            <button className="button">
              <span>LEARN MORE</span>
            </button>
          </div>
          <div className="header--illustration">
            <img src="/illustration.png" className="illustration" alt="" />
          </div>
        </div>
      </div>
    );
  }
}

class Info extends Component {
  render() {
    return <div className="info" />;
  }
}

export default Landing;
