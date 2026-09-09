import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

export default function MealCard({ meal }) {
  const { addItem } = useCart();
  return (
    <article className="group bg-white rounded-3xl overflow-hidden border border-terra-500/15 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all">
      <div className="relative h-40 bg-gradient-to-br from-cream-100 via-terra-100 to-turmeric-400/30 grid place-items-center">
        <span className="text-6xl drop-shadow-sm">{meal.emoji}</span>
        <span
          className={`absolute top-3 left-3 inline-flex items-center gap-1 text-xs font-extrabold px-2.5 py-1 rounded-full border ${
            meal.type === "veg"
              ? "bg-leaf-500/15 text-leaf-600 border-leaf-500/30"
              : "bg-terra-500/15 text-terra-600 border-terra-500/30"
          }`}
        >
          <span className={`w-2 h-2 rounded-full ${meal.type === "veg" ? "bg-leaf-500" : "bg-terra-600"}`} />
          {meal.type === "veg" ? "VEG" : "NON-VEG"}
        </span>
        {meal.tag && (
          <span className="absolute top-3 right-3 text-xs font-extrabold px-2.5 py-1 rounded-full bg-cocoa-900 text-turmeric-400">
            {meal.tag}
          </span>
        )}
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between gap-2">
          <h3 className="font-display font-bold text-cocoa-900 leading-snug">
            <Link to={`/meal/${meal.id}`} className="hover:text-terra-600">{meal.name}</Link>
          </h3>
          <span className="shrink-0 text-sm font-extrabold text-terra-600">₹{meal.price}</span>
        </div>
        <p className="mt-1 text-sm text-cocoa-800/60 line-clamp-2">{meal.description}</p>
        <p className="mt-2 text-xs font-semibold text-cocoa-800/50">
          👩‍🍳 {meal.cookName} · ⭐ {meal.rating} · {meal.mealTime}
        </p>
        <div className="mt-3 flex gap-2">
          <button
            onClick={() => addItem(meal.id, "meal")}
            className="flex-1 rounded-full bg-terra-500 text-cream-50 text-sm font-bold py-2 hover:bg-terra-600 transition-colors"
          >
            Add to Cart +
          </button>
          <Link
            to={`/meal/${meal.id}`}
            className="rounded-full px-4 py-2 text-sm font-bold border-2 border-cream-200 hover:border-terra-500/40"
          >
            View
          </Link>
        </div>
      </div>
    </article>
  );
}
