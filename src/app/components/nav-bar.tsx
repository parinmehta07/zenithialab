"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";



function NAVBAR() {
  return (
    <Navbar className=" px-4 navbar-custom">
      <Container fluid>
        <Navbar.Brand href="#home">
          <Image
            src="/img/logo-no-background.svg"
            alt=""
            width={226}
            height={60}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end px-4">
          <Nav className="o ">
            <Nav.Link className="px-4" href="/">Home</Nav.Link>
            <Nav.Link  href="#about-section">About</Nav.Link>
            <Nav.Link  href="#features-section" className="px-4" >Features</Nav.Link>
            <Nav.Link  href="#team-section"  >Teams</Nav.Link>
            <Nav.Link  href="#contact-us"  className="px-4" >Contact Us</Nav.Link>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NAVBAR;
