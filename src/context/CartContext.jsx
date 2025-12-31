import React, { createContext, useState, useContext } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  // 1. Add Item to Cart
  const addToCart = (product) => {
    setCart((prevCart) => {
      // Check if item already exists
      const existingItem = prevCart.find((item) => item.id === product.id);
      if (existingItem) {
        // If exists, increase quantity
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      // Else add new item with quantity 1
      return [...prevCart, { ...product, quantity: 1 }];
    });
    // Optional: Alert for feedback
    alert(`${product.name} added to cart!`);
  };

  // 2. Remove Item
  const removeFromCart = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  // 3. Update Quantity (+ or -)
  const updateQuantity = (id, amount) => {
    setCart((prevCart) => 
      prevCart.map((item) => {
        if (item.id === id) {
          const newQty = item.quantity + amount;
          return newQty > 0 ? { ...item, quantity: newQty } : item;
        }
        return item;
      })
    );
  };

  // 4. Calculate Total
  const OriginalTotal = cart.reduce((total, item) => total + (item.originalPrice * item.quantity), 0);
  const cartTotal = cart.reduce((total, item) => total + (item.discountedPrice * item.quantity), 0);
  const discountTotal = cart.reduce((total, item) => total + ((item.originalPrice - item.discountedPrice) * item.quantity), 0);
  const cartCount = cart.reduce((count, item) => count + item.quantity, 0);


  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, updateQuantity, cartTotal, cartCount, discountTotal, OriginalTotal }}>
      {children}
    </CartContext.Provider>
  );
};