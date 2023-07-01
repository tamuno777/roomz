import React from 'react'
import './shop.css'
import { useState } from 'react'
import {BsFillCartPlusFill} from 'react-icons/bs'
import { Link } from 'react-router-dom'
import Cart from './cart'


 
export default function Shop() {
  const [cart, setCart] = useState([]);
  const [quantity, setQuantity] = useState(1);
  const [cartCount, setCartCount] = useState(0);


  

  const [data, setData] = useState([
    { id :1,
      title: 'Wooden Stool',
      image: '/img/new1.jpg',
      price: 100
    },
    { id :2,
      title: 'Chair with iron legs',
      image: '/img/new2.jpg',
      price: 300
    },
    { id :3,
      title: 'Chair(wooden legs)',
      image: '/img/new3.jpg',
      price: 200
    },
    { id :4,
      title: 'Dining chair with wooden legs',
      image: '/img/p1.jpg',
      price: 500
    },
    { id :5,
      title: 'Single chair with wodden legs',
      image: '/img/p2.jpg',
      price: 800
    },
    { id :6,
      title: 'Single cahir with wooden legs',
      image: '/img/p3.jpg',
      price: 600
    },
    { id :7,
      title: 'Office chair with wooden legs',
      image: '/img/p4.jpg',
      price: 700
    },
    { id :8,
      title: 'Black plastic chair with wooden legs',
      image: '/img/p5.jpg',
      price: 300
    },
    { id :9,
      title: 'Black plastic chair with wooden legs',
      image: '/img/p6.jpg',
      price: 500
    },
  ])

  const handleaddtocart =(id)=>{
    const filteredData = data.filter((datas) => datas.id === id);
    // setData(filteredData);
    
    // console.log(filteredData)
    // Send the data to another component cart.js
  //   const otherComponent = useRef();
  //   otherComponent.current.setState({ data: dataToSend });
  // };
  setCart(filteredData);
  setCartCount(cartCount + 1)
    // return     <Cart cart = {cart}  />

   
  
  }
  // <Cart cart = {cart}  />

  
  
  return (
    <div className='shop-container '>

      <div className="content mt-5">
      <Link className='button1'  to="/cart "> <BsFillCartPlusFill size={30}/> {cartCount}</Link>

      {data.map((datas) => (
          <div
            className="Chair-card"
            key={datas.id}
          >
           
            

            <img
              src={datas.image}
              className="Chair-image mb-2 "
              alt="Chair-Art"
            />
           
            
            
            <div className="Chair-title  mb-1">
              <p className='font'>{datas.title}</p>
            </div>
            
           
            <div className='d-flex justify-content-around'>
              
              
            <div className="Chair-price pe-4 ">
              <p className=' '> ${datas.price}</p>
            </div>
            
           
              
            
            
              
              
              
              <div className=' cart px-2'>
              <button className='button' onClick={()=>handleaddtocart(datas.id)}><BsFillCartPlusFill size={20}/></button>
              
              </div>
            </div>

            
          </div>
      ))}
    </div>
    <Cart cart = {cart}  />

    </div>
  )
}
