import React, { useState, useEffect, useContext } from "react";
import { AccessibilityContext } from "./AccessibilityContext";
import AccessibilityIcon from "./AccessibilityIcon";
import "./css/menAdv.css";

function MenAdv() {
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
        <h1 className="menAdv">A training program for an advanced exerciser</h1>

        <div className="tile-container">
          <a href="/menAdvChest" className="tileAdv chests">
            <p className={`tileText ${contrast}`}>1. Chest exercise</p>
          </a>

          <a href="/menAdvBackHand" className="tileAdv backhand">
            <p className={`tileText ${contrast}`}>2. Posterior hand exercise</p>
          </a>

          <a href="/menAdvShoulders" className="tileAdv Shoulders">
            <p className={`tileText ${contrast}`}>3. Shoulders exercise</p>
          </a>

          <a href="/menAdvBack" className="tileAdv Back">
            <p className={`tileText ${contrast}`}>4. Back exercise</p>
          </a>

          <a href="/menAdvFrontHand" className="tileAdv fronthand">
            <p className={`tileText ${contrast}`}>5. Forearm exercise</p>
          </a>

          <a href="/menAdvLegs" className="tileAdv leg">
            <p className={`tileText ${contrast}`}>6. Legs exercise</p>
          </a>

          <a href="/menAdvShoulders" className="tileAdv Shoulders">
            <p className={`tileText ${contrast}`}>7. Shoulders exercise</p>
          </a>
        </div>
      </div>
    </>
  );
}

export default MenAdv;
