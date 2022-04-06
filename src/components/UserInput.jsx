import React, { useState, useEffect } from "react";
import { Form, Button } from "react-bootstrap";

export default function UserInput({ setItems }) {
  const [currentItem, setCurrentItem] = useState({
    name: "",
    details: "",
    category: "",
    price: 0,
  });

  function handleChange(event) {
    const propName = event.target.name;
    const propValue = event.target.value;

    setCurrentItem({
      ...currentItem,
      [propName]: propValue,
    });
  }

  useEffect(() => {
    console.log(currentItem);
  }, [currentItem]);

  return (
    <>
      <h4 className="mt-4">Add items to build your perfect workstation.</h4>

      <Form>
        <Form.Group
          className="my-3"
          name="name"
          controlId="formItemName"
          onChange={handleChange}
        >
          <Form.Control type="text" placeholder="Name" />

          {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
        </Form.Group>

        <Form.Group
          className="mb-3"
          name="details"
          controlId="formItemDetails"
          onChange={handleChange}
        >
          <Form.Control type="text" placeholder="Details" />
        </Form.Group>

        <Form.Select
          className="mb-3"
          name="category"
          aria-label="Item category selection"
          onChange={handleChange}
        >
          <option>Category</option>

          <option value="Computer components">Computer components</option>

          <option value="Peripherals">Peripherals</option>

          <option value="Software">Software</option>

          <option value="Other">Other</option>
        </Form.Select>

        <Form.Group
          className="mb-3"
          name="price"
          controlId="formItemPrice"
          onChange={handleChange}
        >
          <Form.Control type="text" placeholder="Price" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </>
  );
}
