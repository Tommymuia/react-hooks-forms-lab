import React from "react";
import ShoppingList from "./components/ShoppingList";

const testData = [
  { name: "Yogurt", category: "Dairy" },
  { name: "Cheese", category: "Dairy" },
  { name: "Apple", category: "Produce" },
  { name: "Cake", category: "Dessert" },
];

export default function App() {
  return (
    <div className="App">
      <h1>Shopping List</h1>
      <ShoppingList items={testData} />
    </div>
  );
}
