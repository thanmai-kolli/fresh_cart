import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { GlobalStyles } from "./styles/GlobalStyles";
import { StoreProvider, Store } from "./contexts/Store";

// Pages
import Login from "./pages/Login";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Orders from "./pages/Orders";

function App() {
  return (
    <StoreProvider>
      <GlobalStyles />
      <Router>
        <Routes>
          <Route path="/" element={<LoginRedirect />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<ProtectedRoute><Home /></ProtectedRoute>} />
          <Route path="/cart" element={<ProtectedRoute><Cart /></ProtectedRoute>} />
          <Route path="/orders" element={<ProtectedRoute><Orders /></ProtectedRoute>} />
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Router>
    </StoreProvider>
  );
}

// Redirect logged-in users to home
function LoginRedirect() {
  const { user } = React.useContext(Store);
  return user ? <Navigate to="/home" /> : <Navigate to="/login" />;
}

// Protect routes if not logged in
function ProtectedRoute({ children }) {
  const { user } = React.useContext(Store);
  if (!user) return <Navigate to="/login" />;
  return children;
}

export default App;
