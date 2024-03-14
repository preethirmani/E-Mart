import React, { useEffect } from 'react'
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { useSelector } from 'react-redux';
import { addToCart } from '../redux/cartSlice';
import '../index.css'
import { useNavigate } from 'react-router';


const Navigations = (props) => {
  
 
  const cartItems = useSelector(state =>state.cart.cart);
  const navigate = useNavigate();
  
  //console.log(cartItems, typeof cartItems, cartItems.length)
  //console.log('username from localstorage', localStorage.getItem('user'));

  const logoutHandler = () => {
    props.setToken(null);
    //localStorage.setItem('cart','')
    navigate('/');
  }
  
  return (
   <header>
    <Navbar bg='dark' variant='dark' expand='lg'  collapseOnSelect>
      <Container>
        <LinkContainer to='/'>
          <Navbar.Brand className='brandName'>eMart</Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls='basic-nabar-nav' />
       
           
           {
              props.token ? 
              (
                <Navbar.Collapse id='basic-navbar-nav'>
                  <Nav className='ms-auto'>
                    <LinkContainer to='/cart'>
                      <Nav.Link >
                        <i className="fa-solid fa-cart-shopping"></i>
                      </Nav.Link>
                    </LinkContainer>
                    <NavDropdown title={props.userinfo}>
                      <NavDropdown.Item>Account</NavDropdown.Item>
                      <NavDropdown.Item onClick={logoutHandler}>Logout</NavDropdown.Item>
                    </NavDropdown>
                  </Nav>
                </Navbar.Collapse>
              ) 
              : (
                  <Navbar.Collapse>
                     <Nav className='ms-auto'>
                      
                        <LinkContainer to='/login'>
                          <Nav.Link>Login</Nav.Link>
                        </LinkContainer>
                        <LinkContainer to='register'>
                          <Nav.Link>Register</Nav.Link>
                        </LinkContainer>
                   
                    </Nav>
                  </Navbar.Collapse>
              )
           }
      </Container>
    </Navbar>
   </header>
  )
}

export default Navigations