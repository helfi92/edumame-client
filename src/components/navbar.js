import React, { Component } from 'react';
import { Link } from 'react-router';

import Auth from './auth';

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }

  login(email, password) {
    this.test = 'test';
    console.log('username: ',  email);
    console.log('password: ', password);
  }

  register(email, password) {
    this.test = 'test';
    console.log('username: ',  email);
    console.log('password: ', password);
  }

  render() {
    this.test = 'test';

    return (
      <nav className="nav container">
        <div className="nav-left nav-menu">
          <div className="nav-item">
            <Link to="/search">EDUMA.ME</Link>
          </div>
        </div>
        <div className="nav-right nav-menu">
          <Auth title="Login" actionLabel="Login" action={this.login}/>
          <Auth title="Register" actionLabel="Register" action={this.register}/>
        </div>
      </nav>
    );
  }
}
