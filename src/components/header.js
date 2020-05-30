import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import logo from "../logo.svg";

function Header() {
  return (
    <>
      <Navbar bg="dark" variant="dark" >
        <Navbar.Brand href="#home">
          <img
            alt="CJ"
            src={logo}
            height="30"
            width="30"
            className="d-inline-block align-top"
          />
          CJ
        </Navbar.Brand>
        <Nav fill variant="pills" className="ml-auto">
          <Nav.Item>
            <Nav.Link href="/home">Home</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-1">Blog</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="link-2">About</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="disabled">
              Contact
            </Nav.Link>
          </Nav.Item>
        </Nav>
      </Navbar>
    </>
  );
}

export default Header;
