import React, { Component } from 'react';
import Navbar from './navbar';

class Home extends Component {
  render() {
    this.test = '';

    return (
      <div>
        <Navbar />

        <section className="container">
          {this.props.children}
        </section>
      </div>
    );
  }
}

export default Home;
