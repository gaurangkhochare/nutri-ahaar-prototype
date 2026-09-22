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
      <div className="bg-cocoa-900 text-cream-50 rounded-full px-5 py-2.5 shadow-2xl border border-cream-100/10 max-w-[90vw]">
        <span className="text-sm font-bold whitespace-nowrap">{toast.message}</span>
      </div>
      <style>{`@keyframes toast-in { from { opacity: 0; transform: translateY(12px); } to { opacity: 1; transform: translateY(0); } }`}</style>
    </div>
  );
}
