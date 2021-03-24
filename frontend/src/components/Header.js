import React from 'react'
import { Navbar, Nav } from 'react-bootstrap'
import { Link, Route, Switch } from "react-router-dom"
import Location from './locations/Location'
import Home from './home/Home'
import Map from './map/Map'
import Blog from './blog/Blog'
const Header = () => {
  return (
    <div>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Link to="/">
          <Navbar.Brand className="brand">Home</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link to="/blogs">
              <Nav.Link as={Link} to='/blogs'>Blogs</Nav.Link>
            </Link>
            <Link to="/locations">
              <Nav.Link as={Link} to='/locations'>Locations</Nav.Link>
            </Link>
            <Link to="/maps">
              <Nav.Link as={Link} to='/maps'>Maps</Nav.Link>
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
      <Switch>

        <Route path='/blogs' component={Blog} />
        <Route path='/' exact component={Home} />
        <Route path='/locations' component={Location} />
        <Route path='/maps' component={Map} />

      </Switch>
    </div>

  )
}

export default Header