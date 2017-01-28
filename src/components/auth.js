import React, { Component } from 'react';
// import app from './feathers';

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

  render() {
    this.test = '';
    const isModalOpen = `modal${this.state.open ? ' is-active' : ''}`;
    const { email, password } = this.state;
    const { title, actionLabel, action } = this.props;

    return (
      <div>
        <span className="nav-item">
          <button onClick={this.toggle} className="button is-primary">{title}</button>
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
              <button onClick={() => action(email, password)} className="button is-primary">{actionLabel}</button>
              <button onClick={this.toggle} className="button">Cancel</button>
            </footer>
          </div>
        </div>
      </div>

    );
  }
}

export default Auth;
