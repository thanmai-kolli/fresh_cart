// import React, { useState, useContext } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { Store } from "../contexts/Store";
// import styled from "styled-components";

// const Container = styled.div`
//   display:flex;
//   justify-content:center;
//   align-items:center;
//   height:100vh;
//   background: linear-gradient(to right, #56ab2f, #a8e063);
// `;

// const Card = styled.div`
//   background:#fff;
//   padding:40px 30px;
//   border-radius:20px;
//   box-shadow:0 10px 30px rgba(0,0,0,0.2);
//   text-align:center;
//   width:350px;

//   h2 {
//     margin-bottom:20px;
//     color:#56ab2f;
//   }

//   input {
//     width:80%;
//     margin:10px 0;
//   }

//   button {
//     width:50%;
//     padding:10px;
//     border:none;
//     border-radius:10px;
//     background: #56ab2f;
//     color:white;
//     font-weight:bold;
//     margin-top:15px;
//   }

//   button:hover { background:#4CAF50; }

//   .error { color:red; margin-top:10px; }
// `;

// export default function Login() {
//   const { setUser } = useContext(Store);
//   const [username,setUsername] = useState("");
//   const [password,setPassword] = useState("");
//   const [error,setError] = useState("");
//   const navigate = useNavigate();

//   const handleLogin = async () => {
//     try {
//       const res = await axios.post("http://localhost:5000/login",{username,password});
//       if(res.data.success) {
//         setUser(res.data.username);
//         navigate("/home");
//       }
//     } catch(err){ setError("Invalid credentials"); }
//   };

//   return (
//     <Container>
//       <Card>
//         <h2>FreshCart Login</h2>
//         <input placeholder="Username" value={username} onChange={e=>setUsername(e.target.value)}/>
//         <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)}/>
//         <button onClick={handleLogin}>Login</button>
//         {error && <p className="error">{error}</p>}
//       </Card>
//     </Container>
//   );
// }
import React, { useState, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Store } from "../contexts/Store";
import styled, { keyframes } from "styled-components";

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(-20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: linear-gradient(to right, #56ab2f, #a8e063);
  font-family: "Poppins", sans-serif;
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.85);
  backdrop-filter: blur(12px);
  padding: 40px 30px;
  border-radius: 25px;
  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.25);
  text-align: center;
  width: 360px;
  animation: ${fadeIn} 0.8s ease;

  h2 {
    margin-bottom: 20px;
    color: #2e7d32;
    font-weight: 700;
    font-size: 26px;
  }

  input {
    width: 85%;
    margin: 10px 0;
    padding: 12px;
    border-radius: 10px;
    border: 1px solid #ccc;
    outline: none;
    font-size: 15px;
    transition: all 0.3s ease;
  }

  input:focus {
    border-color: #56ab2f;
    box-shadow: 0 0 10px rgba(86, 171, 47, 0.3);
  }

  button {
    width: 60%;
    padding: 12px;
    border: none;
    border-radius: 12px;
    background: linear-gradient(to right, #56ab2f, #a8e063);
    color: white;
    font-weight: 600;
    font-size: 16px;
    margin-top: 20px;
    transition: all 0.3s ease;
    cursor: pointer;
  }

  button:hover {
    transform: scale(1.05);
    box-shadow: 0 0 12px rgba(86, 171, 47, 0.6);
  }

  .error {
    color: red;
    margin-top: 10px;
    font-size: 14px;
  }
`;

const Footer = styled.footer`
  background: rgba(0, 0, 0, 0.05);
  color: #333;
  text-align: center;
  padding: 10px 0;
  border-top: 2px solid #56ab2f;
  border-radius: 15px 15px 0 0;
  font-size: 15px;
  font-weight: 500;
  letter-spacing: 0.3px;
  position: absolute;
  bottom: 0;
  width: 100%;
`;

export default function Login() {
  const { setUser } = useContext(Store);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const res = await axios.post("http://localhost:5000/login", { username, password });
      if (res.data.success) {
        setUser(res.data.username);
        navigate("/home");
      }
    } catch (err) {
      setError("Invalid credentials. Please try again.");
    }
  };

  return (
    <Container>
      <Card>
        <h2>Welcome to FreshCart</h2>
        <input
          placeholder="Enter Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          placeholder="Enter Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button onClick={handleLogin}>Login</button>
        {error && <p className="error">{error}</p>}
      </Card>

      <Footer>
        Designed by <strong>B Neha</strong> — 23251A0572
      </Footer>
    </Container>
  );
}
