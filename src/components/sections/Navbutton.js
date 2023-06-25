import React from 'react'
import './Navbutton.css' 
import { IconContext } from "react-icons";
import { Link, useLocation } from "react-router-dom";


export default function Navbutton(props) {
  const location = useLocation();

  const isActive = location.pathname === props.to;

//   const btnClass = isActive ? "con active" : "con";
  return (
    <Link to={props.to}>
        <div className='btnClass' >
            <IconContext.Provider value={{ size: "24px", className: "btn-icon" }}>
               
            <p className='btnClass'>          
                {props.title}
            
            </p>
            </IconContext.Provider>

        </div>
    </Link>
  )
}

