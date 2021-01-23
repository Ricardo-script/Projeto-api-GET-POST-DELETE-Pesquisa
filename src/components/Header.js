import React from 'react';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar'

const Header = () => {
    return(
        
        <Navbar collapseOnSelect expand="lg" bg="secondary" variant="light">
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="mr-auto">
                <Nav.Link href="/listar">Listar</Nav.Link>
                <Nav.Link href="/pesquisar">Pesquisar</Nav.Link>
            </Nav>
        </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;

