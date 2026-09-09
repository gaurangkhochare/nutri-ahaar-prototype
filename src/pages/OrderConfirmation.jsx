import { Link, useLocation } from "react-router-dom";
import { useEffect, useId } from "react";
import { useCart } from "../context/CartContext";
import Button from "../components/Button";

export default function OrderConfirmation() {
  const { state } = useLocation();
  const { clearCart, items } = useCart();
  const rawId = useId();
  const orderId = `#NA-${rawId.replace(/[^A-Za-z0-9]/g, "").toUpperCase().slice(-6).padStart(4, "0")}`;

  useEffect(() => {
    if (items.length > 0) clearCart();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="max-w-2xl mx-auto px-4 py-14 text-center">
      <div className="bg-white rounded-[2rem] border border-terra-500/15 p-8 shadow-xl">
        <p className="text-7xl">🎉</p>
        <h1 className="font-display text-3xl md:text-4xl font-bold mt-3">
          Shabaash, {state?.name || "friend"}!
        </h1>
        <p className="mt-2 text-cocoa-800/70">
          Your meal is on its way, just like mom used to send! 🍲
        </p>
        <div className="mt-4 inline-block rounded-2xl bg-cream-100 px-5 py-3 text-sm">
          🧾 Mock Order ID <b>{orderId}</b>
          {state?.total != null && <> · Paid (mock) <b>₹{state.total}</b></>}
          <br />⏱ Estimated delivery: <b>35–45 min</b>
        </div>
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <Button to="/menu">Order more 🍛</Button>
          <Button to="/plans" variant="secondary">Try a tiffin plan</Button>
        </div>
        <Link to="/" className="mt-4 inline-block text-sm font-bold text-terra-600">← Back home</Link>
      </div>
    </div>
  );
}
