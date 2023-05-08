import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchBar, setSearchBar] = useState("");
  const [itemsObj, setItemsObj] = useState([])
  
  function handleNewItem(newItemObj){
    setItemsObj(currentObj => [...items, newItemObj])
  }

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  function handleSearchBar(e) {
    setSearchBar(e.target.value)
  }

  const itemsToDisplay = itemsObj.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const finalItemsToDisplay = itemsToDisplay.filter((item) => {
    return item.name.includes(searchBar)
  })

  return (
    <div className="ShoppingList">
      <ItemForm handleNewItem={handleNewItem}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchBar}/>
      <ul className="Items" >
        {finalItemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
