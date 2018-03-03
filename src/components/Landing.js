import React, { Component } from "react";

class Landing extends Component {
  render() {
    return <div onClick={() => (window.location.href = "start")}>Landing</div>;
  }
}

export default Landing;
