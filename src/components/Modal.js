import React from 'react';
import './Modal.css';

const Modal = ({ message, onCancel, onConfirm }) => {
  return (
    <div className="modal-overlay">
      <div className="modal">
        <p>{message}</p>
        <div className="modal-buttons">
          <button onClick={onCancel}>Cancel</button>
          <button onClick={onConfirm}>OK</button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
