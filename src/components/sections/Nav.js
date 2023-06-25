import React from 'react'
import Button from 'react-bootstrap/Button';
import logo from '../../images/logo.svg'
import Navbutton from './Navbutton';
import './Nav.css'

import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Offcanvas from 'react-bootstrap/Offcanvas';

function Navs() {
    
  return (
    <>
      {['md', ].map((expand) => (
        <Navbar key={expand} expand={expand} className=" mb-3 nav w-100 px-2">
          <Container fluid>
            <Navbar.Brand >
                 <img src= {logo}   width="100"
              height="30"
              className="d-inline-block align-top logo" title="room" alt="home"  />

            </Navbar.Brand>

            <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
            <Navbar.Offcanvas
              id={`offcanvasNavbar-expand-${expand}`}
              aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
              placement="start"
            >
              <Offcanvas.Header closeButton>
                <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
                </Offcanvas.Title>
              </Offcanvas.Header>
              <Offcanvas.Body>
                <Nav className="justify-content-start flex-grow-1 pe-3 fs-5  nav-cont pt-3">

                  <Nav.Link className=' link text-decoration-none' ><Navbutton title="Homepage" to="/Homepage" /></Nav.Link>
                  <Nav.Link className='link'  ><Navbutton title="Shop" to="/Shop" /></Nav.Link>
                  <Nav.Link className='link'  ><Navbutton title="ABout" to="/ABout" /></Nav.Link>
                  <Nav.Link className='link'  ><Navbutton title="Contact" to="/Contact" /></Nav.Link>
                  
                </Nav>
                  
              </Offcanvas.Body>
            </Navbar.Offcanvas>
          </Container>
        </Navbar>
      ))}
    </>
  );
}

export default Navs;


