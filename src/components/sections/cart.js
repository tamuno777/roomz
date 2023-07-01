import React from 'react'
import './cart.css'
import ima from '../../images/img/new1.jpg'
// import { useSelector } from "react-redux";



export default function Cart({cart }) {
  // const { cart } = props;
  
  if (!cart) {
    return <div>Loading...</div>;
  }
  
  // const carts = useSelector((state) => state.cart);
  console.log(cart)

  return (
   <>
    <div className='cart-container' >
           
           <h1>Your Cart data  </h1>
           {cart.map((item) => (
       <div key={item.id}  className="cartItem pt-5 d-flex justify-content-around">
      
      <img src={item.image} className='cart-img' />
      <div className="description">
        <p>
          <b>{item.title}</b>
        </p>
        <p> Price:{item.title} </p>
        <div className="countHandler">
          <button > - </button>
          <p>
            0
          </p>
          <button > + </button>
        </div>
      </div>
      
    </div> 
    ))}    
    
    </div>
   
   </>
  )
}
