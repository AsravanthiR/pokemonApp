import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';




const Header = () => {
    return (
            <Navbar bg="dark" expand ="lg" variant="dark">
    <Container>
    <Navbar.Brand href="#home">PokeApp</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="me-auto">
      <LinkContainer to="/">
      <Nav.Link>Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to="pokelist">

      <Nav.Link>Pokemons</Nav.Link>
      </LinkContainer>
      <LinkContainer to="myfavourites">

      <Nav.Link >MyFavourites</Nav.Link>
      </LinkContainer>
    </Nav>
    </Navbar.Collapse>
    </Container>
  </Navbar>
        
    );
};

export default Header;