import React, { Component } from 'react';
import { Link } from 'react-router';

import Auth from './auth';
import app from '../app';

export default class Navbar extends Component {
  constructor(props) {
    super(props);

    this.login = this.login.bind(this);
    this.register = this.register.bind(this);
  }

  login(email, password) {
    this.test = 'test';

    app.authenticate({
      type: 'local',
        email,
        password
    }).then(result => {
      console.log(result)
    }).catch(err => console.error(err));
  }

  register(email, password) {
    this.test = 'test';

    app.service('users').create({email, password, firstName: "Kenta", lastName: "Iwasaki"}).then(result => {
      console.log(result);
      this.login(email, password);
    }).catch(err => console.error(err));
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
