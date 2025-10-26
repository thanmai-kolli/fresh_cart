// // import React, { useContext, useState } from "react";
// // import { Store } from "../contexts/Store";
// // import axios from "axios";
// // import styled from "styled-components";
// // import Header from "../components/Header";

// // const Container = styled.div`
// //   max-width:900px;
// //   margin:50px auto;
// //   background:#fff;
// //   padding:30px;
// //   border-radius:20px;
// //   box-shadow:0 8px 20px rgba(0,0,0,0.2);
// // `;

// // const Item = styled.div`
// //   display:flex;
// //   justify-content:space-between;
// //   align-items:center;
// //   margin:15px 0;
// //   border-bottom:1px solid #eee;
// //   padding-bottom:10px;

// //   input { width:60px; padding:5px; border-radius:8px; border:1px solid #ccc; }
// //   button { padding:5px 10px; background:#f44336; color:white; border:none; border-radius:8px; }
// //   button:hover { background:#d32f2f; }
// // `;

// // const PlaceOrder = styled.button`
// //   margin-top:20px;
// //   padding:10px 25px;
// //   background: linear-gradient(to right,#56ab2f,#a8e063);
// //   color:white;
// //   border:none;
// //   border-radius:12px;
// //   font-size:16px;
// //   font-weight:bold;
// // `;

// // export default function Cart() {
// //   const { cart, setCart, user } = useContext(Store);
// //   const [loading,setLoading] = useState(false);

// //   const updateQty = (id,qty)=>{ if(qty<1)return; setCart(cart.map(p=>p.id===id?{...p,quantity:qty}:p)); }
// //   const removeItem = (id)=>setCart(cart.filter(p=>p.id!==id));
// //   const total = cart.reduce((sum,p)=>sum+p.cost*p.quantity,0);

// //   const placeOrder = async () => {
// //     setLoading(true);
// //     await axios.post("http://localhost:5000/orders",{username:user, cart});
// //     setCart([]);
// //     setLoading(false);
// //     alert(`${user}, your order is in place!`);
// //   };

// //   return (
// //     <>
// //       <Header />
// //       <Container>
// //         <h2>{user}'s Cart</h2>
// //         {cart.length===0?<p>No items in cart</p>:cart.map(p=>(
// //           <Item key={p.id}>
// //             <span>{p.name} - ${p.cost}</span>
// //             <input type="number" value={p.quantity} onChange={e=>updateQty(p.id,parseInt(e.target.value))}/>
// //             <button onClick={()=>removeItem(p.id)}>Remove</button>
// //           </Item>
// //         ))}
// //         {cart.length>0 && (
// //           <>
// //             <h3>Total: ${total}</h3>
// //             <PlaceOrder onClick={placeOrder} disabled={loading}>{loading?"Placing...":"Place Order"}</PlaceOrder>
// //           </>
// //         )}
// //       </Container>
// //     </>
// //   );
// // }
// import React, { useContext, useState } from "react";
// import { Store } from "../contexts/Store";
// import axios from "axios";
// import styled, { keyframes } from "styled-components";
// import Header from "../components/Header";

// // =================== STYLED COMPONENTS ===================
// const Container = styled.div`
//   max-width: 900px;
//   margin: 50px auto;
//   background: #fff;
//   padding: 30px;
//   border-radius: 20px;
//   box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
// `;

// const Item = styled.div`
//   display: flex;
//   justify-content: space-between;
//   align-items: center;
//   margin: 15px 0;
//   border-bottom: 1px solid #eee;
//   padding-bottom: 10px;

//   input {
//     width: 60px;
//     padding: 5px;
//     border-radius: 8px;
//     border: 1px solid #ccc;
//     text-align: center;
//   }

//   button {
//     padding: 5px 10px;
//     background: #f44336;
//     color: white;
//     border: none;
//     border-radius: 8px;
//     cursor: pointer;
//   }

//   button:hover {
//     background: #d32f2f;
//   }
// `;

// const PlaceOrder = styled.button`
//   margin-top: 20px;
//   padding: 10px 25px;
//   background: linear-gradient(to right, #56ab2f, #a8e063);
//   color: white;
//   border: none;
//   border-radius: 12px;
//   font-size: 16px;
//   font-weight: bold;
//   cursor: pointer;

//   &:hover {
//     background: linear-gradient(to right, #3d8b1e, #8cd843);
//   }

//   &:disabled {
//     opacity: 0.7;
//     cursor: not-allowed;
//   }
// `;

// // ============== POP-UP STYLES ==================
// const fadeIn = keyframes`
//   from { opacity: 0; transform: scale(0.8); }
//   to { opacity: 1; transform: scale(1); }
// `;

// const Backdrop = styled.div`
//   position: fixed;
//   inset: 0;
//   background: rgba(0, 0, 0, 0.6);
//   backdrop-filter: blur(4px);
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   animation: ${fadeIn} 0.3s ease;
//   z-index: 999;
// `;

// const Modal = styled.div`
//   background: white;
//   padding: 40px 60px;
//   border-radius: 20px;
//   text-align: center;
//   box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
//   animation: ${fadeIn} 0.4s ease;

//   h2 {
//     color: #2e7d32;
//     margin-bottom: 15px;
//   }

//   p {
//     font-size: 18px;
//     color: #444;
//   }

//   button {
//     margin-top: 25px;
//     background: linear-gradient(to right, #56ab2f, #a8e063);
//     border: none;
//     color: white;
//     font-size: 16px;
//     font-weight: bold;
//     border-radius: 12px;
//     padding: 10px 25px;
//     cursor: pointer;
//   }

//   button:hover {
//     background: linear-gradient(to right, #3d8b1e, #8cd843);
//   }
// `;

// // =================== MAIN COMPONENT ===================
// export default function Cart() {
//   const { cart, setCart, user } = useContext(Store);
//   const [loading, setLoading] = useState(false);
//   const [showModal, setShowModal] = useState(false);

//   const updateQty = (id, qty) => {
//     if (qty < 1) return;
//     setCart(cart.map((p) => (p.id === id ? { ...p, quantity: qty } : p)));
//   };

//   const removeItem = (id) => setCart(cart.filter((p) => p.id !== id));

//   const total = cart.reduce((sum, p) => sum + p.cost * p.quantity, 0);

//   const placeOrder = async () => {
//     setLoading(true);
//     await axios.post("http://localhost:5000/orders", { username: user, cart });
//     setCart([]);
//     setLoading(false);
//     setShowModal(true);
//   };

//   return (
//     <>
//       <Header />
//       <Container>
//         <h2>{user}'s Cart</h2>
//         {cart.length === 0 ? (
//           <p>No items in cart</p>
//         ) : (
//           cart.map((p) => (
//             <Item key={p.id}>
//               <span>
//                 {p.name} - ${p.cost}
//               </span>
//               <input
//                 type="number"
//                 value={p.quantity}
//                 onChange={(e) => updateQty(p.id, parseInt(e.target.value))}
//               />
//               <button onClick={() => removeItem(p.id)}>Remove</button>
//             </Item>
//           ))
//         )}
//         {cart.length > 0 && (
//           <>
//             <h3>Total: ${total}</h3>
//             <PlaceOrder onClick={placeOrder} disabled={loading}>
//               {loading ? "Placing..." : "Place Order"}
//             </PlaceOrder>
//           </>
//         )}
//       </Container>

//       {/* POPUP MODAL */}
//       {showModal && (
//         <Backdrop>
//           <Modal>
//             <h2>Order Placed Successfully! 🛒</h2>
//             <p>
//               {user}, your order is in place.<br />Thank you for shopping with{" "}
//               <strong>FreshCart</strong>!
//             </p>
//             <button onClick={() => setShowModal(false)}>OK</button>
//           </Modal>
//         </Backdrop>
//       )}
//     </>
//   );
// }

import React, { useContext, useState } from "react";
import { Store } from "../contexts/Store";
import axios from "axios";
import styled, { keyframes } from "styled-components";
import Header from "../components/Header";

// =================== STYLED COMPONENTS ===================
const Container = styled.div`
  max-width: 900px;
  margin: 50px auto 100px;
  background: #fff;
  padding: 30px;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  text-align: center;
  font-family: "Poppins", sans-serif;

  h2 {
    color: #2e7d32;
    margin-bottom: 20px;
  }

  h3 {
    margin-top: 25px;
    font-size: 20px;
    color: #333;
  }
`;

const Item = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 15px 0;
  border-bottom: 1px solid #eee;
  padding-bottom: 10px;

  span {
    flex: 1;
    text-align: left;
    font-weight: 500;
    color: #444;
  }

  input {
    width: 60px;
    padding: 6px;
    border-radius: 8px;
    border: 1px solid #ccc;
    text-align: center;
    margin-right: 10px;
  }

  button {
    padding: 7px 12px;
    background: #f44336;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 14px;
    transition: 0.3s ease;
  }

  button:hover {
    background: #d32f2f;
    transform: scale(1.05);
  }
`;

const PlaceOrder = styled.button`
  margin-top: 20px;
  padding: 12px 30px;
  background: linear-gradient(to right, #56ab2f, #a8e063);
  color: white;
  border: none;
  border-radius: 12px;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    background: linear-gradient(to right, #3d8b1e, #8cd843);
    transform: scale(1.05);
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
`;

// ============== POP-UP STYLES ==================
const fadeIn = keyframes`
  from { opacity: 0; transform: scale(0.8); }
  to { opacity: 1; transform: scale(1); }
`;

const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.6);
  backdrop-filter: blur(5px);
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${fadeIn} 0.3s ease;
  z-index: 999;
`;

const Modal = styled.div`
  background: white;
  padding: 50px 60px;
  border-radius: 25px;
  text-align: center;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.3);
  animation: ${fadeIn} 0.4s ease;

  h2 {
    color: #2e7d32;
    margin-bottom: 15px;
  }

  p {
    font-size: 18px;
    color: #444;
    line-height: 1.6;
  }

  button {
    margin-top: 25px;
    background: linear-gradient(to right, #56ab2f, #a8e063);
    border: none;
    color: white;
    font-size: 16px;
    font-weight: bold;
    border-radius: 12px;
    padding: 10px 25px;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  button:hover {
    background: linear-gradient(to right, #3d8b1e, #8cd843);
    transform: scale(1.05);
  }
`;

const Footer = styled.footer`
  text-align: center;
  padding: 15px 0;
  background: linear-gradient(to right, #56ab2f, #a8e063);
  color: white;
  font-weight: 500;
  letter-spacing: 0.5px;
  font-size: 15px;
  border-radius: 20px 20px 0 0;
  margin-top: 40px;
`;

// =================== MAIN COMPONENT ===================
export default function Cart() {
  const { cart, setCart, user } = useContext(Store);
  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const updateQty = (id, qty) => {
    if (qty < 1) return;
    setCart(cart.map((p) => (p.id === id ? { ...p, quantity: qty } : p)));
  };

  const removeItem = (id) => setCart(cart.filter((p) => p.id !== id));

  const total = cart.reduce((sum, p) => sum + p.cost * p.quantity, 0);

  const placeOrder = async () => {
    setLoading(true);
    await axios.post("http://localhost:5000/orders", { username: user, cart });
    setCart([]);
    setLoading(false);
    setShowModal(true);
  };

  return (
    <>
      <Header />
      <Container>
        <h2>{user}'s Cart</h2>
        {cart.length === 0 ? (
          <p>No items in cart</p>
        ) : (
          cart.map((p) => (
            <Item key={p.id}>
              <span>
                {p.name} - ${p.cost}
              </span>
              <input
                type="number"
                value={p.quantity}
                onChange={(e) => updateQty(p.id, parseInt(e.target.value))}
              />
              <button onClick={() => removeItem(p.id)}>Remove</button>
            </Item>
          ))
        )}
        {cart.length > 0 && (
          <>
            <h3>Total: ${total}</h3>
            <PlaceOrder onClick={placeOrder} disabled={loading}>
              {loading ? "Placing..." : "Place Order"}
            </PlaceOrder>
          </>
        )}
      </Container>

      {/* POPUP MODAL */}
      {showModal && (
        <Backdrop>
          <Modal>
            <h2>Order Placed Successfully! 🛒</h2>
            <p>
              {user}, your order has been placed successfully.
              <br /> Thank you for shopping with <strong>FreshCart</strong>!
            </p>
            <button onClick={() => setShowModal(false)}>OK</button>
          </Modal>
        </Backdrop>
      )}

      {/* FOOTER */}
      <Footer>Designed by <strong> N Siri — 23251A0589</strong></Footer>
    </>
  );
}
