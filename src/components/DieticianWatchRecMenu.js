import { useParams } from "react-router-dom";
import React, { useState, useEffect, useContext } from "react";
import { AccessibilityContext } from "./AccessibilityContext";
import AccessibilityIcon from "./AccessibilityIcon";
import axios from "axios";
import "./css/RecipesMenu.css";

function DieticianWatchRecMenu() {
  const { fontSize, readableText, contrast } = useContext(AccessibilityContext);
  const [menu, setMenu] = useState();
  const mid = useParams().mid;
  console.log(mid);
  const [imgUrl1, setImgUrl1] = useState(null);
  const [imgUrl2, setImgUrl2] = useState(null);
  const [imgUrl3, setImgUrl3] = useState(null);
  let tileStyle;
  let tileStyle2;
  let tileStyle3;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(
          `http://localhost:5000/api/dietician/${mid}`
        );
        setMenu(data.data.menu);
        setImgUrl1(menu.recipes[0].imgURL);
        setImgUrl2(menu.recipes[1].imgURL);
        setImgUrl3(menu.recipes[2].imgURL);
      } catch (err) {}
    };
    fetchData();
  }, [menu, imgUrl1, imgUrl2, imgUrl3]);

  if (imgUrl1) {
    tileStyle = {
      backgroundImage: `url(${imgUrl1})`,
    };
  }
  tileStyle2 = {
    backgroundImage: `url(${imgUrl2})`,
  };
  tileStyle3 = {
    backgroundImage: `url(${imgUrl3})`,
  };

  return menu ? (
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
        <h1 className="mealsHeader">Recipes menu</h1>
        <a
          href={`http://localhost:3000/cooking/${menu.recipes[0].rid}`}
          className="tileRecipes"
          style={tileStyle}
        >
          <h2 className={`${contrast} ${fontSize}`}>Breakfast</h2>
          <p className={`recipesText ${contrast} ${fontSize}`}>
            {menu.recipes[0].title}
          </p>
        </a>

        <a
          href={`http://localhost:3000/watchSnack/${0}`}
          className="tileRecipes"
        >
          <h2 className={`${contrast} ${fontSize}`}>Snack 1</h2>
          <p className={`recipesText ${contrast} ${fontSize}`}></p>
        </a>

        <a
          href={`http://localhost:3000/cooking/${menu.recipes[1].rid}`}
          className="tileRecipes"
          style={tileStyle2}
        >
          <h2 className={`${contrast} ${fontSize}`}>Lunch</h2>
          <p className={`recipesText ${contrast} ${fontSize}`}>
            {menu.recipes[1].title}
          </p>
        </a>

        <a href={`http://localhost:3000/watchSnack/${1}`} class="tileRecipes">
          <h2 className={`${contrast} ${fontSize}`}>Snack 2</h2>
          <p className={`recipesText ${contrast} ${fontSize}`}></p>
        </a>

        <a
          href={`http://localhost:3000/cooking/${menu.recipes[2].rid}`}
          className="tileRecipes"
          style={tileStyle3}
        >
          <h2 className={`${contrast} ${fontSize}`}>Dinner</h2>
          <p className={`recipesText ${contrast} ${fontSize}`}>
            {menu.recipes[2].title}
          </p>
        </a>
      </div>
    </>
  ) : null;
}

export default DieticianWatchRecMenu;
