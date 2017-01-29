import React, { Component } from 'react';
import { browserHistory } from 'react-router';
import { connect } from 'react-redux';
import SearchProblemSets from '../components/searchProblemSets';
import * as actions from '../actions';

class Search extends Component {
  constructor(props) {
    super(props);

    this.onChange = this.onChange.bind(this);
  }

  componentDidMount() {
    this.props.login();
  }

  onChange(event) {
    const value = event.target.value;

    this.props.setSearchTerm(value);
    browserHistory.push('/searchResults');
  }

  render() {
    this.test = 'test';

    return (
      <div className="columns is-centered">
        <div className="column is-half search-container">
          <div className="logo-container">
            <img width="150" className="logo" src="../images/logo.jpg" />
          </div>
         <SearchProblemSets onChange={this.onChange} value={this.props.searchTerm} />
        </div>
      </div>
    );
  }
}

const mapStateToProps = ({ searchTerm }) => ({ searchTerm });

export default connect(mapStateToProps, actions)(Search);
