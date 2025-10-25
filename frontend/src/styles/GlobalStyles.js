import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  body {
    margin:0;
    padding:0;
    font-family: 'Poppins', sans-serif;
    background: linear-gradient(to bottom right, #f5f7fa, #c3cfe2);
  }

  h1,h2,h3,h4,h5,h6 {
    margin:0;
    color:#333;
  }

  button {
    cursor:pointer;
    transition: all 0.3s ease;
  }

  button:hover {
    transform: scale(1.05);
  }

  input {
    border-radius: 8px;
    border: 1px solid #ccc;
    padding: 10px;
    outline: none;
    transition: all 0.3s ease;
  }

  input:focus {
    border-color: #56ab2f;
    box-shadow: 0 0 5px rgba(86,171,47,0.5);
  }
`;
