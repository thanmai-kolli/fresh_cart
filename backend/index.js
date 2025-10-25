const express = require("express");
const cors = require("cors");
const app = express();
app.use(cors());
app.use(express.json());

const products = require("./products.json");
const orders = [];

const users = [{ username:"thanmai", password:"thanmaikolli" }];

// Login
app.post("/login", (req,res)=>{
  const { username, password } = req.body;
  const user = users.find(u=>u.username===username && u.password===password);
  if(user) res.json({ success:true, username:user.username });
  else res.status(401).json({ success:false });
});

// Get Products
app.get("/products", (req,res)=>{ res.json(products); });

// Place Order
app.post("/orders", (req,res)=>{
  const { username, cart } = req.body;
  const id = orders.length+1;
  const total = cart.reduce((sum,p)=>sum+p.cost*p.quantity,0);
  orders.push({ id, username, cart, total, date: new Date() });
  res.json({ success:true });
});

// Get Orders
app.get("/orders/:username", (req,res)=>{
  const userOrders = orders.filter(o=>o.username===req.params.username);
  res.json(userOrders);
});

app.listen(5000, ()=>console.log("Server running on http://localhost:5000"));
