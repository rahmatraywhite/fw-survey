// Modal.jsx
import React from 'react';
import { FaEdit, FaTrash, FaSave } from 'react-icons/fa';

const Modal = ({ isOpen, onClose, onSave, children }) => {
    if (!isOpen) return null;

    return (
        <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center">
            <div className="bg-gray-800 bg-opacity-50 absolute w-full h-full"></div>
            <div className="bg-white w-[800px] h-[400px] p-4 rounded-md z-10">
                {children}
            </div>
        </div>
    );
};

export default Modal;
