import React from "react";
import { Table, Button } from "react-bootstrap";
import { Pencil, Trash } from "react-bootstrap-icons";

export default function WorkstationTable({ items, setItems, totalPrice }) {
  function handleDelete(index) {
    const newItems = items.filter((item) => items.indexOf(item) !== index);

    setItems(newItems);
  }

  const table = (
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
                <td>€{item.price}</td>
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
                    onClick={() => handleDelete(index)}
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
        <p className="mt-4">Number of items: {items.length}</p>

        <p>Total price: €{totalPrice}</p>
      </div>
    </>
  );

  return (
    <div>
      {items && items.length > 0 ? (
        table
      ) : (
        <h3 className="table-placeholder">
          Add first item to display the table.
        </h3>
      )}
    </div>
  );
}
