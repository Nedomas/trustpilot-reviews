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
              We automate and simplify dealing with negative reviews.
            </h2>
            <p className="header--text">
              Our chatbot finds, analyzes and automatically responds to negative
              reviews for you, real time.
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
    return (
      <div className="info">
        <h2>We help you find out where the problem is and appease clients.</h2>
        <p>
          Did you know that one negative review can cost you up to thirty
          customers? We help you prevent negative reviews as soon as they happen
          by finding all the reviews for you, quickly identifying the cause of
          the review, and messaging the user to collect more relevant details.
        </p>
        <div className="info--cards">
          <div className="info--card">
            <img src="/icon-2.png" class="card--icon" />
            <h3>Categorization</h3>
            <p>
              We find out the cause of the negative experience, and try to put
              it in the appropriate box so you can gather stats.
            </p>
          </div>
          <div className="info--card">
            <img src="/icon-1.png" class="card--icon" />
            <h3>Data Gathering</h3>
            <p>
              We collect as much relevant details from the user as possible
              before the review happens.
            </p>
          </div>
          <div className="info--card">
            <img src="/icon-3.png" class="card--icon" />
            <h3>Fast Resolution</h3>
            <p>
              We message the user immediately, apologising and asking for help
              to resolve the issue.
            </p>
          </div>
        </div>
        <button className="button">
          <span>LEARN MORE</span>
        </button>
      </div>
    );
  }
}

export default Landing;
