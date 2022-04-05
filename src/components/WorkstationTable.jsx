import React from "react";
import { Table } from "react-bootstrap";

export default function WorkstationTable() {
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
          </tr>
        </thead>

        <tbody>
          <tr>
            <td>1</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>

          <tr>
            <td>2</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>

          <tr>
            <td>3</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
            <td>x</td>
          </tr>
        </tbody>
      </Table>

      <div>
        <p className="mt-4">Overall item quantity: </p>

        <p>Total price: </p>
      </div>
    </>
  );
}
