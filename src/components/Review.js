import React, { Component } from "react";

class Review extends Component {
  render() {
    return (
      <style>
        {
          "html {background: url(./images/mock-bg-v1.png) no-repeat center center fixed;-webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size: cover;}"
        }
      </style>
    );
  }
}

document.querySelector("html").addEventListener("click", () => {
  window.location.href = "demo";
});

export default Review;
