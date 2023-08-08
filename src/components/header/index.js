import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import logo from "../../assets/logo.png";
import { Link } from "react-router-dom";
const Header = () => {
  return (
    <Navbar
      variant="dark"
      expand="lg"
      style={{ background: "rgb(46,139,87)", color: "white" }}
      className="justify"
    >
      <Navbar.Brand as={Link} to="/">
        <img
          src={logo}
          alt="logo da empresa agro-life 
        "
          whitewhite
          style={{ width: "70px" }}
        />
      </Navbar.Brand>
      <Navbar.Brand as={Link} to="/">
        <i> AGRO-LIFE</i>
      </Navbar.Brand>
      <Navbar.Toggle />
      <Navbar.Collapse>
        <Nav>
          <Nav.Link as={Link} to="/">
            INÍCIO
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/planos">
            PLANOS
          </Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link as={Link} to="/sobre">
            SOBRE
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};

export default Header;
