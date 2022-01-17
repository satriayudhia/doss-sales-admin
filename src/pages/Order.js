import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavbarComponent from "../components/NavbarComponent";
import SidebarComponent from "../components/SidebarComponent";
import MainContentTab from "../components/MainContentTab";

const Order = () => {
  return (
    <Container fluid className="app-main-container" style={{ padding: 0 }}>
      <Row style={{ height: "82px" }}>
        <Col>
          <NavbarComponent />
        </Col>
      </Row>

      <Row>
        <Col>
          <Container fluid className="d-flex" style={{ padding: 0 }}>
            <SidebarComponent />
            <MainContentTab />
          </Container>
        </Col>
      </Row>
    </Container>
  );
};

export default Order;
