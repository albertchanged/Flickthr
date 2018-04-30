import React, { Component } from 'react';
import _ from 'lodash';

class Search extends Component {
  constructor(props) {
    super(props);
    this.handleSearchChange = _.debounce(this.handleSearchChange, 650);
  }
  handleSearchChange(event) {
    this.props.updateGallery(document.querySelector('.searchInput').value);
  }
  render() {
    return (
      <div className="search">
        <img className="searchIcon" src="http://chittagongit.com//images/search-icon-vector/search-icon-vector-10.jpg" />
        <input 
          id="inputBox"
          className="searchInput" 
          type="text" 
          placeholder="Search" 
          onChange={this.handleSearchChange.bind(this)}
        />
      </div>
    );
  }
}

export default Search;