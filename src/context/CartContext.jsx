/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useState } from "react";

const CartContext = createContext(null);

export function CartProvider({ children }) {
  const [items, setItems] = useState([]); // { id, qty, kind: 'meal' | 'plan' }

  const addItem = (id, kind = "meal", qty = 1) => {
    setItems((prev) => {
      const found = prev.find((i) => i.id === id && i.kind === kind);
      if (found) {
        return prev.map((i) => (i === found ? { ...i, qty: i.qty + qty } : i));
      }
      return [...prev, { id, kind, qty }];
    });
  };

  const updateQty = (id, kind, qty) => {
    if (qty <= 0) {
      removeItem(id, kind);
      return;
    }
    setItems((prev) => prev.map((i) => (i.id === id && i.kind === kind ? { ...i, qty } : i)));
  };

  const removeItem = (id, kind) => {
    setItems((prev) => prev.filter((i) => !(i.id === id && i.kind === kind)));
  };

  const clearCart = () => setItems([]);

  return (
    <CartContext.Provider
      value={{
        items,
        addItem,
        updateQty,
        removeItem,
        clearCart,
        count: items.reduce((n, i) => n + i.qty, 0),
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export function useCart() {
  const ctx = useContext(CartContext);
  if (!ctx) throw new Error("useCart must be used within CartProvider");
  return ctx;
}
