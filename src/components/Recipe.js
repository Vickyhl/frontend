import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./css/Recipe.css";
import axios from "axios";

const Recipe = () => {
  const rid = useParams().rid;
  const [recipe, setRecipe] = useState();
  let title;
  let cleanText;
  let ingredientsList;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await axios.get(
          `http://localhost:5000/api/menus/fetchRecipeById/${rid}`
        );
        setRecipe(data.data.recipe);
      } catch (err) {}
    };
    fetchData();
  }, [recipe]);

  const handleCookOpt = async () => {
    // console.log(recipe.rid);
    window.location.assign(`http://localhost:3000/cooking/${recipe.rid}`);
  };

  if (recipe) {
    title = recipe.title;
    ingredientsList = recipe.ingredients.map((ingredient, index) => {
      return <li key={index}> {ingredient},&nbsp;</li>;
    });
    cleanText = recipe.instructions.replace(/<\/?[^>]+(>|$)/g, "");
  }

  return recipe ? (
    <>
      <h2 className="recipeHeader">{title}</h2>
      <ul className="rec-menu-list">
        <div className="rec-menu-item">
          <p className="rec-prep">
            <strong>Prep time: </strong>
            {recipe.prepTime}
            <br />
            <strong>serving: </strong>
            {recipe.serving}
            <br />
          </p>
          <div>
            <strong>ingredients: </strong>
            <li>{ingredientsList}</li>
          </div>
          <br />
          <p className="rec-instructions">
            <br />
            <strong>
              {" "}
              <br />
              instructions:{" "}
            </strong>
            {cleanText}
          </p>
        </div>
      </ul>
      <div className="btn-container-receipt" onClick={handleCookOpt}>
        <button type="submit" className="btn">
          Let's cook!{" "}
        </button>
      </div>
    </>
  ) : null;
};

export default Recipe;
