import React, { useState, useEffect } from "react";
import RecipesMenuList from "./RecipesMenuList.js";
import axios from "axios";

const WatchRecipesMenu = () => {
  const [menus, setMenus] = useState([]);
  let userData = localStorage.getItem("user");
  let userID = JSON.parse(userData)._id;

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios.get(
        `http://localhost:5000/api/menus/fetchRecipesMenus/${userID}`
      );
      setMenus(result.data.identifers);
      //   identifers = result.data.identifers;
    };
    fetchData();
  }, [userID]);

  return <RecipesMenuList menus={menus} />;
};

export default WatchRecipesMenu;
