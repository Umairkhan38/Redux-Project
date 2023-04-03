import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteAsync, fetchAsync, updateAsync } from './cartSlice';



export function Cart() {
  const dispatch = useDispatch()
  const items = useSelector(state=>state.cart.items)
  
  useEffect(() => {
    dispatch(fetchAsync())
  }, []);


  const handleChange=(e,id)=>{
    console.log(e.target.value);
    dispatch(updateAsync({id,change:{qty:+e.target.value}}))
    
  }

  return (
   <>

    <div style={{display:"flex", flexWrap:"wrap", padding:"25px"}}>
    <h2 style={{margin:"10px auto"}}>Total: ₹{items.reduce((acc,item)=>item.price*item.qty+acc,0)}/-</h2>
   
    { items?.map((item,i)=>{
    return <div className="cart-item" key={i}>
        <img
          className="img-fluid"
          src={item.thumbnail}
          alt=""
        />
        <div className="description">
          <p>{item.title}</p>
          <span>{item.brand}</span>
          <strong>₹{item.price}/-</strong>
        </div>
        <div className="quantity">
          Quantity
          <select value={item.qty} onChange={(e)=>handleChange(e,item.id)}>
            <option value={1}>1</option>
            <option value={2}>2</option>
            <option value={3}>3</option>
          </select>
        </div>
        <div className='close'>
          <button onClick={()=>dispatch(deleteAsync(item.id))}>X</button>
        </div>
      </div>
    })}
  </div>
  </>
  );
}
