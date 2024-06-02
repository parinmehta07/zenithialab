"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";
import { products } from "@/contant";
import Link from "next/link";

function NAVBAR() {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="lg"
        bg="dark"
        data-bs-theme="dark"
        className="bg-body-tertiary"
        style={{ backgroundColor: "red" }}
      >
        <Container>
          <Navbar.Brand href="/">
            {" "}
            <Image
              src="/img/Logoforwebsite.png"
              alt="#"
              width={61}
              height={47}
            />
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav text-white">
            <Nav className="text-white justify-content-end"  style={{width:"75%",}}>
              <Nav.Link href="/" style={{paddingInline:"20px"}}>HOME</Nav.Link>
              <Nav.Link href="/aboutus" style={{paddingInline:"20px"}}>ABOUT US</Nav.Link>
              <NavDropdown title="PRODUCT" id="collapsible-nav-dropdown">
                {Object.keys(products).map((elt, i) => (
                  <NavDropdown.Item href={`products?product=${elt}`} key={i}  style={{paddingInline:"20px"}}>
                 
                    <Link
                      href={{
                        pathname: "/products",
                        query: { product: elt },
                      }}
                      className="  "
                      style={{ textDecoration: "none" }}
                    >
                         {elt}
                    </Link>
                  </NavDropdown.Item>
                ))}

                {/* <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item> */}
                {/* <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item> */}
                {/* <NavDropdown.Divider /> */}
                {/* <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
              </NavDropdown>
            </Nav>
            <Nav className="text-white" style={{paddingInline:"20px"}}> 
              <Nav.Link eventKey={2} href="/contactus">
                CONTACT US
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default NAVBAR;
