import React, { useState, useEffect } from "react";
import "./App.css";
import { Container, Row, Col } from "react-bootstrap";
import WorkstationTable from "./components/WorkstationTable";
import Header from "./components/Header";
import UserInput from "./components/UserInput";

function App() {
  const [items, setItems] = useState([]);

  return (
    <div className="App">
      <Header />

      <Container>
        <Row className="mt-4">
          <Col xs={12} md={5} lg={4}>
            <UserInput setItems={setItems} />
          </Col>

          <Col xs={12} md={7} lg={8}>
            <WorkstationTable items={items} />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default App;
