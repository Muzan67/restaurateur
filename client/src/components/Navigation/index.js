import React from "react";
import Auth from "../../utils/auth";
import { Link } from "react-router-dom";

import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Navigation() {



  function showNav() {
    if (Auth.loggedIn()) {
      return (
        <Nav id="nav-list" className="mx-5 gap-4 d-flex flex-wrap justify-content-center">
          <Link className="text-dark fs-4 fw-semibold text-decoration-none" to="/certifications">
            Certifications
          </Link>
          <Link className="text-dark fs-4 fw-semibold text-decoration-none" to="/permits">
            Permits
          </Link>
          <Link className="text-dark fs-4 fw-semibold text-decoration-none" to="/posters">
            Posters
          </Link>
          <Link className="text-dark fs-4 fw-semibold text-decoration-none" to="/contact">
            Contact
          </Link>
          <Link className="text-dark fs-4 fw-semibold text-decoration-none" onClick={() => Auth.logout()} to="/restaurateur">
            Logout
          </Link>
          </Nav>
      );
    } else {
      return (
        <Nav className=" mx-5 gap-3">
          <Link className="text-dark fs-4 fw-semibold text-decoration-none" to="/signup">
            Signup
          </Link>
          <Link className="text-dark fs-4 fw-semibold text-decoration-none" to="/login">
            Login
          </Link>
          </Nav>
      )
    }
  }

  return (
    <>
      <Navbar bg="light" variant="light">
        <Container id="nav">
          <Navbar.Brand className="mx-5">
          <Link className="text-dark fs-1 fw-semibold text-decoration-none" to="/restaurateur">
            Restaurateur
          </Link>
          </Navbar.Brand>
          
            {showNav()}
    
        </Container>
      </Navbar>
    </>
  )
}

export default Navigation;