import React, { useContext } from "react";
import { AccessibilityContext } from "./AccessibilityContext";

const withAccessibilityStyles = (WrappedComponent) => {
  return (props) => {
    const { fontSize, greyscale, contrast } = useContext(AccessibilityContext);

    const styles = {
      fontSize: `${fontSize}rem`,
      filter: `grayscale(${greyscale ? 1 : 0}) contrast(${contrast})`,
    };

    return (
      <div style={styles}>
        <WrappedComponent {...props} />
      </div>
    );
  };
};

export default withAccessibilityStyles;
