import React from "react";

/**
 * Modal Component
 * Reusable modal dialog for forms and content
 * 
 * @param {boolean} isOpen - Controls modal visibility
 * @param {function} onClose - Callback when modal closes
 * @param {string} title - Modal header title
 * @param {React.ReactNode} children - Modal content
 * @param {string} size - Modal size: 'small', 'medium', 'large'
 */
function Modal({ isOpen, onClose, title, children, size = "medium" }) {
  if (!isOpen) return null;

  const sizeMap = {
    small: { maxWidth: "300px" },
    medium: { maxWidth: "500px" },
    large: { maxWidth: "700px" }
  };

  return (
    <div className="modal show">
      <div className="modal-content" style={sizeMap[size]}>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "20px" }}>
          <div className="modal-header">{title}</div>
          <button 
            onClick={onClose}
            style={{
              background: "none",
              border: "none",
              fontSize: "24px",
              cursor: "pointer",
              color: "#7f8c8d"
            }}
          >
            ×
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}

export default Modal;
