// src/components/Modal.js
import React from 'react';
import './Modal.css';

const Modal = ({ image, onClose }) => {
  const handleBackgroundClick = (e) => {
    if (e.target.className === 'modal-overlay') {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleBackgroundClick}>
      <div className="modal-content">
        <span className="close-btn" onClick={onClose}>&times;</span>
        <img src={image.src} alt={image.alt} className="modal-image" />
        <p>{image.alt}</p>
      </div>
    </div>
  );
};

export default Modal;