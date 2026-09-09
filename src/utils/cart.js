import { getMealById } from "../data/mockMeals";
import { plans } from "../data/mockPlans";

export function resolveCartItems(items) {
  return items.map((i) => {
    if (i.kind === "plan") {
      const p = plans.find((x) => x.id === i.id);
      return { ...i, title: p?.name || "Plan", subtitle: p?.duration || "", price: p?.price || 0, emoji: p?.emoji || "🧺" };
    }
    const m = getMealById(i.id);
    return { ...i, title: m?.name || "Meal", subtitle: m?.cookName || "", price: m?.price || 0, emoji: m?.emoji || "🍛" };
  });
}

export const DELIVERY_FEE = 25;

export function cartTotals(detailed) {
  const subtotal = detailed.reduce((s, i) => s + i.price * i.qty, 0);
  const delivery = subtotal === 0 ? 0 : subtotal >= 299 ? 0 : DELIVERY_FEE;
  return { subtotal, delivery, total: subtotal + delivery };
}
