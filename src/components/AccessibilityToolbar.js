import React, { useContext, useState } from "react";
import { AccessibilityContext } from "./AccessibilityContext";
import "./css/AccessibilityToolbar.css";

const AccessibilityToolbar = () => {
  const {
    fontSize,
    setFontSize,
    readableText,
    setReadableText,
    contrast,
    setContrast,
  } = useContext(AccessibilityContext);

  const [isToolbarVisible, setIsToolbarVisible] = useState(true);

  const handleFontSizeChange = (e) => {
    setFontSize(e.target.value);
  };

  const handleContrastChange = (e) => {
    setContrast(e.target.value);
  };

  const handleReadableTextChange = (e) => {
    setReadableText(e.target.checked);
  };

  const handleApplySettings = () => {
    setIsToolbarVisible(false);
  };

  return (
    <>
      {isToolbarVisible && (
        <div className="accessibility-toolbar">
          <h2 className="accessibility-toolbar__title">
            Accessibility Options
          </h2>
          <div className="accessibility-toolbar__options">
            <div className="accessibility-toolbar__option">
              <label htmlFor="font-size">Font size:</label>
              <select
                id="font-size"
                value={fontSize}
                onChange={handleFontSizeChange}
              >
                <option value=""></option>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
              </select>
            </div>
            <div className="accessibility-toolbar__option">
              <label htmlFor="contrast">Contrast:</label>
              <select
                id="contrast"
                value={contrast}
                onChange={handleContrastChange}
              >
                <option value="">Default</option>
                <option value="high">High contrast</option>
                <option value="low">Low contrast</option>
              </select>
            </div>
            {/* Readable Text */}
            <div className="accessibility-toolbar__option">
              <input
                type="checkbox"
                id="readable-text"
                checked={readableText}
                onChange={handleReadableTextChange}
              />
              <label htmlFor="readable-text">Readable Text</label>
            </div>
            {/* <div className="accessibility-toolbar__option">
              <input
                type="checkbox"
                id="greyscale"
                checked={greyscale}
                onChange={handleGreyscaleChange}
              />
              <label htmlFor="greyscale">Greyscale</label>
            </div> */}
          </div>
          <button
            className="accessibility-toolbar__button"
            onClick={handleApplySettings}
          >
            Apply settings
          </button>
        </div>
      )}
    </>
  );
};

export default AccessibilityToolbar;
