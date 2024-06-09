"use client";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Image from "next/image";
import { products } from "@/contant";
import Link from "next/link";

function TOPBAR() {
  return (
    <>
      <nav className="navbar navbar-expand-sm bg-dark navbar-dark ">
        <div className="w-100  mt-2 ">
          <div className="row d-flex text-center text-white">
            <div className="col ">
              <a href="tel:+9892402162">
                <i className="fas fa-print mr-3"></i> <p>+919892402162</p>
              </a>
            </div>

            <div className="col">
              {" "}
              <a href="mailto:parshwaimpex1@gmail.com">
                <i className="fas fa-envelope mr-3"></i> parshwaimpex1@gmail.com
              </a>
            </div>
            <div className="col">Mon-Sat 10.00-19.00</div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default TOPBAR;
