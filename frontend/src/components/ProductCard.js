// import React, { useContext } from "react";
// import styled from "styled-components";
// import { Store } from "../contexts/Store";

// const Card = styled.div`
//   background:#fff;
//   border-radius:15px;
//   padding:15px;
//   width:200px;
//   text-align:center;
//   box-shadow:0 4px 15px rgba(0,0,0,0.2);
//   transition: all 0.3s ease;

//   &:hover {
//     transform: translateY(-5px);
//     box-shadow:0 8px 20px rgba(0,0,0,0.25);
//   }

//   img {
//     width:150px;
//     height:150px;
//     object-fit:cover;
//     border-radius:10px;
//     margin-bottom:10px;
//   }

//   button {
//     background: linear-gradient(to right, #56ab2f, #a8e063);
//     border:none;
//     padding:8px 15px;
//     border-radius:8px;
//     color:white;
//     font-weight:bold;
//     margin-top:10px;
//   }

//   button:hover {
//     background: linear-gradient(to right, #a8e063, #56ab2f);
//   }
// `;

// export default function ProductCard({ product }) {
//   const { cart, setCart } = useContext(Store);

//   const addToCart = () => {
//     const existing = cart.find(p => p.id === product.id);
//     if(existing) setCart(cart.map(p => p.id===product.id ? {...p, quantity:p.quantity+1}:p));
//     else setCart([...cart, {...product, quantity:1}]);
//   };

//   return (
//     <Card>
//       <img src={product.image} alt={product.name}/>
//       <h4>{product.name}</h4>
//       <p>{product.brand}</p>
//       <p>${product.cost}</p>
//       <button onClick={addToCart}>Add to Cart</button>
//     </Card>
//   );
// }

import React, { useContext, useState } from "react";
import styled, { keyframes } from "styled-components";
import { Store } from "../contexts/Store";

const Card = styled.div`
  background: #fff;
  padding: 20px;
  border-radius: 15px;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: 0.3s;
  position: relative;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 25px rgba(86, 171, 47, 0.3);
  }

  img {
    width: 100%;
    height: 150px;
    object-fit: cover;
    border-radius: 12px;
  }

  h3 {
    margin: 12px 0 5px;
    color: #333;
    font-size: 1.1rem;
  }

  p {
    color: #777;
    margin: 5px 0;
  }

  span {
    display: block;
    font-weight: bold;
    color: #2e7d32;
    margin-bottom: 10px;
  }

  button {
    background: linear-gradient(to right, #56ab2f, #a8e063);
    border: none;
    color: white;
    padding: 10px 18px;
    border-radius: 10px;
    cursor: pointer;
    font-weight: 600;
    transition: 0.3s;
  }

  button:hover {
    background: linear-gradient(to right, #3d8b1e, #8cd843);
  }
`;

// ========== Success Toast Animation ==========
const fadeInOut = keyframes`
  0% { opacity: 0; transform: translateY(10px); }
  20%, 80% { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(10px); }
`;

const SuccessMsg = styled.div`
  position: absolute;
  bottom: -35px;
  left: 50%;
  transform: translateX(-50%);
  background: rgba(86, 171, 47, 0.95);
  color: white;
  padding: 8px 16px;
  border-radius: 10px;
  font-size: 0.9rem;
  animation: ${fadeInOut} 2s ease;
  pointer-events: none;
`;

export default function ProductCard({ product }) {
  const { cart, setCart } = useContext(Store);
  const [showMsg, setShowMsg] = useState(false);

  const addToCart = () => {
    const existing = cart.find((p) => p.id === product.id);
    if (existing) {
      setCart(
        cart.map((p) =>
          p.id === product.id ? { ...p, quantity: p.quantity + 1 } : p
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
    // Show success message
    setShowMsg(true);
    setTimeout(() => setShowMsg(false), 2000);
  };

  return (
    <Card>
      <img src={product.image} alt={product.name} />
      <h3>{product.name}</h3>
      <p>{product.brand}</p>
      <span>${product.cost}</span>
      <button onClick={addToCart}>Add to Cart</button>
      {showMsg && <SuccessMsg>✅ Added to cart successfully!</SuccessMsg>}
    </Card>
  );
}

