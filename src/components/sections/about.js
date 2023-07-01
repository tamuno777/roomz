import React from 'react'
import './about.css'
import about from '../../images/img/about.jpg'
import bg from '../../images/img/bg.jpg'
import background from '../../images/img/background.jpg'
import { Col, Row } from 'react-bootstrap'

export default function About() {
  return (
    <div className='containerr'>
      <div className="banner p-5">
          <div className="brand">
            <h3> About Our Brand</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti, expedita! Quam quibusdam maxime earum doloribus est soluta molestiae excepturi dolorum.</p>
          </div>
      </div>
      <div className="overview p-5 ">
            <div className="over">
              <h3 className='text-center'>Overview</h3>
              <p className='text-center'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sint consectetur reiciendis incidunt cupiditate, omnis placeat explicabo consequuntur repellendus facilis vel blanditiis exercitationem fugit, corrupti dolor mollitia voluptatibus voluptas ad tempore culpa debitis, nesciunt esse. Nobis, vel error, quos consequatur consectetur fuga sapiente earum, autem maiores atque rerum architecto at commodi.</p>
            </div>
      </div>
      <div className="big-area">
        <Row className="first">
          <Col sm={12} lg={5} className='text mt-5  '>
            <h2>Carefully Considered Details & Perfections</h2>
            <p className=''>Lorem ipsum, dolor sit amet consectetur adipisicing elit. <br /> Illo ex nulla eius minus assumenda praesentium!</p>
            <button>Learn More</button>
          </Col>
          <Col sm={12} lg={7} className='first-image'>
            <img src={about} alt="" />
          </Col>
        </Row>
        <Row   className="second">
        <Col sm={12} lg={7} className='second-image '>
            <img src={bg} alt="" />
          </Col>
          <Col sm={12} lg={5} className='second-text mt-5 px-5 '>
            <h2 className='px-5'>Carefully Considered Details & Perfections</h2>
            <p className='px-5'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. 
              Illo ex nulla eius minus assumenda praesentium!</p>
            <button>Learn More</button>
          </Col>
        </Row>
      </div>
    </div>
  )
}
