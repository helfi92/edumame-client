import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false,
    };

    this.toggle = this.toggle.bind(this);
  }

  toggle() {
    this.setState({
      open: !this.state.open,
    });
  }

  render() {
    this.test = '';
    const isModalOpen = `modal${this.state.open ? ' is-active' : ''}`;

    return (
      <div>
        <span className="nav-item">
          <button onClick={this.toggle} className="button is-primary">Login</button>
        </span>

        <div className={isModalOpen}>
          <div className="modal-background"></div>
          <div className="modal-card">
            <header className="modal-card-head">
              <p className="modal-card-title">Login</p>
              <button className="delete"></button>
            </header>
            <section className="modal-card-body">
              <p className="control has-icon">
                <input className="input" type="email" placeholder="Email" />
                <span className="icon is-small">
                  <i className="fa fa-envelope"></i>
                </span>
              </p>
              <p className="control has-icon">
                <input className="input" type="password" placeholder="Password" />
                <span className="icon is-small">
                  <i className="fa fa-lock"></i>
                </span>
              </p>
            </section>
            <footer className="modal-card-foot">
              <a className="button is-primary">Login</a>
              <button onClick={this.toggle} className="button">Cancel</button>
            </footer>
          </div>
        </div>
      </div>

    );
  }
}

export default Login;
