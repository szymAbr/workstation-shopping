import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

export default function UserInput({
  items,
  setItems,
  editMode,
  setEditMode,
  editedItem,
  categories,
  setCategories,
}) {
  const [currentItem, setCurrentItem] = useState({
    name: "",
    details: "",
    category: "",
    price: "",
  });

  function handleChange(event) {
    const propName = event.target.name;
    const propValue = event.target.value;

    setCurrentItem({
      ...currentItem,
      [propName]: propValue,
    });
  }

  function handleSubmit(event) {
    event.preventDefault();

    const values = Object.values(currentItem);
    const formInfo = document.getElementById("form-incomplete");

    if (values.some((value) => !value)) {
      formInfo.classList.remove("hidden");
    } else {
      formInfo.classList.add("hidden");

      const newItems = [...items];

      if (!editMode) {
        newItems.push(currentItem);
      } else {
        newItems.splice(editedItem, 1, currentItem);
        setEditMode(false);
      }

      setItems(newItems);

      setCurrentItem({
        name: "",
        details: "",
        category: "",
        price: "",
      });
    }
  }

  // add edit option: different h4, button Add -> Confirm/OK, highlight edited row
  return (
    <>
      <h4 className="my-4">{editMode ? "Edit item:" : "Add items:"}</h4>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="my-3" controlId="formItemName">
          <Form.Control
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={
              currentItem.name.charAt(0).toUpperCase() +
              currentItem.name.slice(1)
            }
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formItemDetails">
          <Form.Control
            type="text"
            name="details"
            placeholder="Details"
            onChange={handleChange}
            value={
              currentItem.details.charAt(0).toUpperCase() +
              currentItem.details.slice(1)
            }
          />
        </Form.Group>

        <Form.Select
          className="mb-3"
          name="category"
          aria-label="Item category selection"
          onChange={handleChange}
          value={
            currentItem.category.charAt(0).toUpperCase() +
            currentItem.category.slice(1)
          }
        >
          <option>Category</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </Form.Select>

        <Form.Group className="mb-3" controlId="formItemPrice">
          <Form.Control
            type="text"
            name="price"
            placeholder="Price [EUR]"
            onChange={handleChange}
            value={currentItem.price}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          {editMode ? "Confirm changes" : "Add item"}
        </Button>

        <p id="form-incomplete" className="mt-3 hidden">
          Form incomplete
        </p>
      </Form>
    </>
  );
}
