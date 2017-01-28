import React, { Component } from 'react';
import { Link } from 'react-router';

import Login from './login';
import Register from './register';

export default class Navbar extends Component {
  render() {
    this.test = 'test';

    return (
      <nav className="nav container">
        <div className="nav-left">
          <Link className="nav-item" to="/about">
            <img src="http://bulma.io/images/bulma-logo.png" alt="Bulma logo" />
          </Link>
        </div>

        <div className="nav-right nav-menu">
          <Login />
          <Register />
          <Link className="nav-item" to="/about">About</Link>
          <Link className="nav-item" to="/users">Users</Link>
        </div>
      </nav>
    );
  }
}
