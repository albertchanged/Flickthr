import React from 'react';

const Modal = (props) => {
  const closeModal = () => {
    props.closeModal();
  }
  return (
    <div className="modalBody" onClick={closeModal}>
      <div className="modalContent">
        <h1 
          onClick={closeModal}
          className="closeModal"
        >
          +
        </h1>
        <img 
          src={props.photo} 
          className="modalPhoto"
        />
      </div>
    </div>
  );
}

export default Modal;