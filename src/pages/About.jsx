import Button from "../components/Button";

const stack = [
  { e: "⚛️", n: "React 19", d: "Component-based UI — menu, cart, checkout and all pages." },
  { e: "🎨", n: "Tailwind CSS v4", d: "Warm, cozy styling — terracotta, turmeric and cream theme." },
  { e: "⚡", n: "Vite 8", d: "Fast dev server and optimized production builds." },
];

export default function About() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-10">
      <p className="text-xs font-extrabold tracking-wide text-terra-600">OUR STORY 💛</p>
      <h1 className="font-display text-3xl md:text-5xl font-bold mt-2 leading-tight">
        For everyone who misses <span className="italic text-terra-500">ghar ka khana.</span>
      </h1>
      <p className="mt-4 text-cocoa-800/70 md:text-lg">
        Nutri Aahaar started in a hostel corridor, friends pooling money for one home-cooked thali.
        Today our home cooks prepare small batches every morning, so students and office-goers eat
        warm, affordable food that actually feels like home.
      </p>

      <h2 className="font-display text-2xl font-bold mt-10">Built with</h2>
      <p className="text-sm text-cocoa-800/60 mt-1">The tech behind this website.</p>
      <div className="mt-4 grid sm:grid-cols-3 gap-4">
        {stack.map((s) => (
          <div key={s.n} className="bg-white rounded-3xl border border-terra-500/15 p-5 text-center">
            <div className="text-5xl">{s.e}</div>
            <p className="mt-2 font-bold">{s.n}</p>
            <p className="text-sm text-cocoa-800/60">{s.d}</p>
          </div>
        ))}
      </div>

      <h2 className="font-display text-2xl font-bold mt-10">Developer</h2>
      <div className="mt-4 bg-cocoa-900 text-cream-50 rounded-3xl p-6 flex items-center gap-5">
        <div className="w-16 h-16 shrink-0 rounded-full bg-turmeric-400 grid place-items-center text-4xl">
          🧑‍💻
        </div>
        <div>
          <p className="font-display text-xl font-bold">Gaurang Khochare</p>
          <p className="text-sm text-cream-100/70 mt-1">
            Designed and built this Nutri Aahaar prototype, from the PRD to the warm,
            homely interface you see today. Check out this project on <a href="https://github.com/gaurangkhochare/nutri-ahaar-prototype" className="link">GitHub</a>.
          </p>
        </div>
      </div>

      <div className="mt-8 bg-cream-100 border border-terra-500/15 rounded-[2rem] p-8 text-center">
        <p className="font-display text-2xl font-bold">Hungry already?</p>
        <p className="text-sm text-cocoa-800/60 mt-1">Today&apos;s menu is fresh till 9pm.</p>
        <div className="mt-4 flex justify-center gap-3 flex-wrap">
          <Button to="/menu">See menu</Button>
          <Button to="/plans" variant="secondary">Tiffin plans</Button>
        </div>
      </div>
    </div>
  );
}
