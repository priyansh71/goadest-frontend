import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link, Route } from "react-router-dom";
const Header = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Link to="/Home">
        <Navbar.Brand>Home</Navbar.Brand>
      </Link>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Link to="/blogs">
            <Nav.Link>Blogs</Nav.Link>
          </Link>
          <Link to="/locations">
            <Nav.Link>Locations</Nav.Link>
          </Link>
          <Link to="/maps">
            <Nav.Link>Maps</Nav.Link>
          </Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>

  )
}

export default Header