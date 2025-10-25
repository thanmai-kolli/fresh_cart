import React, { useContext, useEffect, useState } from "react";
import { Store } from "../contexts/Store";
import axios from "axios";
import styled from "styled-components";
import Header from "../components/Header";

const Container = styled.div`max-width:900px;margin:50px auto;text-align:center;`;
const OrderCard = styled.div`
  background:#f9f9f9; padding:20px; border-radius:15px;
  margin:15px 0;
  box-shadow:0 4px 15px rgba(0,0,0,0.1);
`;

export default function Orders() {
  const { user } = useContext(Store);
  const [orders,setOrders] = useState([]);

  useEffect(()=>{
    axios.get(`http://localhost:5000/orders/${user}`).then(res=>setOrders(res.data));
  },[user]);

  return (
    <>
      <Header />
      <Container>
        <h2>{user}'s Orders</h2>
        {orders.length===0?<p>No orders yet</p>:orders.map(o=>(
          <OrderCard key={o.id}>
            <h4>Order #{o.id} - {new Date(o.date).toLocaleString()}</h4>
            <ul>{o.cart.map(p=><li key={p.id}>{p.name} x {p.quantity} - ${p.cost*p.quantity}</li>)}</ul>
            <strong>Total: ${o.total}</strong>
          </OrderCard>
        ))}
      </Container>
    </>
  );
}
