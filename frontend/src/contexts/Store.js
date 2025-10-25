
import React, { createContext, useState, useEffect } from "react";

export const Store = createContext();

export function StoreProvider({ children }) {
  const [user, setUser] = useState(null);
  const [cart, setCart] = useState(() => JSON.parse(localStorage.getItem("cart")) || []);

  useEffect(() => { localStorage.setItem("cart", JSON.stringify(cart)); }, [cart]);

  return (
    <Store.Provider value={{ user, setUser, cart, setCart }}>
      {children}
    </Store.Provider>
  );
}
