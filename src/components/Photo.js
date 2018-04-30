import React, { Component } from 'react';
import Modal from './Modal';

const Photo = (props) => {
  const openModal = () => {
    props.showModal(props.url);
  }
  return (
    <div className="Photo-container">
      <img 
        src={props.url} 
        className="Photo-photoStyle"
        onClick={openModal}
      />   
    </div>
  );
}

export default Photo;