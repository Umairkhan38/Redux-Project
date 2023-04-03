import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchAsync } from './productSlice';
import { addAsync } from '../cart/cartSlice';


export function Products() {
  const dispatch = useDispatch()
  const products = useSelector(state=>state.product.products)
  return (
   <>
   <button style={{backgroundColor:"green", color:"white", padding:"5px  4px", borderRadius:"2px", margin:"5px 0px 15px 0px"}} onClick={()=>dispatch(fetchAsync())}>Fetch Products</button>


    <div style={{display:"flex", flexWrap:"wrap", padding:"25px"}}>
    { products.map((elem,i)=>{

    return <div className="card" key={i} style={{border:"1px solid black", padding:"10px", margin:"5px auto", width:"20rem"}}>
    <img src={elem.thumbnail} alt="Avatar" style={{width:"50%"}}  />
    <div className="container">
      <h4><b>{elem.title}</b></h4> <b>₹{elem.price}/-</b>
      <p>A{elem.description}</p>
    </div>
    <button style={{backgroundColor:"yellow", color:"black", padding:"6px  8px", borderRadius:"12px", margin:"5px 0px 15px 0px", cursor:"pointer"}} onClick={()=>dispatch(addAsync(elem))}>Add to Cart</button>
  </div>
    })}

  </div>
  </>
  );
}
