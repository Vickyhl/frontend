import React, { useState, useEffect, useContext } from "react";
import { AccessibilityContext } from "./AccessibilityContext";
import AccessibilityIcon from "./AccessibilityIcon";

function MenBeg() {
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
        <a href="/legsMenBegExercise" className="tileAdv leg">
          <p className={`tileText ${contrast}`}>1. Legs exercise</p>
        </a>

        <a href="/chestMenBegExercise" className="tileAdv chests">
          <p className={`tileText ${contrast}`}>2. Chest exercise</p>
        </a>

        <a href="/backHandMenBegExercise" className="tileAdv backhand">
          <p className={`tileText ${contrast}`}>3. Posterior hand exercise</p>
        </a>

        <a href="/backMenBegExercise" className="tileAdv Back">
          <p className={`tileText ${contrast}`}>4. Back exercise</p>
        </a>

        <a href="/shouldersMenBegExercise" className="tileAdv Shoulders">
          <p className={`tileText ${contrast}`}>5. Shoulders exercise</p>
        </a>

        <a href="/frontHandMenBegExercise" className="tileAdv fronthand">
          <p className={`tileText ${contrast}`}>6. Forearm exercise</p>
        </a>
      </div>
    </>
  );
}

export default MenBeg;
