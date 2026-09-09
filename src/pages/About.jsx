import Button from "../components/Button";

const cooks = [
  { e: "👩‍🍳", n: "Sunita's Kitchen", d: "20 yrs of ghar-ka-khana. Famous for rajma & dal tadka." },
  { e: "👵", n: "Meena's Rasoi", d: "Gujarati-Maharashtrian comfort: khichdi, parathas, paneer." },
  { e: "🧕", n: "Fatima's Kitchen", d: "Slow-cooked non-veg Sundays: chicken, egg & fish curry." },
];

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <p className="text-xs font-extrabold tracking-wide text-terra-600">OUR STORY 💛</p>
      <h1 className="font-display text-3xl md:text-5xl font-bold mt-2 leading-tight">
        For everyone who misses <span className="italic text-terra-500">ghar ka khana.</span>
      </h1>
      <p className="mt-4 text-cocoa-800/70 md:text-lg">
        Nutri Aahaar started in a hostel corridor — friends pooling money for one home-cooked thali.
        Today our home cooks prepare small batches every morning, so students and office-goers eat
        warm, affordable food that actually feels like home.
      </p>
      <div className="mt-8 grid sm:grid-cols-3 gap-4">
        {cooks.map((c) => (
          <div key={c.n} className="bg-white rounded-3xl border border-terra-500/15 p-5 text-center">
            <div className="text-5xl">{c.e}</div>
            <p className="mt-2 font-bold">{c.n}</p>
            <p className="text-sm text-cocoa-800/60">{c.d}</p>
          </div>
        ))}
      </div>
      <div className="mt-8 bg-cocoa-900 text-cream-50 rounded-[2rem] p-8 text-center">
        <p className="font-display text-2xl font-bold">Hungry already? 🍲</p>
        <p className="text-sm text-cream-100/70 mt-1">Today&apos;s menu is fresh till 9pm.</p>
        <div className="mt-4 flex justify-center gap-3 flex-wrap">
          <Button to="/menu">See menu</Button>
          <Button to="/plans" variant="secondary">Tiffin plans</Button>
        </div>
      </div>
    </div>
  );
}
