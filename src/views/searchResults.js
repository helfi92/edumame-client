import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchProblemSets from '../components/searchProblemSets';
import * as actions from '../actions';

class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.displayProblemSets = this.displayProblemSets.bind(this);
  }

  onChange(event) {
    console.log('event: ', event);
    this.props.setSearchTerm(event.target.value);
  }

  onSearch() {
    this.props.getProblemSets();
  }

  voteUp() {
    console.log('vote up');
  }

  voteDown() {
    console.log('vote down');
  }

  displayProblemSets() {
    const { problemSets } = this.props;

    if (!problemSets) {
      return <div>None</div>
    }

    return problemSets.map((set, key) => {
      return (
        <div key={key} className="box">
          <article className="media">
            <div className="media-left rating-container">
              <div>
                <div onClick={this.voteUp} className="vote up">
                  <i className="fa fa-angle-up"></i>
                </div>
                <div>
                  <span>4</span>
                </div>
                <div onClick={this.voteDown}>
                  <i className="fa fa-angle-down"></i>
                </div>
              </div>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                  <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                </p>
              </div>
              <nav className="level">
                <div className="level-left">
                  <a className="level-item">
                    <span className="icon is-small"><i className="fa fa-reply"></i></span>
                  </a>
                  <a className="level-item">
                    <span className="icon is-small"><i className="fa fa-retweet"></i></span>
                  </a>
                  <a className="level-item">
                    <span className="icon is-small"><i className="fa fa-heart"></i></span>
                  </a>
                </div>
              </nav>
            </div>
          </article>
        </div>
      );
    })
  }

  render() {
    this.test = 'test';
    const problemSets = this.displayProblemSets();

    return (
      <div className="search-results-input">
        <SearchProblemSets onChange={this.onChange} value={this.props.searchTerm} />
        <div>{problemSets}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ searchTerm, problemSets }) => ({ searchTerm, problemSets });

export default connect(mapStateToProps, actions)(SearchResults);
