import React, { createContext, useState } from "react";

const AccessibilityContext = createContext();

const AccessibilityProvider = ({ children }) => {
  const [fontSize, setFontSize] = useState(1);
  const [readableText, setReadableText] = useState(false);
  const [contrast, setContrast] = useState(1);

  return (
    <AccessibilityContext.Provider
      value={{
        fontSize,
        setFontSize,
        readableText,
        setReadableText,
        contrast,
        setContrast,
      }}
    >
      {children}
    </AccessibilityContext.Provider>
  );
};

export { AccessibilityContext, AccessibilityProvider };
