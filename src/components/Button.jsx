import { Link } from "react-router-dom";

export default function Button({ to, children, variant = "primary", className = "", ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-full font-bold transition-all px-6 py-3 text-sm sm:text-base";
  const styles = {
    primary: "bg-terra-500 text-cream-50 shadow-lg shadow-terra-500/25 hover:bg-terra-600 hover:-translate-y-0.5",
    secondary: "bg-cream-100 text-cocoa-900 border-2 border-terra-500/20 hover:border-terra-500/50",
    dark: "bg-cocoa-900 text-cream-50 hover:bg-cocoa-800",
  };
  const cls = `${base} ${styles[variant] || styles.primary} ${className}`;
  if (to) {
    return (
      <Link to={to} className={cls} {...props}>
        {children}
      </Link>
    );
  }
  return (
    <button className={cls} {...props}>
      {children}
    </button>
  );
}
