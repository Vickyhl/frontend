import React, { useState, useEffect, useContext } from "react";
import { AccessibilityContext } from "./AccessibilityContext";
import AccessibilityIcon from "./AccessibilityIcon";
import "./css/articles.css";

function Articles() {
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
        <h1 className="menAdv">Articles to enrich your knowledge</h1>
        <a
          href="https://www.verywellfit.com/why-you-need-nutrition-and-fitness-3121363"
          className="tileAdv art1"
        >
          <p className={`recipesText ${contrast}`}>
            Nutrition's Role in Physical Fitness: Why You Need to Consider Both
          </p>
        </a>

        <a
          href="https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6682932/"
          className="tileAdv art2"
        >
          <p className={`recipesText ${contrast}`}>
            Integrated Role of Nutrition and Physical Activity for Lifelong
            Health
          </p>
        </a>

        <a
          href="https://diatribe.org/diet-and-exercise"
          className="tileAdv art3"
        >
          <p className={`tileText ${contrast}`}>Diet and Exercise</p>
        </a>

        <a
          href="https://www.nhs.uk/live-well/healthy-weight/managing-your-weight/12-tips-to-help-you-lose-weight/"
          className="tileAdv art4"
        >
          <p className={`tileText ${contrast}`}>
            12 tips to help you lose weight
          </p>
        </a>

        <a
          href="https://www.health.harvard.edu/topics/nutrition"
          className="tileAdv art5"
        >
          <p className={`tileText ${contrast}`}>Nutrition</p>
        </a>

        <a
          href="https://infinitylearn.com/surge/english/article/article-on-health-and-fitness/"
          className="tileAdv art6"
        >
          <p className={`recipesText ${contrast}`}>
            Article on Health and Fitness – Long and short articles for students
          </p>
        </a>

        <a
          href="https://www.stileschiropracticchicago.com/health-articles/why-nutrition-is-the-most-important-part-of-fitness"
          className="tileAdv art7"
        >
          <p className={`recipesText ${contrast}`}>
            Why Nutrition is the Most Important Part of Fitness
          </p>
        </a>

        <a
          href="https://www.sleepfoundation.org/physical-health/diet-exercise-sleep"
          className="tileAdv art8"
        >
          <p className={`tileText ${contrast}`}>Diet, Exercise, and Sleep</p>
        </a>
      </div>
    </>
  );
}

export default Articles;
