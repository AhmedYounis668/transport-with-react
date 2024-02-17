import React from 'react'
import { Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import login from '../Login/Login'
import { Link } from 'react-router-dom';
const Navbasr = () => {
  return (
    <div className='navbar '>
       <Navbar expand="lg" data-bs-theme="dark" className="bg-body-tertiary">
      <Container >
        <Navbar.Brand href="/">Lets Go</Navbar.Brand>
       
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
        
        <Col className='navtitles'>
          <Nav
            className=" my-2 my-lg-0 "
            style={{ maxHeight: '100px'}}
            navbarScroll
          >
            <Nav.Link href="#Home">Home</Nav.Link>
            <Nav.Link href="#Drivers">Drivers</Nav.Link>
            <Nav.Link href="#Our Cars">Our Cars</Nav.Link>
            <Nav.Link href="#Why Choose Us">Why Choose Us</Nav.Link>
            <Nav.Link href="#client opinion">Client Opinion</Nav.Link>
            
            <Link style={{textDecoration:'none'}} to='/contact'>
            <div className='contact my-2'>Contact</div>
</Link>
          </Nav>
           
          </Col>
          <Link style={{textDecoration:'none'}} to="/login">
          <div  className='d-flex justify-content-center ' style={{color:'white'}}>Login</div>

          </Link>

        </Navbar.Collapse>
      </Container>

    </Navbar>
  </div>
  )
}

export default Navbasr
