import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import "./css/snack.css";

function Snack() {
  const [snack, setSnack] = useState();
  const type = useParams().type;
  let snacks;
  console.log(type);

  useEffect(() => {
    const fetchSnacks = async () => {
      let res;
      if (type === 0) {
        res = await axios.post(
          `http://localhost:5000/api/menus/snackGenerator/${0}`
        );
      } else {
        res = await axios.post(
          `http://localhost:5000/api/menus/snackGenerator/${1}`
        );
      }
      // console.log(res.data.snacks);
      setSnack(res.data.snacks);
      // snack = res.data.snacks;
    };
    fetchSnacks();
  }, []);
  if (snack) {
    snacks = snack.split(",");
  }

  // console.log(snacks[0]);
  return snack ? (
    <div className="snack">
      <h2 className="snack">Your snack meal is:</h2>
      {snacks.map((item, i) => (
        <li>
          {item}
          <br />
        </li>
      ))}
    </div>
  ) : null;
}

export default Snack;
