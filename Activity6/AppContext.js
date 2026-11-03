import React, { createContext, useState } from 'react';

// Global state shared by every tab
export const AppContext = createContext();

export function AppProvider({ children }) {
  const [cart, setCart] = useState([]);
  const [updating, setUpdating] = useState(false);

  // Simulates a 1-second save before the cart changes
  const addToCart = (product) => {
    setUpdating(true);
    setTimeout(() => {
      setCart((prev) => [...prev, { ...product, cartId: Date.now().toString() }]);
      setUpdating(false);
    }, 1000);
  };

  const removeFromCart = (cartId) => {
    setCart((prev) => prev.filter((item) => item.cartId !== cartId));
  };

  return (
    <AppContext.Provider value={{ cart, updating, addToCart, removeFromCart }}>
      {children}
    </AppContext.Provider>
  );
}
