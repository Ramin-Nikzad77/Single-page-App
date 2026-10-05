import { Link } from "react-router-dom";
import { ArrowUpRight, Asterisk, LogOut } from "lucide-react";

export default function Navbar({ isAuth, onLogout }) {
  return (
    <header className="sticky top-0 z-20 border-b border-ink/10 bg-paper/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 sm:px-8 lg:px-12">
        <Link
          to="/"
          className="group flex shrink-0 items-center gap-2.5 text-ink no-underline"
        >
          <span className="grid size-9 place-items-center rounded-full bg-lime text-ink transition-transform group-hover:rotate-12">
            <Asterisk size={24} strokeWidth={2.5} />
          </span>
          <span className="font-display text-[1.65rem] leading-none tracking-tight">
            Home
          </span>
        </Link>

        <nav
          aria-label="Main navigation"
          className="flex items-center gap-3 text-xs font-medium sm:gap-8 sm:text-sm"
        >
          <Link
            to="/products"
            className="text-ink/70 no-underline transition-colors hover:text-ink"
          >
            Products
          </Link>
          <Link
            to="/checkout"
            className="flex items-center gap-1 text-ink/70 no-underline transition-colors hover:text-ink"
          >
            Checkout <ArrowUpRight size={14} />
          </Link>
        </nav>

        {isAuth ? (
          <button
            onClick={onLogout}
            className="flex shrink-0 items-center gap-2 rounded-full border border-ink/15 px-3.5 py-2 text-xs font-semibold transition-colors hover:border-ink hover:bg-ink hover:text-white"
          >
            <LogOut size={14} />{" "}
            <span className="hidden sm:inline">Log out</span>
          </button>
        ) : (
          <span className="flex shrink-0 items-center gap-2 text-xs font-medium text-muted">
            <span className="size-1.5 rounded-full bg-[#bd7952]" />{" "}
            <span className="hidden sm:inline">Not logged in</span>
          </span>
        )}
      </div>
    </header>
  );
}
