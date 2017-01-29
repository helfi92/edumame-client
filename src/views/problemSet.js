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

  render() {
    this.test = 'test';
    console.log('current set: ', this.props.set);
    return (
      <div>
        <SearchProblemSets onChange={this.onChange} value={this.props.searchTerm} />
        <MyPdfViewer />
      </div>
    );
  }
}

const mapStateToProps = ({ searchTerm, set }) => ({ searchTerm, set });

export default connect(mapStateToProps, actions)(ProblemSet);
