import React from 'react';
import { Navbar,Container,Nav } from 'react-bootstrap';
import './Nav.css';

const Navs = () =>{
    return(
         <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">dorsin</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#" className="imp first">Home</Nav.Link>
            <Nav.Link href="#" className="imp">Services</Nav.Link>
            <Nav.Link href="#" className="imp">Pricing</Nav.Link>
            <Nav.Link href="#link" className="imp">Team</Nav.Link>
            <Nav.Link href="#home" className="imp">Blog</Nav.Link>
            <Nav.Link href="#link" className="imp">Features</Nav.Link>
            <Nav.Link href="#link" className="imp">Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>

    );

}

export default Navs;