import React, { useState, useEffect } from "react";
import TableComponent from "./TableComponent";

export default function WorkstationTable({
  items,
  setItems,
  totalPrice,
  handleEdit,
  categories,
}) {
  const [sortedItems, setSortedItems] = useState([]);
  const [sortConfig, setSortConfig] = useState({
    field: "",
    direction: "",
  });
  const [categoryFilter, setCategoryFilter] = useState("");
  const [filteredItems, setFilteredItems] = useState([]);
  const [availableCategories, setAvailableCategories] = useState([]);

  function handleDelete(index) {
    if (sortedItems.length) {
      const unsortedIndex = items.indexOf(sortedItems[index]);

      const newSortedItems = sortedItems.filter(
        (item) => sortedItems.indexOf(item) !== index
      );

      const newItems = items.filter(
        (item) => items.indexOf(item) !== unsortedIndex
      );

      setSortedItems(newSortedItems);
      setItems(newItems);
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
    let newItems = [];

    if (filteredItems.length) {
      newItems = [...filteredItems];
    } else {
      newItems = [...items];
    }

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

    if (filteredItems.length) {
      setFilteredItems(newItems);
    } else {
      setSortedItems(newItems);
    }
  }, [items, sortConfig, filteredItems]);

  useEffect(() => {
    if (categoryFilter) {
      const newItems = items.filter((item) => item.category === categoryFilter);

      setFilteredItems(newItems);
    }
  }, [categoryFilter, items]);

  useEffect(() => {
    let itemCategories = [];

    items.forEach((item) => itemCategories.push(item.category));

    const uniqueItemCategories = itemCategories.filter(
      (value, index, self) => self.indexOf(value) === index
    );

    setAvailableCategories(uniqueItemCategories);
  }, [items]);

  return (
    <TableComponent
      items={
        categoryFilter
          ? filteredItems
          : sortedItems.length
          ? sortedItems
          : items
      }
      sortDirection={sortDirection}
      sortConfig={sortConfig}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
      totalPrice={totalPrice}
      categories={categories}
      categoryFilter={categoryFilter}
      setCategoryFilter={setCategoryFilter}
      availableCategories={availableCategories}
    />
  );
}
