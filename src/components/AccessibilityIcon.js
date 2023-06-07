import accessibilityIcon from "./images/accessibility-icon.png";
import React, { useState } from "react";
import Modal from "./Modal";
import AccessibilityToolbar from "./AccessibilityToolbar";

const AccessibilityIcon = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const styles = {
    icon: {
      position: "fixed",
      zIndex: 9999,
      bottom: "100px",
      width: "50px",
      height: "50px",
      cursor: "pointer",
    },
  };

  const handleClick = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <img
        src={accessibilityIcon}
        alt="Accessibility"
        style={styles.icon}
        onClick={handleClick}
      />
      {isModalOpen && (
        <Modal isOpen={isModalOpen} onClose={handleClick}>
          <AccessibilityToolbar />
        </Modal>
      )}
    </>
  );
};

export default AccessibilityIcon;
