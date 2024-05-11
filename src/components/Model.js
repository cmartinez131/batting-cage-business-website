import React from 'react';
import './Modal.css';

const Modal = ({ isOpen, close, children }) => {
    if (!isOpen) return null;

    return (
        <div className="modal-overlay">
            <div className="modal-content">
                {children}
                <button className="modal-close" onClick={close}>Close</button>
            </div>
        </div>
    );
};

export default Modal;
