import React, { useState, useEffect, useContext } from "react";
import { AccessibilityContext } from "./AccessibilityContext";
import AccessibilityIcon from "./AccessibilityIcon";
import moment from "moment";
import axios from "axios";
import "./css/tile.css";

const RecipesMenuList = (props) => {
  const { fontSize, readableText, contrast } = useContext(AccessibilityContext);
  const userData = JSON.parse(localStorage.getItem("user"));
  const userID = userData?._id;
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get(
          `http://localhost:5000/api/menus/fetchRecipesMenus/${userID}`
        );
        // console.log(result.data.result);
        setMenus(result.data.result);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, [menus]);

  const handleMenuSelect = async (index) => {
    window.location.assign(`http://localhost:3000/recipesMenu/${index + 1}`);
  };

  return (
    <>
      <AccessibilityIcon />
      <div className={`background ${contrast}`}></div>
      <div
        className={`recipesList ${fontSize} ${
          readableText ? "readableText" : ""
        } ${
          contrast === "high"
            ? "white"
            : contrast === "low"
            ? "darkgray"
            : "black"
        }`}
      >
        <h1 className="recipesHeader">List of recipe-based menus</h1>
        <div className="tile-container">
          {menus &&
            menus.length > 0 &&
            menus.map((menu, i) => (
              <div
                className="tile"
                key={i}
                data-index={i}
                onClick={() => handleMenuSelect(i)}
              >
                <div className="tile-content">
                  <h3>Menu number {i + 1}</h3>
                  <p>{moment(menu.substring(0, 10)).format("DD/MM/YYYY")}</p>
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default RecipesMenuList;
