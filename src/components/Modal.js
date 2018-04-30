import React from 'react';

const Modal = (props) => {
  const closeModal = () => {
    props.closeModal();
  }
  return (
    <div className="Modal-container" onClick={closeModal}>
      <div className="Modal-bodyContent">
        <h1 
          onClick={closeModal}
          className="Modal-closeButton"
        >
          +
        </h1>
        <img 
          src={props.photo} 
          className="Modal-photoStyle"
        />
      </div>
    </div>
  );
}

export default Modal;