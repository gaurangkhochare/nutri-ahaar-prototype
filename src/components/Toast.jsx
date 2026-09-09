import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function Toast() {
  const { toast } = useCart();
  if (!toast) return null;
  return (
    <div
      key={toast.key}
      role="status"
      aria-live="polite"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[100] animate-[toast-in_0.25s_ease-out]"
    >
      <div className="flex items-center gap-3 bg-cocoa-900 text-cream-50 rounded-full pl-5 pr-3 py-2.5 shadow-2xl border border-cream-100/10 max-w-[90vw]">
        <span className="text-sm font-bold truncate">{toast.message}</span>
        <Link
          to="/cart"
          className="shrink-0 text-xs font-extrabold rounded-full bg-turmeric-400 text-cocoa-900 px-3 py-1.5 hover:brightness-105"
        >
          View Cart →
        </Link>
      </div>
      <style>{`@keyframes toast-in { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </div>
  );
}
