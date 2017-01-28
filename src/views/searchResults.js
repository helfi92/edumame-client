import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchProblemSets from '../components/searchProblemSets';
import * as actions from '../actions';

class SearchResults extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  onChange(event) {
    this.props.setSearchTerm(event.target.value);
  }

  render() {
    this.test = 'test';

    return (
      <div className="search-results-input">
        <SearchProblemSets onChange={this.onChange} value={this.props.searchTerm} />
      </div>
    );
  }
}

const mapStateToProps = ({ searchTerm }) => ({ searchTerm });

export default connect(mapStateToProps, actions)(SearchResults);
