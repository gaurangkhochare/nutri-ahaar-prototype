import { Link } from "react-router-dom";
import CartItem from "../components/CartItem";
import { useCart } from "../context/CartContext";
import { cartTotals, resolveCartItems } from "../utils/cart";

export default function Cart() {
  const { items, updateQty, removeItem } = useCart();
  const detailed = resolveCartItems(items);
  const { subtotal, delivery, total } = cartTotals(detailed);

  if (items.length === 0) {
    return (
      <div className="max-w-2xl mx-auto px-4 py-16 text-center">
        <p className="text-6xl">🧺</p>
        <h1 className="font-display text-3xl font-bold mt-3">Your thali is empty</h1>
        <p className="text-cocoa-800/60 mt-1">Add something warm and homely.</p>
        <Link to="/menu" className="mt-5 inline-block rounded-full bg-terra-500 text-cream-50 px-6 py-3 font-bold">
          Browse menu →
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-4 py-8 grid md:grid-cols-[1fr_320px] gap-5">
      <div>
        <h1 className="font-display text-3xl font-bold">Your cart 🧺</h1>
        <div className="mt-4 space-y-3">
          {detailed.map((i) => (
            <CartItem
              key={`${i.kind}-${i.id}`}
              title={i.title}
              subtitle={i.subtitle}
              price={i.price}
              qty={i.qty}
              emoji={i.emoji}
              image={i.image}
              onInc={() => updateQty(i.id, i.kind, i.qty + 1)}
              onDec={() => updateQty(i.id, i.kind, i.qty - 1)}
              onRemove={() => removeItem(i.id, i.kind)}
            />
          ))}
        </div>
      </div>
      <aside className="bg-white rounded-3xl border border-terra-500/15 p-5 h-fit md:sticky md:top-28">
        <p className="font-display font-bold text-lg">Bill summary</p>
        <div className="mt-3 space-y-1.5 text-sm">
          <p className="flex justify-between"><span>Subtotal</span><span className="font-bold">₹{subtotal}</span></p>
          <p className="flex justify-between">
            <span>Delivery</span>
            <span className="font-bold">{delivery === 0 ? "FREE 🎉" : `₹${delivery}`}</span>
          </p>
          {delivery > 0 && <p className="text-xs text-cocoa-800/55">Free delivery over ₹299</p>}
          <p className="flex justify-between text-base font-extrabold border-t border-cream-200 pt-2">
            <span>Total</span><span className="text-terra-600">₹{total}</span>
          </p>
        </div>
        <Link to="/checkout" className="mt-4 block text-center rounded-full bg-terra-500 text-cream-50 font-bold py-3 hover:bg-terra-600">
          Proceed to checkout →
        </Link>
        <Link to="/menu" className="mt-2 block text-center text-sm font-bold text-terra-600">+ Add more food</Link>
      </aside>
    </div>
  );
}
