// Modal.js
import React from "react";

const Modal = ({ isOpen, onClose, children }) => {
  if (!isOpen) {
    return null;
  }

  const styles = {
    modalOverlay: {
      position: "fixed",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      backgroundColor: "rgba(0, 0, 0, 0.5)",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      zIndex: 10000,
    },
    modalContent: {
      backgroundColor: "#fff",
      borderRadius: "5px",
      padding: "20px",
    },
  };

  const handleOverlayClick = () => {
    onClose(); // Perform onClose action
  };

  const handleContentClick = (e) => {
    const tagName = e.target.tagName.toLowerCase();
    e.stopPropagation();

    if (
      !(
        tagName === "select" ||
        (tagName === "input" && e.target.type === "checkbox")
      )
    ) {
      onClose(); // Perform onClose action
    }
  };

  return (
    <div style={styles.modalOverlay} onClick={handleOverlayClick}>
      <div style={styles.modalContent} onClick={handleContentClick}>
        {children}
      </div>
    </div>
  );
};

export default Modal;
