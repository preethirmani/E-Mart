import React from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import '../index.css'


const Navigations = () => {
  return (
   <header>
    <Navbar bg='dark' variant='dark' expand='lg'  collapseOnSelect>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand className='brandName'>eMart</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-nabar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='ms-auto'>
            <LinkContainer to='/cart'>
              <Nav.Link>
                <i className="fa-solid fa-cart-shopping"></i>
              </Nav.Link>
            </LinkContainer>
            <LinkContainer to='/login'>
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
             <LinkContainer to='/register'>
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>

          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   </header>
  )
}

export default Navigations