import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchProblemSets from '../components/searchProblemSets';
import * as actions from '../actions';
import Vote from '../components/vote';
import MyPdfViewer from '../components/myPdfViewer'

class ProblemSet extends Component {
  constructor(props) {
    super(props);

    this.postComment = this.postComment.bind(this);
    this.renderComments = this.renderComments.bind(this);
  }

  componentDidMount() {
    const { set } = this.props;

    this.props.getComments(set);
  }

  postComment() {
    const comment = document.getElementById('post-comment').value;
    const { set, user } = this.props;
    console.log('set: ', set);
    console.log('user: ', user);
    this.props.postComment(user, set);
  }

  renderComments() {
    const { comments, user, set, comment } = this.props;

    if (!comments) {
      return undefined;
    }

    return comments.map((comment, key)=> {
      return (
        <article key={key} className="media">
          <figure className="media-left">
            <Vote user={user} comment={comment} set={set} />
          </figure>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>Barbara Middleton</strong>
                <br />
                {comment.text}
                <br />
                <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
              </p>
            </div>
          </div>
        </article>
      )
    });
  }

  getDiscussion() {
    return (
      <div>
        {this.renderComments()}
        <article className="media">
          <figure className="media-left">
            <p className="image is-64x64">
              <img src="https://scontent.fyhu1-1.fna.fbcdn.net/v/t1.0-9/15823396_10154129442740978_3333110081233978289_n.jpg?oh=ead5eddf742876d72f0a6ba2b6d812d5&oe=5913FC9A" />
            </p>
          </figure>
          <div className="media-content">
            <p className="control">
              <textarea id="post-comment" className="textarea" placeholder="Add a comment..."></textarea>
            </p>
            <p className="control">
              <button onClick={this.postComment} className="button">Post comment</button>
            </p>
          </div>
        </article>
      </div>
    );
  }

  render() {
    this.test = 'test';
    const { set } = this.props;
    const discussion = this.getDiscussion();
    console.log('COMMENTS: ', this.props.comments);
    return (
      <div>
        <h1 className="title">Problem Set</h1>
        <div className="columns">
          <div className="column is-6"><iframe className="pdf-frame" src={set.url} /></div>
          <div className="column is-6">{discussion}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ searchTerm, set, user, comments, comment }) => ({ searchTerm, set, user, comments, comment });

export default connect(mapStateToProps, actions)(ProblemSet);
