import React, { useState, useContext } from "react";
import AccessibilityIcon from "./AccessibilityIcon";
import { AccessibilityContext } from "./AccessibilityContext";
import "./css/city.css";

function CityChoice() {
  const { fontSize, readableText, contrast } = useContext(AccessibilityContext);
  const [city, setCity] = useState("");
  const [country, setCountry] = useState("");

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    window.location.assign(`http://localhost:3000/gymMaps/${country}/${city}`);
  };

  return (
    <>
      <AccessibilityIcon />
      <div className={`background ${contrast}`}></div>
      <div
        className={`city ${fontSize} ${readableText ? "readableText" : ""} ${
          contrast === "high"
            ? "white"
            : contrast === "low"
            ? "darkgray"
            : "black"
        }`}
      >
        <h2>Enter your country and city to explore gyms around you:</h2>
        <label htmlFor="countries">Select a country:</label>
        <input
          className="cityInput"
          type="text"
          id="country-input"
          value={country}
          onChange={handleCountryChange}
        />
        <label htmlFor="cities">Select a city:</label>
        <input
          className="cityInput"
          type="text"
          id="city-input"
          value={city}
          onChange={handleCityChange}
        />
        <div className="btn-container">
          <button aria-label="Submit" className="btn" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      </div>
    </>
  );
}

export default CityChoice;
