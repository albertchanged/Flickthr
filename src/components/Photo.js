import React, { Component } from 'react';
import Modal from './Modal';

const Photo = (props) => {
  const openModal = () => {
    props.showModal(props.url);
  }
  return (
    <div className="photoContainer">
      <img 
        src={props.url} 
        className="photo"
        onClick={openModal}
      />   
    </div>
  );
}

export default Photo;