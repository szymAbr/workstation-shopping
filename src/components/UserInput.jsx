import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

export default function UserInput({ items, setItems }) {
  const [currentItem, setCurrentItem] = useState({
    name: "",
    details: "",
    category: "",
    price: "",
    // editMode: false,
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
      const newItems = [...items];

      formInfo.classList.add("hidden");

      newItems.push(currentItem);
      setItems(newItems);

      setCurrentItem({
        name: "",
        details: "",
        category: "",
        price: "",
        // editMode: false,
      });
    }
  }

  // add edit option: different h4, button Add -> Confirm/OK, highlight edited row
  return (
    <>
      <h4 className="my-4">Add items to build your perfect workstation.</h4>

      <Form onSubmit={handleSubmit}>
        <Form.Group className="my-3" controlId="formItemName">
          <Form.Control
            type="text"
            name="name"
            placeholder="Name"
            onChange={handleChange}
            value={currentItem.name}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formItemDetails">
          <Form.Control
            type="text"
            name="details"
            placeholder="Details"
            onChange={handleChange}
            value={currentItem.details}
          />
        </Form.Group>

        <Form.Select
          className="mb-3"
          name="category"
          aria-label="Item category selection"
          onChange={handleChange}
          value={currentItem.category}
        >
          <option>Category</option>
          <option value="Components">Components</option>
          <option value="Peripherals">Peripherals</option>
          <option value="Software">Software</option>
          <option value="Other">Other</option>
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
          Add
        </Button>

        <p id="form-incomplete" className="mt-3 hidden">
          Form incomplete
        </p>
      </Form>
    </>
  );
}
