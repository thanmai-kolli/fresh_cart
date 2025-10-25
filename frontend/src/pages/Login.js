import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Store } from "../contexts/Store";
import styled from "styled-components";

const Container = styled.div`
  display:flex;
  justify-content:center;
  align-items:center;
  height:100vh;
  background: linear-gradient(to right, #56ab2f, #a8e063);
`;

const Card = styled.div`
  background:#fff;
  padding:40px 30px;
  border-radius:20px;
  box-shadow:0 10px 30px rgba(0,0,0,0.2);
  text-align:center;
  width:350px;

  h2 {
    margin-bottom:20px;
    color:#56ab2f;
  }

  input {
    width:80%;
    margin:10px 0;
  }

  button {
    width:50%;
    padding:10px;
    border:none;
    border-radius:10px;
    background: #56ab2f;
    color:white;
    font-weight:bold;
    margin-top:15px;
  }

  button:hover { background:#4CAF50; }

  .error { color:red; margin-top:10px; }
`;

export default function Login() {
  const { setUser } = useContext(Store);
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");
  const [error,setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/login",{username,password});
      if(res.data.success) {
        setUser(res.data.username);
        navigate("/home");
      }
    } catch(err){ setError("Invalid credentials"); }
  };

  return (
    <Container>
      <Card>
        <h2>FreshCart Login</h2>
        <input placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)}/>
        <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
        <button onClick={handleLogin}>Login</button>
        {error && <p className="error">{error}</p>}
      </Card>
    </Container>
  );
}
