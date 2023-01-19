import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'
import { Fade } from 'react-reveal'

  export default function NavBar(){
  
  return(
    <div class="boxNav min-vw-100 px-5">     
      <Navbar bg="none" expand="lg">
        <Container>
          <Navbar.Brand href="#home" class="ms-3 nav">DY</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">

            <Nav className="ms-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#skills">Skills</Nav.Link>
              <Nav.Link href="#projects">Projects</Nav.Link>
              <Nav.Link href="#about">About</Nav.Link>
              <Nav.Link href="#contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
      )
}
