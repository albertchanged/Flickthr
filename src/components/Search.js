import React, { Component } from 'react';

class Search extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="search">
        <img className="searchIcon" src="http://chittagongit.com//images/search-icon-vector/search-icon-vector-10.jpg" />
        <input className="searchInput" type="text" placeholder="Search" />
      </div>
    )
  }
}

export default Search;