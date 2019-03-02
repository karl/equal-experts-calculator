import React, { Component } from 'react';
import { Calculator } from './Calculator';
import './App.css';
import logo from './equal-experts-logo-colour.png';

class App extends Component {
  render() {
    return (
      <div className="App">
        <img alt="Equal Experts Logo" src={logo} className="logo" />
        <h1>Equal Experts Calculator</h1>
        <Calculator />
      </div>
    );
  }
}

export default App;
