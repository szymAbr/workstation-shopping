import React, { useState, useEffect } from "react";
import TableComponent from "./TableComponent";

export default function WorkstationTable({
  items,
  setItems,
  totalPrice,
  handleEdit,
}) {
  const [sortedItems, setSortedItems] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    field: "",
    direction: "",
  });

  function handleDelete(index) {
    if (sortedItems.length) {
      const newItems = sortedItems.filter(
        (item) => sortedItems.indexOf(item) !== index
      );

      setSortedItems(newItems);
    } else {
      const newItems = items.filter((item) => items.indexOf(item) !== index);

      setItems(newItems);
    }
  }

  function sortDirection(field) {
    let direction = "ascending";

    if (sortConfig.field === field && sortConfig.direction === "ascending") {
      direction = "descending";
    }

    setSortConfig({ field, direction });
  }

  useEffect(() => {
    let newItems = [...items];

    if (sortConfig.field) {
      newItems.sort((a, b) => {
        const name = sortConfig.field;

        if (name === "price") {
          if (Number(a[name]) > Number(b[name])) {
            return sortConfig.direction === "ascending" ? 1 : -1;
          } else if (Number(a[name]) < Number(b[name])) {
            return sortConfig.direction === "ascending" ? -1 : 1;
          } else {
            return 0;
          }
        } else {
          if (a[name] > b[name]) {
            return sortConfig.direction === "ascending" ? 1 : -1;
          } else if (a[name] < b[name]) {
            return sortConfig.direction === "ascending" ? -1 : 1;
          } else {
            return 0;
          }
        }
      });
    }

    setSortedItems(newItems);
  }, [items, sortConfig]);

  return (
    <TableComponent
      items={sortedItems.length ? sortedItems : items}
      sortDirection={sortDirection}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
      totalPrice={totalPrice}
    />
  );
}
