import React from 'react';
import { Navbar, Nav, Container } from 'react-bootstrap';

const NavbarMozo = () => {
  return (
    <Navbar bg="dark" variant="dark" fixed="top">
      <Container>
        <Nav className="ms-auto">
          <Nav.Link href="#">José Barzola</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavbarMozo;
