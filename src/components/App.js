import React, { Component } from "react";
import { Route } from 'react-router'

import '../index.css';

import Landing from './Landing';
import Demo from './Demo';

class App extends Component {
  render() {
    return (
      <div>
        <Route exact path='/' component={Landing}/>
        <Route exact path='/demo' component={Demo}/>
      </div>
    );
  }
}

export default App;
