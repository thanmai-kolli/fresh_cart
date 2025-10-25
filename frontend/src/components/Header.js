import React, { useContext } from "react";
import styled from "styled-components";
import { Store } from "../contexts/Store";
import { useNavigate } from "react-router-dom";

const Nav = styled.nav`
  display:flex;
  justify-content:space-between;
  align-items:center;
  padding:15px 30px;
  background: linear-gradient(to right, #56ab2f, #a8e063);
  color:white;
  border-radius:0 0 15px 15px;
  box-shadow:0 4px 10px rgba(0,0,0,0.2);
  flex-wrap:wrap;
`;

const Logo = styled.div`
  display:flex;
  align-items:center;
  cursor:pointer;

  img {
    width:50px;
    height:50px;
    margin-right:10px;
    border-radius:10px;
    border:2px solid white;
  }

  h1 {
    font-weight:700;
    font-size:24px;
  }
`;

const Menu = styled.div`
  button {
    margin-left:15px;
    padding:8px 15px;
    border:none;
    border-radius:10px;
    font-weight:bold;
    cursor:pointer;
    background:white;
    color:#4CAF50;
    transition:0.3s;
  }

  button:hover {
    background:#4CAF50;
    color:white;
  }
`;

export default function Header() {
  const { cart, user } = useContext(Store);
  const navigate = useNavigate();

  return (
    <Nav>
      <Logo onClick={()=>navigate("/home")}>
        <img src="https://static.vecteezy.com/system/resources/previews/024/672/430/non_2x/shopping-cart-leaf-fresh-store-logo-design-template-logo-icon-a-shopping-cart-free-vector.jpg" alt="FreshCart Logo" />
        <h1>FreshCart</h1>
      </Logo>
      <Menu>
        <button onClick={()=>navigate("/home")}>Home</button>
        <button onClick={()=>navigate("/cart")}>Cart ({cart.reduce((sum,p)=>sum+p.quantity,0)})</button>
        <button onClick={()=>navigate("/orders")}>Orders</button>
      </Menu>
    </Nav>
  );
}
