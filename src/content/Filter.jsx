import React, { useState } from 'react';
import { Dropdown, ButtonGroup, Button, Container, Row, Col } from 'react-bootstrap';

function Filter({ setFilter }) {
  const [filterText, setFilterText] = useState("All");

  const handleFilter = (status) => {
    setFilter(status);
    setFilterText(status === "All" ? "All" : `${status}`);
  };

  return (
    <div style={{ marginTop: "5%" }}>
      <Container className="mt-4">
        <Row className="align-items-center">
          <Col className="text-start">
            <div style={{ fontSize: "30px", color: "black" }}>My todos</div>
          </Col>
          <Col className="text-end">
            <div className="d-inline-flex align-items-center">
              <div style={{ fontSize: "30px", color: "black" }}>Status filter :</div>
              <Dropdown as={ButtonGroup} className="ms-3">
                <Button
                  variant="danger"
                  style={{ backgroundColor: filterText === "Not Completed" ? "red" : filterText === "Completed" ? "green" : "pink", color: "white" }}
                  onClick={() => handleFilter("All")}
                >
                  {filterText}
                </Button>
                <Dropdown.Toggle split variant="danger" id="dropdown-split-basic" style={{ backgroundColor: filterText === "Not Completed" ? "red" : filterText === "Completed" ? "green" : "pink" }} />
                <Dropdown.Menu>
                  <Dropdown.Item onClick={() => handleFilter("Completed")}>Completed</Dropdown.Item>
                  <Dropdown.Item onClick={() => handleFilter("Not Completed")}>Not Completed</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Filter;