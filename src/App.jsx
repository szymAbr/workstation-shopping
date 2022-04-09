import React, { useState, useEffect } from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import WorkstationTable from "./components/WorkstationTable";
import Header from "./components/Header";
import UserInput from "./components/UserInput";
import Footer from "./components/Footer";

function App() {
  const [items, setItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [editMode, setEditMode] = useState(false);
  const [editedItem, setEditedItem] = useState(0);

  function handleEdit(index) {
    setEditedItem(index)
    setEditMode(true);
  }

  useEffect(() => {
    const itemsFromStorage = JSON.parse(localStorage.getItem("items"));

    if (itemsFromStorage && itemsFromStorage.length > 0) {
      setItems(JSON.parse(localStorage.getItem("items")));
    }
  }, []);

  useEffect(() => {
    if (items && items.length > 0) {
      localStorage.setItem("items", JSON.stringify(items));

      setTotalPrice(() => {
        const priceArray = items.map((item) => Number(item.price));
        const total = priceArray.reduce(
          (previousValue, currentValue) => previousValue + currentValue
        );

        return total;
      });
    }
  }, [items]);

  return (
    <div className="App">
      <Header />

      <Container>
        <Row className="mt-4">
          <Col xs={12} md={5} lg={4}>
            <UserInput
              items={items}
              setItems={setItems}
              editMode={editMode}
              setEditMode={setEditMode}
              editedItem={editedItem}
            />
          </Col>

          <Col xs={12} md={7} lg={8}>
            <WorkstationTable
              items={items}
              setItems={setItems}
              totalPrice={totalPrice}
              handleEdit={handleEdit}
            />
          </Col>
        </Row>

        <Footer />
      </Container>
    </div>
  );
}

export default App;
