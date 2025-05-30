import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

export const NavbarComponent = () => {
     return (
          <Navbar expand="lg" variant="dark">
               <Container>
                    <Navbar.Brand href="#home">
                         <strong>Kasir App</strong>
                    </Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                         <Nav className="me-auto">
                              <Nav.Link href="#home">Home</Nav.Link>
                              <Nav.Link href="#link">Link</Nav.Link>
                              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                                   <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                                   <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                                   <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                                   <NavDropdown.Divider />
                                   <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
                              </NavDropdown>
                         </Nav>
                    </Navbar.Collapse>
               </Container>
          </Navbar>
     );
};
