import React from "react";
import { Form, Button } from "react-bootstrap";

export default function UserInput() {
  return (
    <>
      <h4 className="mt-4">Add items to build your perfect workstation.</h4>

      <Form>
        <Form.Group className="my-3" controlId="formItemName">
          <Form.Control type="text" placeholder="Name" />

          {/* <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text> */}
        </Form.Group>

        <Form.Group className="mb-3" controlId="formItemDetails">
          <Form.Control type="text" placeholder="Details" />
        </Form.Group>

        <Form.Select className="mb-3" aria-label="Item category selection">
          <option>Category</option>

          <option value="1">Computer components</option>

          <option value="2">Peripherals</option>

          <option value="3">Software</option>

          <option value="4">Other</option>
        </Form.Select>

        <Form.Group className="mb-3" controlId="formItemPrice">
          <Form.Control type="text" placeholder="Price" />
        </Form.Group>

        <Button variant="primary" type="submit">
          Add
        </Button>
      </Form>
    </>
  );
}
