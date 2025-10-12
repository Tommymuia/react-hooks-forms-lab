import React from "react";

function Item({ name, category }) {
  return (
    <li className="Item">
      {name} - <span className="category">{category}</span>
    </li>
  );
}

export default Item;
