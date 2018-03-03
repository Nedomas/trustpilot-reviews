import React, { Component } from "react";

class Review extends Component {
  render() {
    return (
      <style>
        {
          "html {background: url(./images/mock-bg-v1.png) center top no-repeat fixed;}"
        }
      </style>
    );
  }
}

if (window.location.href.endsWith("start")) {
  document.querySelector("html").addEventListener("click", () => {
    window.location.href = "rate";
  });
}

export default Review;
