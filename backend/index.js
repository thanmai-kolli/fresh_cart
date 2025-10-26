// const express = require("express");
// const cors = require("cors");
// const app = express();
// app.use(cors());
// app.use(express.json());

// const products = require("./products.json");
// const orders = [];

// const users = [{ username:"thanmai", password:"thanmaikolli" }];

// // Login
// app.post("/login", (req,res)=>{
//   const { username, password } = req.body;
//   const user = users.find(u=>u.username===username && u.password===password);
//   if(user) res.json({ success:true, username:user.username });
//   else res.status(401).json({ success:false });
// });

// // Get Products
// app.get("/products", (req,res)=>{ res.json(products); });

// // Place Order
// app.post("/orders", (req,res)=>{
//   const { username, cart } = req.body;
//   const id = orders.length+1;
//   const total = cart.reduce((sum,p)=>sum+p.cost*p.quantity,0);
//   orders.push({ id, username, cart, total, date: new Date() });
//   res.json({ success:true });
// });

// // Get Orders
// app.get("/orders/:username", (req,res)=>{
//   const userOrders = orders.filter(o=>o.username===req.params.username);
//   res.json(userOrders);
// });

// app.listen(5000, ()=>console.log("Server running on http://localhost:5000"));
const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const app = express();
app.use(cors());
app.use(express.json());

// --- MySQL Connection ---
const db = mysql.createConnection({
  host: "localhost",
  user: "root",          // replace with your MySQL username
  password: "tHanmai@%3497",          // replace with your MySQL password
  database: "ecommerce_db"
});

db.connect((err) => {
  if (err) {
    console.error("❌ MySQL connection failed:", err);
  } else {
    console.log("✅ Connected to MySQL database.");
  }
});

// --- In-memory arrays for now ---
const products = require("./products.json");
const orders = [];

// --- LOGIN Route ---
app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const query = "SELECT * FROM users WHERE username = ? AND password = ?";

  db.query(query, [username, password], (err, results) => {
    if (err) {
      console.error("Error querying MySQL:", err);
      return res.status(500).json({ success: false, message: "DB error" });
    }

    if (results.length > 0) {
      res.json({ success: true, username });
    } else {
      res.status(401).json({ success: false, message: "Invalid credentials" });
    }
  });
});

// --- PRODUCTS Route ---
app.get("/products", (req, res) => {
  res.json(products);
});

// --- PLACE ORDER Route ---
app.post("/orders", (req, res) => {
  const { username, cart } = req.body;
  const id = orders.length + 1;
  const total = cart.reduce((sum, p) => sum + p.cost * p.quantity, 0);

  orders.push({ id, username, cart, total, date: new Date() });
  res.json({ success: true });
});

// --- GET USER ORDERS Route ---
app.get("/orders/:username", (req, res) => {
  const userOrders = orders.filter(o => o.username === req.params.username);
  res.json(userOrders);
});

// --- SERVER ---
app.listen(5000, () => console.log("🚀 Server running on http://localhost:5000"));
