import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchProblemSets from '../components/searchProblemSets';
import * as actions from '../actions';
import MyPdfViewer from '../components/myPdfViewer'

class ProblemSet extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    const value = event.target.value;

    this.props.setSearchTerm(value);
  }

  getDiscussion() {
    return (
      <div>
        <article className="media">
          <figure className="media-left">
            <p className="image is-64x64">
              <img src="http://bulma.io/images/placeholders/128x128.png" />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>Barbara Middleton</strong>
                <br />
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis porta eros lacus, nec ultricies elit blandit non. Suspendisse pellentesque mauris sit amet dolor blandit rutrum. Nunc in tempus turpis.
                  <br />
                    <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
              </p>
            </div>
          </div>
        </article>
        <article className="media">
          <figure className="media-left">
            <p className="image is-64x64">
              <img src="http://bulma.io/images/placeholders/128x128.png" />
            </p>
          </figure>
          <div className="media-content">
            <div className="content">
              <p>
                <strong>Hassan Ali</strong>
                <br />
                Yeah makes sense, I agree
                <br />
                <small><a>Like</a> · <a>Reply</a> · 3 hrs</small>
              </p>
            </div>
          </div>
        </article>
        <article className="media">
          <figure className="media-left">
            <p className="image is-64x64">
              <img src="http://bulma.io/images/placeholders/128x128.png" />
            </p>
          </figure>
          <div className="media-content">
            <p className="control">
              <textarea className="textarea" placeholder="Add a comment..."></textarea>
            </p>
            <p className="control">
              <button className="button">Post comment</button>
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
    console.log('current set: ', set);
    return (
      <div>
        <SearchProblemSets onChange={this.onChange} value={this.props.searchTerm} />
        <div className="columns">
          <div className="column is-6"><iframe className="pdf-frame" src={set.url || 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-introduction-to-algorithms-sma-5503-fall-2005/exams/prac_final_sol.pdf'} /></div>
          <div className="column is-6">{discussion}</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ searchTerm, set }) => ({ searchTerm, set });

export default connect(mapStateToProps, actions)(ProblemSet);
