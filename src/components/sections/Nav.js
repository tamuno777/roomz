import React from 'react'
import Button from 'react-bootstrap/Button';
import logo from '../../images/logo.svg'
import Navbutton from './Navbutton';
import './Nav.css'
import { Link } from 'react-router-dom'
import {BsFillCartPlusFill} from 'react-icons/bs'

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

                  <div className=' link text-decoration-none' ><Navbutton title="Homepage" to="/Homepage" /></div>
                  <div className='link'  ><Navbutton title="Shop" to="/Shop" /></div>
                  <div className='link'  ><Navbutton title="About" to="/ABout" /></div>
                  <div className='link'  ><Navbutton title="Contact" to="/Contact" /></div>
                  {/* <Link className='link' to='/cart'><BsFillCartPlusFill size={20}/></Link> */}

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


