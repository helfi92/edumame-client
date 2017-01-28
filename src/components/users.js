import React, { Component } from 'react';
import { Link } from 'react-router';

class Users extends Component {
  render() {
    this.test = '';

    return <div>Users. Navigate to <Link to="/about">About</Link></div>;
  }
}

export default Users;
