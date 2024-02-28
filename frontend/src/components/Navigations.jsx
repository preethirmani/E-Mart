import React, { useEffect } from 'react'
import { Navbar, Container, Nav } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import '../index.css'


const Navigations = () => {
  const clickHandler = () => {
   // window.reload();
  }
 
  const cartItems = useSelector(state =>state.cart.cart);
  //console.log(cartItems, typeof cartItems, cartItems.length)
  

 
  
  return (
   <header>
    <Navbar bg='dark' variant='dark' expand='lg'  collapseOnSelect>
      <Container>
        <LinkContainer to='/' onClick={clickHandler}>
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