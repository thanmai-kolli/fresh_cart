import React, { useContext } from "react";
import styled from "styled-components";
import { Store } from "../contexts/Store";

const Card = styled.div`
  background:#fff;
  border-radius:15px;
  padding:15px;
  width:200px;
  text-align:center;
  box-shadow:0 4px 15px rgba(0,0,0,0.2);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow:0 8px 20px rgba(0,0,0,0.25);
  }

  img {
    width:150px;
    height:150px;
    object-fit:cover;
    border-radius:10px;
    margin-bottom:10px;
  }

  button {
    background: linear-gradient(to right, #56ab2f, #a8e063);
    border:none;
    padding:8px 15px;
    border-radius:8px;
    color:white;
    font-weight:bold;
    margin-top:10px;
  }

  button:hover {
    background: linear-gradient(to right, #a8e063, #56ab2f);
  }
`;

export default function ProductCard({ product }) {
  const { cart, setCart } = useContext(Store);

  const addToCart = () => {
    const existing = cart.find(p => p.id === product.id);
    if(existing) setCart(cart.map(p => p.id===product.id ? {...p, quantity:p.quantity+1}:p));
    else setCart([...cart, {...product, quantity:1}]);
  };

  return (
    <Card>
      <img src={product.image} alt={product.name}/>
      <h4>{product.name}</h4>
      <p>{product.brand}</p>
      <p>${product.cost}</p>
      <button onClick={addToCart}>Add to Cart</button>
    </Card>
  );
}
