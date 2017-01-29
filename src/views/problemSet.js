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
    const { set } = this.props;
    console.log('current set: ', set);
    return (
      <div>
        <SearchProblemSets onChange={this.onChange} value={this.props.searchTerm} />
        <div className="columns">
          <div className="column is-6"><iframe className="pdf-frame" src={set.url || 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-introduction-to-algorithms-sma-5503-fall-2005/exams/prac_final_sol.pdf'} /></div>
          <div className="column is-6">comments</div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ searchTerm, set }) => ({ searchTerm, set });

export default connect(mapStateToProps, actions)(ProblemSet);
