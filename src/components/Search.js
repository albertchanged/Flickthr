import React, { Component } from 'react';
import _ from 'lodash';

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleSearchChange = _.debounce(this.handleSearchChange, 650);
  }
  handleSearchChange(event) {
    this.props.updateGallery(document.querySelector('.Search-input').value);
  }
  render() {
    return (
      <div className="Search-container">
        <img className="Search-icon" src="http://chittagongit.com//images/search-icon-vector/search-icon-vector-10.jpg" />
        <input 
          className="Search-input" 
          type="text" 
          placeholder="Search" 
          onChange={this.handleSearchChange.bind(this)}
        />
      </div>
    );
  }
}

export default Search;