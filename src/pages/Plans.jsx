import PlanCard from "../components/PlanCard";
import { plans } from "../data/mockPlans";

export default function Plans() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      <h1 className="font-display text-3xl md:text-4xl font-bold">Tiffin plans 🧺</h1>
      <p className="text-cocoa-800/60 text-sm mt-1">
        One-time orders are great. Plans are cheaper — save up to 26% vs daily ordering. Mock checkout, no payment.
      </p>
      <div className="mt-6 grid md:grid-cols-3 gap-5">
        {plans.map((p) => <PlanCard key={p.id} plan={p} />)}
      </div>
      <div className="mt-6 bg-leaf-500/10 border border-leaf-500/25 rounded-3xl p-5 text-sm text-cocoa-800/75">
        💡 <b>How subscriptions work (demo):</b> pick a plan → it lands in your cart → mock checkout → confirmation screen.
        Pause / skip logic would come post-prototype with a real backend.
      </div>
    </div>
  );
}
