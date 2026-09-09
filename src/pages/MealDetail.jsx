import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { getMealById } from "../data/mockMeals";

export default function MealDetail() {
  const { id } = useParams();
  const meal = getMealById(id);
  const { addItem } = useCart();
  const [qty, setQty] = useState(1);

  if (!meal) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-16 text-center">
        <p className="text-5xl">🥺</p>
        <h1 className="font-display text-2xl font-bold mt-3">Dish not found</h1>
        <Link to="/menu" className="mt-4 inline-block rounded-full bg-terra-500 text-cream-50 px-6 py-2.5 font-bold">
          Back to menu
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-5xl mx-auto px-4 py-8 grid md:grid-cols-2 gap-6">
      <div className="rounded-[2rem] bg-gradient-to-br from-cream-100 via-terra-100 to-turmeric-400/30 min-h-72 grid place-items-center p-10 border border-terra-500/15">
        <span className="text-9xl">{meal.emoji}</span>
      </div>
      <div>
        <Link to="/menu" className="text-sm font-bold text-terra-600">← Back to menu</Link>
        <h1 className="font-display text-3xl md:text-4xl font-bold mt-2">{meal.name}</h1>
        <p className="mt-1 text-sm font-semibold text-cocoa-800/55">👩‍🍳 Cooked by {meal.cookName} · ⭐ {meal.rating}</p>
        <p className="mt-3 text-cocoa-800/70">{meal.description}</p>
        <p className="mt-4 font-display text-3xl font-bold text-terra-600">₹{meal.price}</p>
        <div className="mt-4 flex items-center gap-3">
          <div className="inline-flex items-center gap-3 rounded-full border-2 border-cream-200 px-2 py-1">
            <button onClick={() => setQty((v) => Math.max(1, v - 1))} className="w-8 h-8 rounded-full hover:bg-cream-100 font-bold">−</button>
            <span className="font-extrabold">{qty}</span>
            <button onClick={() => setQty((v) => v + 1)} className="w-8 h-8 rounded-full hover:bg-cream-100 font-bold">+</button>
          </div>
          <button
            onClick={() => addItem(meal.id, "meal", qty)}
            className="flex-1 rounded-full bg-terra-500 text-cream-50 font-bold py-2.5 hover:bg-terra-600"
          >
            Add {qty} to cart · ₹{meal.price * qty}
          </button>
        </div>
        <div className="mt-5 bg-white rounded-2xl border border-terra-500/15 p-4 text-sm text-cocoa-800/70">
          <p className="font-bold text-cocoa-900">💛 Why you&apos;ll love it</p>
          <ul className="mt-1 list-disc ml-5 space-y-1">
            <li>Small-batch, home-style cooking — less oil, real masalas</li>
            <li>Packed hot in reusable tiffin-style boxes (demo)</li>
            <li>{meal.type === "veg" ? "100% vegetarian" : "Non-veg, cooked separately"} · {meal.mealTime} special</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
