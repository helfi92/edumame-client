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
    this.displayExams = this.displayExams.bind(this);
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
    const { exams, loader } = nextProps;

    if (exams.length && loader) {
      this.props.setLoading(false);
    }
  }

  displayExams() {
    const { loader, exams } = this.props;

    if (!exams.length && loader) {
      return <Loader />
    }

    if (!exams.length) {
      return undefined;
    }

    return exams.map((set, key) => {
      return (
        <div key={key} className="box">
          <article className="media">
            <div className="media-left vote-container">
              <Vote />
            </div>
            <div onClick={() => this.problemSetClicked(set)} className="media-content">
              <div className="content">
                <p>
                  <br />
                  {set}
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
    const examsDisplay = this.displayExams();
    const exams = this.props.exams;

    return (
      <div className="search-results-input">
        <SearchProblemSets onChange={this.onChange} value={this.props.searchTerm} />
        <div>{examsDisplay}</div>
      </div>
    );
  }
}

const mapStateToProps = ({ searchTerm, problemSets, loader, exams }) => ({ searchTerm, problemSets, loader, exams });

export default connect(mapStateToProps, actions)(SearchResults);
