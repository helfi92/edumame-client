import React, { Component } from 'react';

export default class SearchProblemSets extends Component {
  componentDidMount() {
    document.getElementById('search').focus();
  }

  render() {
    const { onChange, value } = this.props;

    return (
      <div className="control has-icon has-icon-right">
        <input id="search" onChange={onChange} value={value} className="input is-medium" type="text" placeholder="Search for exam papers or enter a topic" />
        <span className="icon is-medium">
          <i className="fa fa-search"></i>
        </span>
      </div>
    );
  }
}
