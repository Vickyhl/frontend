import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function Nutrients() {
  const rid = useParams().rid;
  const rName = useParams().rName;
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await axios.get(
        `http://localhost:5000/api/recipes/fetchNutrients/${rid}`
      );
      setItems(data.data.items);
    };
    fetchData();
  }, []);

  console.log(rName);

  return items ? (
    <>
      <h1 className="menAdv">Nutritional values of {rName}</h1>
      <table>
        <thead>
          <tr>
            <th>Title</th>
            <th>Amount</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.amount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  ) : null;
}

export default Nutrients;
