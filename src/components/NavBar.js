import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap'

  export default function NavBar(){
  
  return(
    <div class="boxNav">     
      <Navbar bg="none" expand="lg">
        <Container>
          <Navbar.Brand href="#home" class="nav">DY</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
        {/*
          - className is use instead class, to specify a CSS class

          - changes for Bootstrap 5
          from mr -> to me
          from ml -> to ms
        */}
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
