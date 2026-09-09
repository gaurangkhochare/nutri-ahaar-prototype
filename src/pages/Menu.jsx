import { useMemo, useState } from "react";
import MealCard from "../components/MealCard";
import { meals, mealTimes, vegOptions } from "../data/mockMeals";

export default function Menu() {
  const [q, setQ] = useState("");
  const [mealTime, setMealTime] = useState("all");
  const [veg, setVeg] = useState("all");
  const [maxPrice, setMaxPrice] = useState(160);

  const filtered = useMemo(
    () =>
      meals.filter((m) => {
        if (mealTime !== "all" && m.mealTime !== mealTime) return false;
        if (veg !== "all" && m.type !== veg) return false;
        if (m.price > maxPrice) return false;
        if (q && !`${m.name} ${m.description} ${m.cookName}`.toLowerCase().includes(q.toLowerCase())) return false;
        return true;
      }),
    [q, mealTime, veg, maxPrice]
  );

  const pill = (active) =>
    `px-4 py-1.5 rounded-full text-sm font-bold border-2 transition-colors ${
      active ? "bg-terra-500 text-cream-50 border-terra-500" : "bg-white border-cream-200 hover:border-terra-500/40"
    }`;

  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="font-display text-3xl md:text-4xl font-bold">Browse menu 🍛</h1>
      <p className="text-cocoa-800/60 text-sm mt-1">Filter by meal time, veg preference & budget.</p>

      <div className="mt-5 bg-white rounded-3xl border border-terra-500/15 p-4 space-y-3">
        <input
          value={q}
          onChange={(e) => setQ(e.target.value)}
          placeholder="Search dal, paneer, chicken… ⌕"
          className="w-full rounded-full border-2 border-cream-200 px-4 py-2.5 text-sm outline-none focus:border-terra-500/60"
        />
        <div className="flex flex-wrap gap-2">
          {mealTimes.map((t) => (
            <button key={t} onClick={() => setMealTime(t)} className={pill(mealTime === t)}>
              {t === "all" ? "All times" : t}
            </button>
          ))}
        </div>
        <div className="flex flex-wrap gap-2">
          {vegOptions.map((v) => (
            <button key={v} onClick={() => setVeg(v)} className={pill(veg === v)}>
              {v === "all" ? "Veg + Non-veg" : v}
            </button>
          ))}
        </div>
        <label className="flex items-center gap-3 text-sm font-bold">
          Max ₹{maxPrice}
          <input
            type="range" min={50} max={160} step={10} value={maxPrice}
            onChange={(e) => setMaxPrice(Number(e.target.value))}
            className="flex-1 accent-[#c65d3a]"
          />
        </label>
      </div>

      <p className="mt-4 text-sm font-bold text-cocoa-800/60">{filtered.length} dishes found</p>
      {filtered.length === 0 ? (
        <p className="mt-6 bg-white rounded-3xl border p-8 text-center text-cocoa-800/60">
          No dishes match — try clearing a filter 🥺
        </p>
      ) : (
        <div className="mt-3 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filtered.map((m) => <MealCard key={m.id} meal={m} />)}
        </div>
      )}
    </div>
  );
}
