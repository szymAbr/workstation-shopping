import React from "react";
import { Table, Button } from "react-bootstrap";
import { Pencil, Trash } from "react-bootstrap-icons";

export default function WorkstationTable({ items, setItems }) {
  return (
    <>
      <Table className="mt-4" striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Details</th>
            <th>Category</th>
            <th>Price</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {items.map((item, index) => {
            return (
              <tr key={index + item.details}>
                <td>{index + 1}</td>
                <td>{item.name}</td>
                <td>{item.details}</td>
                <td>{item.category}</td>
                <td>{item.price}</td>
                <td>
                  <Button
                    variant="warning"
                    className="btn-sm"
                    // onClick={handleEdit}
                  >
                    <Pencil />
                  </Button>
                  &nbsp;
                  <Button
                    variant="danger"
                    className="btn-sm"
                    // onClick={() => handleClick()}
                  >
                    <Trash />
                  </Button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>

      <div>
        <p className="mt-4">Overall item quantity: </p>

        <p>Total price: </p>
      </div>
    </>
  );
}
