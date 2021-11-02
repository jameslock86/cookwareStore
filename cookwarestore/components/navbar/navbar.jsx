import React from 'react'
import { Nav, Button, Container, NavDropdown, Form, FormControl, Toggle, NavBar } from 'react-bootstrap';
import Navbar from 'react-bootstrap/Navbar';
import Link from 'next/link'

export default function Navbars() {
  return (
    <Navbar expand="lg">
    <Container fluid>
      <Navbar.Brand href="#">Cookware & CookBooks</Navbar.Brand>
      <Navbar.Toggle aria-controls="navbarScroll" />
      <Navbar.Collapse id="navbarScroll" >
        <Nav
          className="me-auto my-2 my-lg-0 "
          style={{ maxHeight: '200px' }}
          navbarScroll
          
        >
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/shop">Shop</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
        </Nav>
       
      </Navbar.Collapse>
    </Container>
  </Navbar>


  )
}