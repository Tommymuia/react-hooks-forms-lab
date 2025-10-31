import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {
  const [search, setSearch] = useState("");
  const [itemList, setItemList] = useState(items || []);

  // Filter items based on search term
  const itemsToDisplay = itemList.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  function handleSearchChange(e) {
    setSearch(e.target.value);
  }

  function handleItemFormSubmit(newItem) {
    setItemList([...itemList, newItem]);
  }

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleItemFormSubmit} />
      <Filter search={search} onSearchChange={handleSearchChange} />

      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <li key={item.id} className="Item">
            <span>{item.name}</span> <span>{item.category}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
