import React from "react";
import ReactDom from "react-dom";

export default function Modal({ open, children, onClose }) {
  if (!open) return null;

  return ReactDom.createPortal(
    <>
      {/* Overlay background */}
      <div 
        className="fixed inset-0 bg-black/70 z-[1000]" 
        onClick={onClose} 
      />

      {/* Modal content box */}
      <div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white p-12 z-[1000] rounded-lg shadow-xl min-w-[300px]">
        <button 
          onClick={onClose} 
          className="mb-4 px-4 py-2 bg-red-500 hover:bg-red-600 text-white font-medium rounded transition-colors cursor-pointer"
        >
          Close Modal
        </button>
        <div>{children}</div>
      </div>
    </>,
    document.getElementById("portal")
  );
}

