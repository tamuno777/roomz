import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navs from "../sections/Nav";
import Homepage from "../sections/Homepage"
import Shop from "../sections/shop"
import About from "../sections/about"
import Contact from "../sections/contact"
// import './Home.css'




function Home() {
 

  return (
    <Router>
        <div className='master-body'>
          <Navs/>
          
        <Routes>
            <Route path='/Homepage' element={<Homepage/>}>

            </Route>
            <Route path='/Shop' element={<Shop/>}>

            </Route>
            <Route path='/about' element={<About/>}>

            </Route>
            <Route path='/Contact' element={<Contact/>}>

            </Route>
           
        </Routes>
        
        </div>
    </Router>
  )
}

export default Home