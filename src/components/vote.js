import React, { Component } from 'react';

class Vote extends Component {
  render() {
    this.test = '';
    const onVoteUp = () => {
      console.log('vote up');
    };

    const onVoteDown = () => {
      console.log('vote down');
    };

    return (
      <div className="vote-container">
        <div onClick={this.onVoteUp} className="vote vote-up">
          <i className="fa fa-angle-up"></i>
        </div>
        <div>
          <span>4</span>
        </div>
        <div onClick={this.onVoteDown} className="vote vote-down">
          <i className="fa fa-angle-down"></i>
        </div>
      </div>
    );
  }
}

export default Vote;
