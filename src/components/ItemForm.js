import React, {useState} from "react";
import { v4 as uuid } from "uuid";

function ItemForm({handleNewItem}) {
  const [addNew, setAddNew] = useState("")
  const [selectNewCategory, setselectNewCategory] = useState('Produce')

  const handleNew = (e) => {
    e.preventDefault()
    setAddNew(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const newItem = {id:uuid(), name:addNew, category:selectNewCategory}
    handleNewItem(newItem)
  }

  return (
    <form className="NewItem" onSubmit={handleSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNew}/>
      </label>

      <label onChange={(e) => setselectNewCategory(e.target.value)}>
        Category:
        <select name="category">
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
