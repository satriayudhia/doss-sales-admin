import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import NavbarComponent from "../components/NavbarComponent";
import SidebarComponent from "../components/SidebarComponent";
import MainContent from "../components/MainContent";

const Home = () => {
  return (
    <Container
      fluid
      className="app-main-container h-100"
      style={{ padding: 0 }}
    >
      <Row style={{ height: "82px" }}>
        <Col>
          <NavbarComponent />
        </Col>
      </Row>

      <Container fluid className="d-flex" style={{ padding: 0 }}>
        <SidebarComponent />
        <MainContent />
      </Container>
    </Container>
  );
};

export default Home;
