import React, { Component } from 'react';
import Photo from './Photo';
import Modal from './Modal';

class Gallery extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      currentPhoto: ''
    }
  }
  showModal(photo) {
    this.setState({
      showModal: !this.state.showModal,
      currentPhoto: photo
    });
  }
  closeModal() {
    this.setState({
      showModal: !this.state.showModal
    });
  }
  render() {
    if (!this.props.photoList.length) {
      return <div className="u-failedSearch"><h1>Loading...</h1></div>
    }
    if (this.props.photoList[0] === 1) {
      return <div className="u-failedSearch"><h1>We apologize, no photos match your query.<br />Please try another query.</h1></div>
    }
    return (
      <div id="Gallery-container">
        <div className="Grid Grid--fill Grid--withGutter">
          {(this.state.showModal) ? <Modal photo={this.state.currentPhoto} closeModal={this.closeModal.bind(this)} /> : null}
          {
            this.props.photoList.map((photo) => {
              let photoURL = `https://farm${photo.farm}.staticflickr.com/${photo.server}/${photo.id}_${photo.secret}.jpg`;
              return <Photo 
                key={photo.id} 
                url={photoURL} 
                title={photo.title}
                showModal={this.showModal.bind(this)}
              />;
            })
          }
        </div>
      </div>
    );
  }
}

export default Gallery;