import React, { Component } from 'react';
import { connect } from 'react-redux'
import * as actions from '../actions';

class Vote extends Component {
  constructor(props) {
    super(props);

    this.onVoteUp = this.onVoteUp.bind(this);
    this.onVoteDown = this.onVoteDown.bind(this);
  }

  onVoteUp() {
    const { comment, user, set, rateComment } = this.props;

    rateComment(user, set, comment);
  }

  onVoteDown() {
    const { comment, user, set } = this.props;
  }

  render() {
    this.test = '';
    const { comment } = this.props;

    return (
      <div className="vote-container">
        <div onClick={this.onVoteUp} className="vote vote-up">
          <i className="fa fa-angle-up"></i>
        </div>
        <div>
          <span>{comment ? comment.upvotes.length : 0}</span>
        </div>
        <div onClick={this.onVoteDown} className="vote vote-down">
          <i className="fa fa-angle-down"></i>
        </div>
      </div>
    );
  }
}

export default connect(null, actions)(Vote);
