import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="mt-16 bg-cocoa-900 text-cream-100">
      <div className="max-w-6xl mx-auto px-4 py-10 grid gap-8 md:grid-cols-3">
        <div>
          <p className="font-display text-xl font-bold text-cream-50">Nutri Aahaar 🍲</p>
          <p className="mt-2 text-sm text-cream-100/70">
            Made with love, just like home. Affordable daily meals for students & working professionals.
          </p>
        </div>
        <div className="text-sm">
          <p className="font-bold text-cream-50 mb-2">Explore</p>
          <div className="flex flex-col gap-1 text-cream-100/70">
            <Link className="hover:text-turmeric-400" to="/">Home</Link>
            <Link className="hover:text-turmeric-400" to="/menu">Today&apos;s menu</Link>
            <Link className="hover:text-turmeric-400" to="/plans">Tiffin plans</Link>
            <Link className="hover:text-turmeric-400" to="/about">Our story</Link>
          </div>
        </div>
        <div className="text-sm">
          <p className="font-bold text-cream-50 mb-2">Contact (demo)</p>
          <p className="text-cream-100/70">hello@nutriaahaar.demo · 98765 43210</p>
          <p className="text-cream-100/70 mt-1">Hostel / PG / Office delivery · 11am – 9pm</p>
        </div>
      </div>
      <div className="border-t border-cream-100/10">
        <p className="max-w-6xl mx-auto px-4 py-4 text-xs text-cream-100/50">
          Frontend prototype — no real orders or payments. All data is mocked.
        </p>
      </div>
    </footer>
  );
}
