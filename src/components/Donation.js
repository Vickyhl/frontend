import React, { useState, useEffect, useContext } from "react";
import { AccessibilityContext } from "./AccessibilityContext";
import AccessibilityIcon from "./AccessibilityIcon";
import IDA from "./images/IDA.jpg";
import "./css/donation.css";

function Donation() {
  const { fontSize, readableText, contrast } = useContext(AccessibilityContext);

  return (
    <>
      <AccessibilityIcon />
      <div className={`background ${contrast}`}></div>
      <div
        className={`donation ${fontSize} ${
          readableText ? "readableText" : ""
        } ${
          contrast === "high"
            ? "white"
            : contrast === "low"
            ? "darkgray"
            : "black"
        }`}
      >
        <h1 className="donationHeader">Our donation</h1>
        <p>
          As the administrators of the site, we have decided to donate 10% of
          the income to the Israeli Diabetes Association (IAD). A little about
          the association:
          <p>
            Israeli Diabetes Association is an organization that deals with
            decision-making in the Ministry of Health, the health insurance
            funds, the National Insurance, and the IDF.
          </p>
          <p>
            To this day, they have accomplished many achievements and continue
            to do so.
          </p>
          <p>
            The association derives its strength from the number of members who
            join it.
          </p>
          <p>
            Only a strong association, which caters to the entire population
            with diabetes in Israel, will be able to achieve more: expensive
            medicines, products adapted to needs, better medical care, personal
            training, and more.
          </p>
        </p>

        <p>
          Much like other diseases, diabetes can be controlled. Proper
          nutrition, close and personal monitoring, physical activity, and
          appropriate medication can prevent complications and enable quality of
          life.
        </p>
        <img
          className="donationImg"
          src={IDA}
          alt="israel diabetes association logo"
        ></img>
      </div>
    </>
  );
}

export default Donation;
