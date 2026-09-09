import Button from "../components/Button";
import MealCard from "../components/MealCard";
import { meals } from "../data/mockMeals";

export default function Home() {
  const featured = meals.slice(0, 3);
  return (
    <div>
      <section className="bg-gradient-to-br from-cream-100 via-terra-100/60 to-turmeric-400/20">
        <div className="max-w-6xl mx-auto px-4 py-12 md:py-20 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <p className="inline-block text-xs font-extrabold tracking-wide px-3 py-1 rounded-full bg-leaf-500/15 text-leaf-600 border border-leaf-500/25">
              🪔 HOMEMADE · AFFORDABLE · DAILY
            </p>
            <h1 className="font-display mt-4 text-4xl md:text-6xl font-bold text-cocoa-900 leading-[1.05]">
              Homemade food, delivered with <span className="text-terra-500 italic">love.</span>
            </h1>
            <p className="mt-4 text-cocoa-800/70 md:text-lg">
              Ghar-jaisa khana for hostel & office life — from ₹59. No more boring canteen food.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Button to="/menu">Browse today&apos;s menu 🍛</Button>
              <Button to="/plans" variant="secondary">View tiffin plans →</Button>
            </div>
            <p className="mt-4 text-sm text-cocoa-800/55">⭐ 4.8 loved by 2,000+ students · Free delivery on plans</p>
          </div>
          <div className="relative">
            <div className="bg-white rounded-[2rem] p-8 shadow-2xl border border-terra-500/15 rotate-1">
              <div className="text-7xl text-center">🍲</div>
              <p className="font-display text-center mt-3 text-xl font-bold">Today&apos;s special</p>
              <p className="text-center text-sm text-cocoa-800/60">Rajma Chawal · Sunita&apos;s Kitchen</p>
              <p className="text-center mt-2 font-extrabold text-terra-600 text-2xl">₹99 <span className="text-sm text-cocoa-800/40 line-through">₹129</span></p>
              <Button to="/menu" className="w-full mt-4">Order now</Button>
            </div>
            <div className="absolute -bottom-4 -left-4 bg-cocoa-900 text-cream-50 rounded-2xl px-4 py-2 text-sm font-bold shadow-lg -rotate-2">
              💛 just like mom used to send!
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 mt-12">
        <div className="flex items-end justify-between">
          <div>
            <h2 className="font-display text-2xl md:text-3xl font-bold">Today&apos;s menu ✨</h2>
            <p className="text-sm text-cocoa-800/60">Fresh from our home cooks — limited plates daily.</p>
          </div>
          <Button to="/menu" variant="secondary" className="!px-4 !py-2">See all →</Button>
        </div>
        <div className="mt-5 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {featured.map((m) => <MealCard key={m.id} meal={m} />)}
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-4 mt-12 grid md:grid-cols-3 gap-4">
        {[
          { e: "💰", t: "Student prices", d: "Full thalis from ₹59. Plans save up to 26%." },
          { e: "👩‍🍳", t: "Real home cooks", d: "Sunita, Meena & Fatima cook in small batches." },
          { e: "🧺", t: "Tiffin subscriptions", d: "Weekly & monthly plans. Pause on travel days." },
        ].map((c) => (
          <div key={c.t} className="bg-white rounded-3xl border border-terra-500/15 p-5">
            <div className="text-3xl">{c.e}</div>
            <p className="mt-2 font-bold">{c.t}</p>
            <p className="text-sm text-cocoa-800/60">{c.d}</p>
          </div>
        ))}
      </section>
    </div>
  );
}
