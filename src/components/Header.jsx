import { Link, NavLink } from "react-router-dom";
import { useCart } from "../context/CartContext";

const linkCls = ({ isActive }) =>
  `px-3 py-2 rounded-full text-sm font-bold transition-colors ${
    isActive ? "bg-terra-500/10 text-terra-600" : "text-cocoa-800/70 hover:text-terra-600"
  }`;

export default function Header() {
  const { count } = useCart();
  return (
    <header className="sticky top-0 z-50 bg-cream-50/90 backdrop-blur border-b border-terra-500/15">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between gap-3">
        <Link to="/" className="flex items-center gap-2">
          <span className="w-10 h-10 rounded-2xl bg-terra-500 text-cream-50 grid place-items-center text-2xl shadow-md">
            🍲
          </span>
          <span className="leading-tight">
            <span className="block font-display font-bold text-lg text-cocoa-900">Nutri Aahaar</span>
            <span className="block text-xs font-semibold text-terra-600 -mt-0.5">ghar jaisa khana</span>
          </span>
        </Link>
        <nav className="hidden md:flex items-center gap-1">
          <NavLink to="/" className={linkCls}>Home</NavLink>
          <NavLink to="/menu" className={linkCls}>Menu</NavLink>
          <NavLink to="/plans" className={linkCls}>Plans</NavLink>
          <NavLink to="/about" className={linkCls}>About</NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <Link
            to="/cart"
            className="relative inline-flex items-center gap-2 rounded-full bg-cocoa-900 text-cream-50 px-4 py-2 text-sm font-bold hover:bg-cocoa-800"
            aria-label="Cart"
          >
            🧺 <span className="hidden sm:inline">Cart</span>
            {count > 0 && (
              <span className="absolute -top-2 -right-2 min-w-6 h-6 px-1 rounded-full bg-turmeric-400 text-cocoa-900 text-xs font-extrabold grid place-items-center border-2 border-cream-50">
                {count}
              </span>
            )}
          </Link>
        </div>
      </div>
      <div className="md:hidden border-t border-terra-500/10">
        <div className="max-w-6xl mx-auto px-4 py-2 flex gap-1 overflow-x-auto">
          <NavLink to="/" className={linkCls}>Home</NavLink>
          <NavLink to="/menu" className={linkCls}>Menu</NavLink>
          <NavLink to="/plans" className={linkCls}>Plans</NavLink>
          <NavLink to="/about" className={linkCls}>About</NavLink>
        </div>
      </div>
    </header>
  );
}
