import React, { Component } from 'react';
import { Link } from 'react-router';

class Home extends Component {
  render() {
    this.test = '';

    return (
      <div>
        <ul role="nav">
          <li><Link to="/about">About</Link></li>
          <li><Link to="/users">Users</Link></li>
        </ul>
        {this.props.children}
      </div>
    );
  }
}

export default Home;
