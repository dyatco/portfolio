import { useState } from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { Fade } from 'react-reveal';
import { HashLink } from 'react-router-hash-link';
import { Home } from '../pages/Home';
import { Link } from "react-router-dom";

export default function NavBar(){
  
const [expanded, setExpanded] = useState(false);

  return(
    <div class="container-fluid boxNav px-0">     
      <Navbar bg="none" expand="lg" variant="dark" expanded={expanded} className="navContainer">
          <Navbar.Brand href="#home" class="ms-3 nav">DY</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" onClick={() => setExpanded(expanded ? false : "expanded")} />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <HashLink className="navItem" to="/#home" onClick={() => setExpanded(false)}>Home</HashLink>
              <HashLink className="navItem" to="/#skills" onClick={() => setExpanded(false)}>Skills</HashLink>
              <HashLink className="navItem" to="/#projects" onClick={() => setExpanded(false)}>Projects</HashLink>
              <HashLink className="navItem" to="/#about" onClick={() => setExpanded(false)}>About</HashLink>
              <HashLink className="navItem" to="/#contact" onClick={() => setExpanded(false)}>Contact</HashLink>
            </Nav>
          </Navbar.Collapse>
      </Navbar>
    </div>
      )
}
