import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import ProductCard from "../components/ProductCard";
import styled from "styled-components";
import { Store } from "../contexts/Store";
import Header from "../components/Header";

const Container = styled.div`max-width:1200px;margin:40px auto;text-align:center;`;
const ProductsGrid = styled.div`
  display:grid;
  grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
  gap:20px;
  margin-top:30px;
`;
const Search = styled.input`
  padding:12px;
  width:300px;
  border-radius:10px;
  border:1px solid #ccc;
  outline:none;
  transition:0.3s;
  &:focus {
    border-color:#56ab2f;
    box-shadow:0 0 8px rgba(86,171,47,0.5);
  }
`;

export default function Home() {
  const { user } = useContext(Store);
  const [products,setProducts] = useState([]);
  const [search,setSearch] = useState("");

  useEffect(()=>{ axios.get("http://localhost:5000/products").then(res=>setProducts(res.data)); },[]);

  const filtered = products.filter(p=>p.name.toLowerCase().includes(search.toLowerCase()) || p.brand.toLowerCase().includes(search.toLowerCase()));

  return (
    <>
      <Header />
      <Container>
        <h2>Welcome, {user}</h2>
        <Search placeholder="Search products..." value={search} onChange={e=>setSearch(e.target.value)} />
        <ProductsGrid>
          {filtered.map(p=><ProductCard key={p.id} product={p}/>)}
        </ProductsGrid>
      </Container>
    </>
  );
}
