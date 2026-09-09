export default function CartItem({ title, subtitle, price, qty, onInc, onDec, onRemove, emoji }) {
  return (
    <div className="flex gap-3 bg-white rounded-2xl border border-terra-500/15 p-3">
      <div className="w-16 h-16 shrink-0 rounded-xl bg-cream-100 grid place-items-center text-3xl">{emoji}</div>
      <div className="flex-1 min-w-0">
        <p className="font-bold text-cocoa-900 truncate">{title}</p>
        <p className="text-xs text-cocoa-800/55 truncate">{subtitle}</p>
        <div className="mt-2 flex items-center justify-between">
          <div className="inline-flex items-center gap-2 rounded-full border border-cream-200 px-1 py-0.5">
            <button onClick={onDec} className="w-7 h-7 rounded-full hover:bg-cream-100 font-bold" aria-label="Decrease">−</button>
            <span className="text-sm font-extrabold min-w-5 text-center">{qty}</span>
            <button onClick={onInc} className="w-7 h-7 rounded-full hover:bg-cream-100 font-bold" aria-label="Increase">+</button>
          </div>
          <span className="font-extrabold text-terra-600">₹{price * qty}</span>
        </div>
      </div>
      <button onClick={onRemove} className="self-start text-cocoa-800/40 hover:text-terra-600 text-lg" aria-label="Remove">×</button>
    </div>
  );
}
