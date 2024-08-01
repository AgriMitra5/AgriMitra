import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { NavLink } from "react-router-dom";

const OwnerNavbar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Navbar.Brand as={NavLink} to="/">
        Home
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={NavLink} exact to="/owner-dashboard/profile">
            Profile
          </Nav.Link>
          <Nav.Link as={NavLink} to="/owner-dashboard/addproducts">
            Add Products
          </Nav.Link>
          <Nav.Link as={NavLink} to="/owner-dashboard/history">
            View History
          </Nav.Link>
          <Nav.Link as={NavLink} to="/owner-dashboard/notification">
            Notification
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default OwnerNavbar;
