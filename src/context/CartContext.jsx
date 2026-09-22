/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useRef, useState } from "react";
import { getMealById } from "../data/mockMeals";
import { plans } from "../data/mockPlans";

const CartContext = createContext(null);

const TOAST_DURATION_MS = 2200;

export function CartProvider({ children }) {
  const [items, setItems] = useState([]); // { id, qty, kind: 'meal' | 'plan' }
  const [toast, setToast] = useState(null); // { key, message }
  const timer = useRef(null);

  const showToast = (message) => {
    if (timer.current) clearTimeout(timer.current);
    setToast({ key: `${Date.now()}`, message });
    timer.current = setTimeout(() => setToast(null), TOAST_DURATION_MS);
  };

  useEffect(() => () => {
    if (timer.current) clearTimeout(timer.current);
  }, []);

  const addItem = (id, kind = "meal", qty = 1) => {
    setItems((prev) => {
      const found = prev.find((i) => i.id === id && i.kind === kind);
      if (found) {
        return prev.map((i) => (i === found ? { ...i, qty: i.qty + qty } : i));
      }
      return [...prev, { id, kind, qty }];
    });
    if (kind === "plan") {
      const plan = plans.find((p) => String(p.id) === String(id));
      showToast(`${plan?.name || "Tiffin plan"} added to Cart`);
    } else {
      const meal = getMealById(id);
      showToast(`Added ${meal?.name || "Meal"} to Cart`);
    }
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
        toast,
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
