import React from "react";
import { Table, Button, Dropdown } from "react-bootstrap";
import { Pencil, Trash, Filter } from "react-bootstrap-icons";

export default function TableComponent({
  items,
  sortDirection,
  sortConfig,
  handleEdit,
  handleDelete,
  totalPrice,
  categories,
  categoryFilter,
  setCategoryFilter,
  availableCategories,
}) {
  function getClassName(name) {
    if (!sortConfig.direction) {
      return;
    }
    return sortConfig.field === name ? sortConfig.direction : undefined;
  }

  return (
    <>
      {items && items.length > 0 ? (
        <div>
          <Table className="mt-4" striped bordered hover variant="dark">
            <thead>
              <tr>
                <th>#</th>
                <th
                  className={getClassName("name")}
                  onClick={() => sortDirection("name")}
                >
                  Name{" "}
                </th>
                <th
                  className={getClassName("details")}
                  onClick={() => sortDirection("details")}
                >
                  Details
                </th>
                <th
                  id="thead-category"
                  className={getClassName("category")}
                  onClick={() => sortDirection("category")}
                >
                  Category
                </th>
                <th
                  className={getClassName("price")}
                  onClick={() => sortDirection("price")}
                >
                  Price
                </th>
                <th>
                  <Dropdown>
                    <Dropdown.Toggle
                      variant="secondary"
                      size="sm"
                      id="dropdown-basic"
                    >
                      <Filter className="filter-icon" />
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                      <Dropdown.Item href="#/action-1">
                        Filter by category
                      </Dropdown.Item>
                      <Dropdown.Divider />

                      {availableCategories.map((category) => (
                        <Dropdown.Item
                          key={category}
                          onClick={() => setCategoryFilter(category)}
                        >
                          {category}
                        </Dropdown.Item>
                      ))}

                      <Dropdown.Item onClick={() => setCategoryFilter("")}>
                        Clear filter
                      </Dropdown.Item>
                    </Dropdown.Menu>
                  </Dropdown>
                </th>
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
