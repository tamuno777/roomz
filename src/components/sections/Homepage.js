import React from 'react'
// import sample from '../img/slide/3.png'
import Button from '@mui/material/Button';
import './Homepage.css'
import { useState } from 'react';
import hero1 from '../../images/desktop-image-hero-1.jpg'
import hero2 from '../../images/desktop-image-hero-2.jpg'
import hero3 from '../../images/desktop-image-hero-3.jpg'
import Carousel from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import arrow from '../../images/icon-arrow.svg'
import about1 from '../../images/image-about-dark.jpg'
import about2 from '../../images/image-about-light.jpg'
import left from '../../images/icon-angle-left.svg'
import right from '../../images/icon-angle-right.svg'
import { IconContext } from 'react-icons';



export default function Homepage() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex) => {
    setIndex(selectedIndex);
  };
  return (
    <div className='Homepage-container '>
     <Container fluid >
      <Row>
        <Col sm={12} lg={7}>
        <Carousel activeIndex={index} onSelect={handleSelect}>
      <Carousel.Item>
        <img
          className="d-block w-100"
          alt="First slide"
          src={hero1}
        />
       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          alt="Second slide"
          src={hero2}
        />

       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          alt="Third slide"
          src={hero3}
        />

        
      </Carousel.Item>
    </Carousel>

        
        </Col>
        <Col sm={12} md={5} className='pt-5 discovers '>

          <div className='pt-5 ps-5 pe-5 pb-4 discover '>
              <h2 className='pt-5 pb-2'>
                Discover innovative ways to decorate
              </h2>
              <p className='pb-2'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Nobis ea illum ipsa inventore corporis maiores, labore laboriosam deleniti aut accusamus sunt ab dolore, nam at?
              </p>
              <IconContext.Provider>
              <a href="#"> SHOP NOW <img src={arrow} alt=""className='ms-2' /> </a>

              </IconContext.Provider>
          </div>
          <div className='d-flex bg text-start'>
            <img src={left} alt="" className='don me-3' />
            <img src={right} alt="" className='don ms-3' />
           
          </div>
        
        </Col>
        
      </Row>


      <Row className='text-center hell'>
        <Col xs={12} md={3}>
          <img src={about1} alt="" className='dark' />
        </Col>
        <Col xs={12} md={5} className='py-5 text-start px-4 '>
          <h6>
            ABOUT OUR FUNITURE
          </h6>
          <p >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Veritatis placeat nam dolor deserunt culpa suscipit praesentium nobis nemo aut inventore dolore eum, esse accusamus modi?</p>
        </Col>
        <Col xs={12} md={4}>
        <img src={about2} alt="" className='light' />
        </Col>
      </Row>
  

  
     




     </Container>
      


    </div>
  )
}
