import React, { Component } from 'react';
import { Link } from 'react-router';
import { connect } from 'react-redux';

import Auth from './auth';
import * as actions from '../actions';

class Navbar extends Component {
  render() {
    this.test = 'test';
    const isLoggedIn =  this.props.user && this.props.user.token ? true : false;
    const { logout } = this.props;

    return (
      <nav className="nav container">
        <div className="nav-left nav-menu">
          <div className="nav-item">
            <Link to="/search">EDUMA.ME</Link>
          </div>
        </div>
        <div className="nav-right nav-menu">
          { isLoggedIn ? <span className="nav-item">
            <a onClick={logout}>Logout</a></span> :
            <div className="nav-auth"><Auth title="Login" actionLabel="Login" /><Auth title="Register" actionLabel="Register" /></div>
          }
        </div>
      </nav>
    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, actions)(Navbar);