import React, { Component } from 'react';

class Photo extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div id="pageBody">
        <img src={this.props.url} />
      </div>
    )
  }
}

export default Photo;