import { useCart } from "../context/CartContext";

export default function PlanCard({ plan }) {
  const { addItem } = useCart();
  return (
    <article className="relative bg-white rounded-3xl border-2 border-turmeric-400/30 p-6 shadow-sm hover:shadow-xl transition-all">
      {plan.tag && (
        <span className="absolute -top-3 left-6 text-xs font-extrabold px-3 py-1 rounded-full bg-turmeric-400 text-cocoa-900">
          {plan.tag}
        </span>
      )}
      <div className="text-5xl">{plan.emoji}</div>
      <h3 className="mt-3 font-display text-xl font-bold text-cocoa-900">{plan.name}</h3>
      <p className="text-sm font-semibold text-cocoa-800/55">{plan.duration}</p>
      <p className="mt-3">
        <span className="font-display text-3xl font-bold text-terra-600">₹{plan.price}</span>{" "}
        <span className="text-sm line-through text-cocoa-800/40">₹{plan.mrp}</span>{" "}
        <span className="text-xs font-bold text-leaf-600">₹{plan.perMeal}/meal</span>
      </p>
      <ul className="mt-3 space-y-1.5 text-sm text-cocoa-800/70">
        {plan.features.map((f) => (
          <li key={f}>✅ {f}</li>
        ))}
      </ul>
      <button
        onClick={() => addItem(plan.id, "plan")}
        className="mt-4 w-full rounded-full bg-cocoa-900 text-cream-50 font-bold py-2.5 hover:bg-cocoa-800"
      >
        Subscribe (mock) →
      </button>
    </article>
  );
}
