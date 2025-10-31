import React from "react";
import ShoppingList from "./ShoppingList"; // ✅ FIXED IMPORT
import { v4 as uuid } from "uuid";

const initialItems = [
  { id: uuid(), name: "Lettuce", category: "Produce" },
  { id: uuid(), name: "Yogurt", category: "Dairy" },
  { id: uuid(), name: "Swiss Cheese", category: "Dairy" },
  { id: uuid(), name: "String Cheese", category: "Dairy" },
];

function App() {
  return (
    <div className="App">
      <h1>Shopping List</h1>
      <ShoppingList items={initialItems} />
    </div>
  );
}

export default App;
