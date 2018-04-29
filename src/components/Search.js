import React, { Component } from 'react';

const Search = (props) => {
  const handleSearchChange = (event) => {
    setTimeout(() => {
      props.updateGallery(document.querySelector('.searchInput').value);
    }, 1000);
  }
  return (
    <div className="search">
      <img className="searchIcon" src="http://chittagongit.com//images/search-icon-vector/search-icon-vector-10.jpg" />
      <input 
        id="inputBox"
        className="searchInput" 
        type="text" 
        placeholder="Search" 
        onChange={handleSearchChange}
      />
    </div>
  );
}

export default Search;