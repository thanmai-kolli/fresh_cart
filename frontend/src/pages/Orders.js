// import React, { useContext, useEffect, useState } from "react";
// import { Store } from "../contexts/Store";
// import axios from "axios";
// import styled from "styled-components";
// import Header from "../components/Header";

// const Container = styled.div`max-width:900px;margin:50px auto;text-align:center;`;
// const OrderCard = styled.div`
//   background:#f9f9f9; padding:20px; border-radius:15px;
//   margin:15px 0;
//   box-shadow:0 4px 15px rgba(0,0,0,0.1);
// `;

// export default function Orders() {
//   const { user } = useContext(Store);
//   const [orders,setOrders] = useState([]);

//   useEffect(()=>{
//     axios.get(`http://localhost:5000/orders/${user}`).then(res=>setOrders(res.data));
//   },[user]);

//   return (
//     <>
//       <Header />
//       <Container>
//         <h2>{user}'s Orders</h2>
//         {orders.length===0?<p>No orders yet</p>:orders.map(o=>(
//           <OrderCard key={o.id}>
//             <h4>Order #{o.id} - {new Date(o.date).toLocaleString()}</h4>
//             <ul>{o.cart.map(p=><li key={p.id}>{p.name} x {p.quantity} - ${p.cost*p.quantity}</li>)}</ul>
//             <strong>Total: ${o.total}</strong>
//           </OrderCard>
//         ))}
//       </Container>
//     </>
//   );
// }
// import React, { useContext, useEffect, useState } from "react";
// import { Store } from "../contexts/Store";
// import axios from "axios";
// import styled, { keyframes } from "styled-components";
// import Header from "../components/Header";

// // ========== STYLED COMPONENTS ==========
// const fadeIn = keyframes`
//   from { opacity: 0; transform: translateY(10px); }
//   to { opacity: 1; transform: translateY(0); }
// `;

// const Container = styled.div`
//   max-width: 900px;
//   margin: 50px auto;
//   text-align: center;
//   padding: 20px;
// `;

// const Title = styled.h2`
//   color: #2e7d32;
//   margin-bottom: 30px;
//   font-size: 2rem;
//   font-weight: 700;
//   letter-spacing: 1px;
// `;

// const OrderCard = styled.div`
//   background: #ffffff;
//   padding: 25px;
//   border-radius: 20px;
//   margin: 20px 0;
//   box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
//   text-align: left;
//   transition: all 0.3s ease;
//   animation: ${fadeIn} 0.4s ease;
//   position: relative;
//   overflow: hidden;

//   &:hover {
//     transform: translateY(-3px);
//     box-shadow: 0 10px 25px rgba(76, 175, 80, 0.3);
//   }

//   h4 {
//     color: #388e3c;
//     margin-bottom: 12px;
//     font-size: 1.1rem;
//     font-weight: 600;
//   }

//   ul {
//     list-style: none;
//     padding: 0;
//     margin: 10px 0;
//   }

//   li {
//     padding: 8px 0;
//     font-size: 1rem;
//     color: #333;
//     border-bottom: 1px solid #f1f1f1;
//     display: flex;
//     justify-content: space-between;
//   }

//   strong {
//     display: block;
//     margin-top: 15px;
//     font-size: 1.1rem;
//     color: #1b5e20;
//     text-align: right;
//   }
// `;

// const OrderHeader = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   background: linear-gradient(to right, #56ab2f, #a8e063);
//   color: white;
//   padding: 12px 18px;
//   border-radius: 15px;
//   margin-bottom: 15px;
//   font-weight: 600;
//   font-size: 1rem;
// `;

// const Empty = styled.p`
//   color: #555;
//   font-size: 1.1rem;
//   margin-top: 30px;
//   background: #f0f0f0;
//   padding: 20px;
//   border-radius: 12px;
//   display: inline-block;
// `;

// // ========== MAIN COMPONENT ==========
// export default function Orders() {
//   const { user } = useContext(Store);
//   const [orders, setOrders] = useState([]);

//   useEffect(() => {
//     axios
//       .get(`http://localhost:5000/orders/${user}`)
//       .then((res) => setOrders(res.data))
//       .catch((err) => console.error("Error fetching orders:", err));
//   }, [user]);

//   return (
//     <>
//       <Header />
//       <Container>
//         <Title>{user}'s Orders</Title>
//         {orders.length === 0 ? (
//           <Empty>No orders yet 😔</Empty>
//         ) : (
//           orders.map((o) => (
//             <OrderCard key={o.id}>
//               <OrderHeader>
//                 <span>Order #{o.id}</span>
//                 <span>{new Date(o.date).toLocaleString()}</span>
//               </OrderHeader>
//               <ul>
//                 {o.cart.map((p) => (
//                   <li key={p.id}>
//                     <span>
//                       {p.name} × {p.quantity}
//                     </span>
//                     <span>${p.cost * p.quantity}</span>
//                   </li>
//                 ))}
//               </ul>
//               <strong>Total: ${o.total}</strong>
//             </OrderCard>
//           ))
//         )}
//         <Footer>Developed by <strong> S Usha Rani - 24255A0507 </strong></Footer>
//       </Container>
//     </>
//   );
// }
import React, { useContext, useEffect, useState } from "react";
import { Store } from "../contexts/Store";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import Header from "../components/Header";

// ========== STYLED COMPONENTS ==========
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
  max-width: 900px;
  margin: 50px auto;
  text-align: center;
  padding: 20px;
`;

const Title = styled.h2`
  color: #2e7d32;
  margin-bottom: 30px;
  font-size: 2rem;
  font-weight: 700;
  letter-spacing: 1px;
`;

const OrderCard = styled.div`
  background: #ffffff;
  padding: 25px;
  border-radius: 20px;
  margin: 20px 0;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.1);
  text-align: left;
  transition: all 0.3s ease;
  animation: ${fadeIn} 0.4s ease;
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 10px 25px rgba(76, 175, 80, 0.3);
  }

  h4 {
    color: #388e3c;
    margin-bottom: 12px;
    font-size: 1.1rem;
    font-weight: 600;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 10px 0;
  }

  li {
    padding: 8px 0;
    font-size: 1rem;
    color: #333;
    border-bottom: 1px solid #f1f1f1;
    display: flex;
    justify-content: space-between;
  }

  strong {
    display: block;
    margin-top: 15px;
    font-size: 1.1rem;
    color: #1b5e20;
    text-align: right;
  }
`;

const OrderHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: linear-gradient(to right, #56ab2f, #a8e063);
  color: white;
  padding: 12px 18px;
  border-radius: 15px;
  margin-bottom: 15px;
  font-weight: 600;
  font-size: 1rem;
`;

const Empty = styled.p`
  color: #555;
  font-size: 1.1rem;
  margin-top: 30px;
  background: #f0f0f0;
  padding: 20px;
  border-radius: 12px;
  display: inline-block;
`;

const Footer = styled.footer`
  margin-top: 50px;
  text-align: center;
  font-size: 0.95rem;
  color: #2e7d32;
  font-weight: 600;
  background: linear-gradient(to right, #e8f5e9, #f1f8e9);
  padding: 15px;
  border-radius: 12px;
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  box-shadow: 0 4px 10px rgba(0,0,0,0.1);
`;

// ========== MAIN COMPONENT ==========
export default function Orders() {
  const { user } = useContext(Store);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/orders/${user}`)
      .then((res) => setOrders(res.data))
      .catch((err) => console.error("Error fetching orders:", err));
  }, [user]);

  return (
    <>
      <Header />
      <Container>
        <Title>{user}'s Orders</Title>
        {orders.length === 0 ? (
          <Empty>No orders yet 😔</Empty>
        ) : (
          orders.map((o) => (
            <OrderCard key={o.id}>
              <OrderHeader>
                <span>Order #{o.id}</span>
                <span>{new Date(o.date).toLocaleString()}</span>
              </OrderHeader>
              <ul>
                {o.cart.map((p) => (
                  <li key={p.id}>
                    <span>
                      {p.name} × {p.quantity}
                    </span>
                    <span>${p.cost * p.quantity}</span>
                  </li>
                ))}
              </ul>
              <strong>Total: ${o.total}</strong>
            </OrderCard>
          ))
        )}

        {/* FOOTER */}
        <Footer>Designed by <strong>Usha Rani - 24255A0507 </strong></Footer>
      </Container>
    </>
  );
}

