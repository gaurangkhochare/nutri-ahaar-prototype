import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { cartTotals, resolveCartItems } from "../utils/cart";

export default function Checkout() {
  const { items } = useCart();
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", phone: "", address: "", pay: "upi" });
  const detailed = resolveCartItems(items);
  const { total } = cartTotals(detailed);

  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }));

  const placeOrder = (e) => {
    e.preventDefault();
    navigate("/confirmation", { state: { name: form.name || "friend", total } });
  };

  if (items.length === 0) {
    navigate("/cart");
    return null;
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 grid md:grid-cols-[1fr_320px] gap-5">
      <form onSubmit={placeOrder} className="bg-white rounded-3xl border border-terra-500/15 p-5">
        <h1 className="font-display text-2xl font-bold">Checkout 💛 <span className="text-xs align-middle bg-turmeric-400/30 px-2 py-1 rounded-full">MOCK — no payment</span></h1>
        <label className="block mt-4 text-sm font-bold">
          Your name
          <input required value={form.name} onChange={set("name")} placeholder="e.g. Aarav Sharma"
            className="mt-1 w-full rounded-2xl border-2 border-cream-200 px-4 py-2.5 outline-none focus:border-terra-500/60 font-normal" />
        </label>
        <label className="block mt-3 text-sm font-bold">
          Phone
          <input required value={form.phone} onChange={set("phone")} placeholder="98765 43210"
            className="mt-1 w-full rounded-2xl border-2 border-cream-200 px-4 py-2.5 outline-none focus:border-terra-500/60 font-normal" />
        </label>
        <label className="block mt-3 text-sm font-bold">
          Delivery address
          <textarea required value={form.address} onChange={set("address")} placeholder="Hostel / PG / flat no., street…"
            rows={3}
            className="mt-1 w-full rounded-2xl border-2 border-cream-200 px-4 py-2.5 outline-none focus:border-terra-500/60 font-normal" />
        </label>
        <p className="mt-4 text-sm font-bold">Payment method (UI only)</p>
        <div className="mt-2 grid grid-cols-3 gap-2">
          {[["upi", "📱 UPI"], ["card", "💳 Card"], ["cod", "💵 COD"]].map(([v, label]) => (
            <label key={v} className={`cursor-pointer text-center text-sm font-bold rounded-2xl border-2 px-3 py-2.5 ${form.pay === v ? "border-terra-500 bg-terra-500/10" : "border-cream-200"}`}>
              <input type="radio" name="pay" value={v} checked={form.pay === v} onChange={set("pay")} className="hidden" />
              {label}
            </label>
          ))}
        </div>
        <button className="mt-5 w-full rounded-full bg-terra-500 text-cream-50 font-bold py-3 hover:bg-terra-600">
          Place order · ₹{total} →
        </button>
      </form>
      <aside className="bg-cream-100 rounded-3xl border border-terra-500/15 p-5 h-fit text-sm">
        <p className="font-bold">Order summary ({detailed.length})</p>
        <div className="mt-2 space-y-1">
          {detailed.map((i) => (
            <p key={`${i.kind}-${i.id}`} className="flex justify-between gap-2">
              <span>{i.emoji} {i.title} × {i.qty}</span><span className="font-bold">₹{i.price * i.qty}</span>
            </p>
          ))}
        </div>
        <p className="flex justify-between mt-3 pt-2 border-t border-terra-500/15 font-extrabold">
          <span>Total</span><span>₹{total}</span>
        </p>
      </aside>
    </div>
  );
}
