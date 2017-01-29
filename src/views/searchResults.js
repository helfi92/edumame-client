import React, { Component } from 'react';
import { connect } from 'react-redux';
import { browserHistory } from 'react-router';
import SearchProblemSets from '../components/searchProblemSets';
import * as actions from '../actions';
import Loader from '../components/loader';
import Vote from '../components/vote';

class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
    this.onSearch = this.onSearch.bind(this);
    this.displayProblemSets = this.displayProblemSets.bind(this);
    this.problemSetClicked = this.problemSetClicked.bind(this);

    this.state = {
      isRetrieving: false
    }
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

  problemSetClicked(set) {
    console.log('problem set clicked', set);
    this.props.currentProblemSet(set);
    browserHistory.push(`/problemSet`);
  }

  componentWillReceiveProps(nextProps) {
    const { problemSets, loader } = nextProps;

    if (problemSets && loader) {
      this.props.setLoading(false);
    }
  }

  displayProblemSets() {
    const { problemSets, loader } = this.props;

    if (!problemSets && loader) {
      return <Loader />
    }

    if (!problemSets) {
      return undefined;
    }

    return problemSets.map((set, key) => {
      return (
        <div key={key} className="box">
          <article className="media">
            <div className="media-left vote-container">
              <Vote />
            </div>
            <div onClick={() => this.problemSetClicked(set)} className="media-content">
              <div className="content">
                <p>
                  <strong>John Smith</strong> <small>@johnsmith</small> <small>31m</small>
                  <br />
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean efficitur sit amet massa fringilla egestas. Nullam condimentum luctus turpis.
                </p>
              </div>
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

const mapStateToProps = ({ searchTerm, problemSets, loader }) => ({ searchTerm, problemSets, loader });

export default connect(mapStateToProps, actions)(SearchResults);
