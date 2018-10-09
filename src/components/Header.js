import React, { Component } from 'react';
import logo from './logo.svg';

class Header extends Component {
  render() {
    return (
      <div>
        <nav className="App-header navbar navbar-light bg-dark">
          <img src={logo} className="App-logo" alt="React Logo" />
          <span className="title">Bay Area Ice Cream Locator</span>
        </nav>
      </div>
    );
  }
}

export default Header;
