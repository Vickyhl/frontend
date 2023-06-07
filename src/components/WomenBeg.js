import React, { useState, useEffect, useContext } from "react";
import { AccessibilityContext } from "./AccessibilityContext";
import AccessibilityIcon from "./AccessibilityIcon";

function WomenBeg() {
  const { fontSize, readableText, contrast } = useContext(AccessibilityContext);

  return (
    <>
      <AccessibilityIcon />
      <div className={`background ${contrast}`}></div>
      <div
        className={`tile-container ${fontSize} ${
          readableText ? "readableText" : ""
        } ${
          contrast === "high"
            ? "white"
            : contrast === "low"
            ? "darkgray"
            : "black"
        }`}
      >
        <h1 className="menAdv">A training program for a beginner exerciser</h1>
        <a href="/womenBegBackLeg" className="tileAdv backLeg">
          <p className={`tileText ${contrast}`}>1. Hind leg exercise</p>
        </a>

        <a href="/womenBegFrontLeg" className="tileAdv frontLeg">
          <p className={`tileText ${contrast}`}>2. Front leg exercise</p>
        </a>

        <a href="/womenBegBack" className="tileAdv Back">
          <p className={`tileText ${contrast}`}>3. Back exercise</p>
        </a>

        <a href="/womenBegFrontHand" className="tileAdv fronthand">
          <p className={`tileText ${contrast}`}>4. Forearm exercise</p>
        </a>

        <a href="/womenBegBackHand" className="tileAdv backhand">
          <p className={`tileText ${contrast}`}>5. Posterior hand exercise</p>
        </a>
      </div>
    </>
  );
}

export default WomenBeg;
