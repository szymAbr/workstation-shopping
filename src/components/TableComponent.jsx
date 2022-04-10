import React from "react";
import { Table, Button } from "react-bootstrap";
import { Pencil, Trash } from "react-bootstrap-icons";

export default function TableComponent({
  items,
  sortDirection,
  handleEdit,
  handleDelete,
  totalPrice,
}) {
  return (
    <>
      {items && items.length > 0 ? (
        <div>
          <Table className="mt-4" striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th onClick={() => sortDirection("name")}>Name</th>
                <th onClick={() => sortDirection("details")}>Details</th>
                <th onClick={() => sortDirection("category")}>Category</th>
                <th onClick={() => sortDirection("price")}>Price</th>
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
                        onClick={() => handleEdit(index)}
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
        </div>
      ) : (
        <h3 className="table-placeholder">
          Add first item to display the table.
        </h3>
      )}
    </>
  );
}
