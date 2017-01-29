import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class Auth extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
      email: '',
      password: '',
    };

    this.toggle = this.toggle.bind(this);
    this.onEmailChange = this.onEmailChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.action = this.action.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open,
    });
  }

  onEmailChange(event) {
    this.setState({ email: event.target.value });
  }

  onPasswordChange(event) {
    this.setState({ password: event.target.value });
  }

  action() {
    console.log('action!');
    const { email, password } = this.state;
    const { actionLabel, login, logout, register } = this.props;
    console.log('login function: ', login);
    if (actionLabel.toLowerCase() === 'login') {
      login(email, password);
    } else if (actionLabel.toLowerCase() === 'register') {
      register(email, password);
    } else if (actionLabel.toLowerCase() === 'logout') {
      logout();
    }
  }

  render() {
    this.test = '';
    const isModalOpen = `modal${this.state.open ? ' is-active' : ''}`;
    const { email, password } = this.state;
    const { title, actionLabel } = this.props;

    return (
      <div>
        <span className="nav-item">
          <a className="nav-item" onClick={this.toggle}>{title}</a>
        </span>

        <div className={isModalOpen}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">{title}</p>
              <button className="delete"></button>
            </header>
            <section className="modal-card-body">
              <p className="control has-icon">
                <input onChange={this.onEmailChange} value={email} className="input" type="email" placeholder="Email" />
                <span className="icon is-small">
                  <i className="fa fa-envelope"></i>
                </span>
              </p>
              <p className="control has-icon">
                <input onChange={this.onPasswordChange} value={password} className="input" type="password" placeholder="Password" />
                <span className="icon is-small">
                  <i className="fa fa-lock"></i>
                </span>
              </p>
            </section>
            <footer className="modal-card-foot">
              <button onClick={() => this.action(email, password)} className="button is-primary">{actionLabel}</button>
              <button onClick={this.toggle} className="button">Cancel</button>
            </footer>
          </div>
        </div>
      </div>

    );
  }
}

const mapStateToProps = ({ user }) => ({ user });

export default connect(mapStateToProps, actions)(Auth);

