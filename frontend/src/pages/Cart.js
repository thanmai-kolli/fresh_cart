import React, { useContext, useState } from "react";
import { Store } from "../contexts/Store";
import axios from "axios";
import styled from "styled-components";
import Header from "../components/Header";

const Container = styled.div`
  max-width:900px;
  margin:50px auto;
  background:#fff;
  padding:30px;
  border-radius:20px;
  box-shadow:0 8px 20px rgba(0,0,0,0.2);
`;

const Item = styled.div`
  display:flex;
  justify-content:space-between;
  align-items:center;
  margin:15px 0;
  border-bottom:1px solid #eee;
  padding-bottom:10px;

  input { width:60px; padding:5px; border-radius:8px; border:1px solid #ccc; }
  button { padding:5px 10px; background:#f44336; color:white; border:none; border-radius:8px; }
  button:hover { background:#d32f2f; }
`;

const PlaceOrder = styled.button`
  margin-top:20px;
  padding:10px 25px;
  background: linear-gradient(to right,#56ab2f,#a8e063);
  color:white;
  border:none;
  border-radius:12px;
  font-size:16px;
  font-weight:bold;
`;

export default function Cart() {
  const { cart, setCart, user } = useContext(Store);
  const [loading,setLoading] = useState(false);

  const updateQty = (id,qty)=>{ if(qty<1)return; setCart(cart.map(p=>p.id===id?{...p,quantity:qty}:p)); }
  const removeItem = (id)=>setCart(cart.filter(p=>p.id!==id));
  const total = cart.reduce((sum,p)=>sum+p.cost*p.quantity,0);

  const placeOrder = async () => {
    setLoading(true);
    await axios.post("http://localhost:5000/orders",{username:user, cart});
    setCart([]);
    setLoading(false);
    alert(`${user}, your order is in place!`);
  };

  return (
    <>
      <Header />
      <Container>
        <h2>{user}'s Cart</h2>
        {cart.length===0?<p>No items in cart</p>:cart.map(p=>(
          <Item key={p.id}>
            <span>{p.name} - ${p.cost}</span>
            <input type="number" value={p.quantity} onChange={e=>updateQty(p.id,parseInt(e.target.value))}/>
            <button onClick={()=>removeItem(p.id)}>Remove</button>
          </Item>
        ))}
        {cart.length>0 && (
          <>
            <h3>Total: ${total}</h3>
            <PlaceOrder onClick={placeOrder} disabled={loading}>{loading?"Placing...":"Place Order"}</PlaceOrder>
          </>
        )}
      </Container>
    </>
  );
}
