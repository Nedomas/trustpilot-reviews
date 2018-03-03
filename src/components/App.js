import React, { Component } from "react";
import { Route } from "react-router";

import "../index.css";

import Landing from "./Landing";
import Rate from "./Rate";
import Review from "./Review";

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path="/" component={Landing} />
        <Route exact path="/rate" component={Rate} />
        <Route exact path="/start" component={Review} />
      </div>
    );
  }
}

export default App;
