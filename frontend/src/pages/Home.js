// import React, { useEffect, useState, useContext } from "react";
// import axios from "axios";
// import ProductCard from "../components/ProductCard";
// import styled from "styled-components";
// import { Store } from "../contexts/Store";
// import Header from "../components/Header";

// const Container = styled.div`max-width:1200px;margin:40px auto;text-align:center;`;
// const ProductsGrid = styled.div`
//   display:grid;
//   grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
//   gap:20px;
//   margin-top:30px;
// `;
// const Search = styled.input`
//   padding:12px;
//   width:300px;
//   border-radius:10px;
//   border:1px solid #ccc;
//   outline:none;
//   transition:0.3s;
//   &:focus {
//     border-color:#56ab2f;
//     box-shadow:0 0 8px rgba(86,171,47,0.5);
//   }
// `;

// export default function Home() {
//   const { user } = useContext(Store);
//   const [products,setProducts] = useState([]);
//   const [search,setSearch] = useState("");

//   useEffect(()=>{ axios.get("http://localhost:5000/products").then(res=>setProducts(res.data)); },[]);

//   const filtered = products.filter(p=>p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase()));

//   return (
//     <>
//       <Header />
//       <Container>
//         <h2>Welcome, {user}</h2>
//         <Search placeholder="Search products..." value={search} onChange={e=>setSearch(e.target.value)} />
//         <ProductsGrid>
//           {filtered.map(p=><ProductCard key={p.id} product={p}/>)}
//         </ProductsGrid>
//       </Container>
//     </>
//   );
// }

import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import styled from "styled-components";
import { Store } from "../contexts/Store";
import Header from "../components/Header";

const Container = styled.div`
  max-width: 1200px;
  margin: 40px auto;
  text-align: center;
  min-height: 80vh;
`;

const ProductsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
  gap: 25px;
  margin-top: 30px;
`;

const Search = styled.input`
  padding: 12px 16px;
  width: 320px;
  border-radius: 12px;
  border: 1px solid #ccc;
  outline: none;
  font-size: 15px;
  transition: 0.3s ease;
  &:focus {
    border-color: #56ab2f;
    box-shadow: 0 0 10px rgba(86, 171, 47, 0.4);
  }
`;

const Footer = styled.footer`
  background: linear-gradient(to right, #56ab2f, #a8e063);
  color: white;
  text-align: center;
  padding: 15px 0;
  border-top-left-radius: 15px;
  border-top-right-radius: 15px;
  font-size: 16px;
  font-weight: 500;
  letter-spacing: 0.5px;
  margin-top: 60px;
  box-shadow: 0 -4px 10px rgba(0, 0, 0, 0.1);
`;

export default function Home() {
  const { user } = useContext(Store);
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    axios.get("http://localhost:5000/products").then((res) => setProducts(res.data));
  }, []);

  const filtered = products.filter(
    (p) =>
      p.name.toLowerCase().includes(search.toLowerCase()) ||
      p.brand.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <Header />
      <Container>
        <h2 style={{ color: "#333", marginBottom: "20px" }}>Welcome, {user}</h2>
        <Search
          placeholder="Search products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ProductsGrid>
          {filtered.map((p) => (
            <ProductCard key={p.id} product={p} />
          ))}
        </ProductsGrid>
      </Container>
      <Footer>
        Designed by <strong>K Thanmai</strong> — 23251A0579
      </Footer>
    </>
  );
}
