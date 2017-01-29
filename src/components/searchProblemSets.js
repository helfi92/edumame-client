import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';

class SearchProblemSets extends Component {
  constructor(props) {
    super(props);

    this.handleOnKeyPress = this.handleOnKeyPress.bind(this);
  }

  componentDidMount() {
    document.getElementById('search').focus();
  }

  handleOnKeyPress(event) {
    if(event.key === 'Enter') {
      console.log('ENTER!');
      this.props.setLoading(true);
      this.props.getProblemSets();
    }
  }

  render() {
    const { value, onChange} = this.props;

    return (
      <div className="control has-icon has-icon-right">
        <input id="search" onChange={onChange} onKeyPress={this.handleOnKeyPress} value={value} className="input is-medium" type="text" placeholder="Search for exam papers or enter a topic" />
        <span className="icon is-medium">
          <i className="fa fa-search"></i>
        </span>
      </div>
    );
  }
}

export default connect(null, actions)(SearchProblemSets);
