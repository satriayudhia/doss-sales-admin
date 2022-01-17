import React from "react";
import { Container, Navbar } from "react-bootstrap";
import { IoNotificationsOutline } from "react-icons/io5";
import { AiOutlineUser } from "react-icons/ai";

const NavbarComponent = () => {
  return (
    <Navbar fixed="top" className="navbar-top">
      <Container fluid>
        <Navbar.Brand href="#home">
          <img
            src="https://main.mobile.doss.co.id/storage/uploads/2022/01/logo-doss-black.webp"
            alt="logo doss"
            className="navbar-logo"
          />
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <div className="hover-icon">
            <IoNotificationsOutline size={25} />
          </div>
          <div className="hover-icon">
            <AiOutlineUser size={25} />
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponent;
