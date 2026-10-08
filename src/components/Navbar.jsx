import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import {
  Menu,
  X,
  ShoppingBag,
  User,
  Search,
  LogIn,
} from "lucide-react";
import { useCart } from "../context/CartContext";
import ThemeToggle from "./ThemeToggle";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "About", path: "/about" },
  { name: "Contact", path: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const { cartCount, openCart } = useCart();
  const navigate = useNavigate();

  const getStoredUser = () => {
    const storedUser = localStorage.getItem("auralis-user");

    if (!storedUser) {
      return null;
    }

    try {
      return JSON.parse(storedUser);
    } catch {
      return {
        email: storedUser,
      };
    }
  };

  const user = getStoredUser();

  const closeMenu = () => {
    setIsOpen(false);
  };

  const handleProfile = () => {
    if (user) {
      navigate("/profile");
    } else {
      navigate("/login");
    }

    closeMenu();
  };

  return (
    <header className="fixed left-0 right-0 top-0 z-50 border-b border-slate-200/70 bg-white/85 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/85">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <Link
          to="/"
          onClick={closeMenu}
          className="group flex items-center gap-2"
        >
          <div className="flex h-10 w-10 items-center justify-center rounded-2xl bg-slate-950 text-white shadow-lg shadow-slate-950/20 transition-transform duration-300 group-hover:scale-105 dark:bg-white dark:text-slate-950">
            <span className="text-sm font-black">A</span>
          </div>

          <div className="leading-none">
            <span className="block text-lg font-black tracking-[0.18em] text-slate-950 dark:text-white">
              AURALIS
            </span>

            <span className="mt-1 block text-[9px] font-medium uppercase tracking-[0.35em] text-slate-500 dark:text-slate-400">
              Pure Sound
            </span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-8 lg:flex">
          {navLinks.map((link) => (
            <NavLink
              key={link.path}
              to={link.path}
              className={({ isActive }) =>
                `relative py-2 text-sm font-semibold transition-colors duration-200 ${
                  isActive
                    ? "text-slate-950 dark:text-white"
                    : "text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                }`
              }
            >
              {({ isActive }) => (
                <>
                  {link.name}

                  <span
                    className={`absolute -bottom-1 left-0 h-0.5 rounded-full bg-slate-950 transition-all duration-300 dark:bg-white ${
                      isActive ? "w-full" : "w-0"
                    }`}
                  />
                </>
              )}
            </NavLink>
          ))}
        </nav>

        {/* Desktop Actions */}
        <div className="hidden items-center gap-2 sm:flex">
          <Link
            to="/products"
            aria-label="Search products"
            className="flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition-all duration-200 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
          >
            <Search size={19} strokeWidth={1.8} />
          </Link>

          <ThemeToggle />

          <button
            type="button"
            onClick={handleProfile}
            aria-label={user ? "Profile" : "Login"}
            className="flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition-all duration-200 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
          >
            {user ? (
              <User size={19} strokeWidth={1.8} />
            ) : (
              <LogIn size={19} strokeWidth={1.8} />
            )}
          </button>

          <button
            type="button"
            onClick={openCart}
            aria-label="Open shopping cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition-all duration-200 hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
          >
            <ShoppingBag size={19} strokeWidth={1.8} />

            {cartCount > 0 && (
              <span className="absolute -right-0.5 -top-0.5 flex h-5 min-w-5 items-center justify-center rounded-full bg-slate-950 px-1 text-[10px] font-bold text-white dark:bg-white dark:text-slate-950">
                {cartCount > 99 ? "99+" : cartCount}
              </span>
            )}
          </button>

          <Link
            to="/products"
            className="ml-2 rounded-full bg-slate-950 px-5 py-2.5 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-slate-950/20 dark:bg-white dark:text-slate-950 dark:hover:shadow-white/10"
          >
            Shop Now
          </Link>
        </div>

        {/* Mobile Actions */}
        <div className="flex items-center gap-1 sm:hidden">
          <button
            type="button"
            onClick={openCart}
            aria-label="Open shopping cart"
            className="relative flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
          >
            <ShoppingBag size={19} />

            {cartCount > 0 && (
              <span className="absolute right-0 top-0 flex h-4 min-w-4 items-center justify-center rounded-full bg-slate-950 px-1 text-[9px] font-bold text-white dark:bg-white dark:text-slate-950">
                {cartCount > 9 ? "9+" : cartCount}
              </span>
            )}
          </button>

          <button
            type="button"
            onClick={() => setIsOpen((previous) => !previous)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            className="flex h-10 w-10 items-center justify-center rounded-full text-slate-700 transition-colors hover:bg-slate-100 dark:text-slate-200 dark:hover:bg-white/10"
          >
            {isOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`overflow-hidden border-t border-slate-200/70 bg-white transition-all duration-300 dark:border-white/10 dark:bg-slate-950 sm:hidden ${
          isOpen ? "max-h-[600px] opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <nav className="mx-auto max-w-7xl px-4 py-5">
          <div className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                onClick={closeMenu}
                className={({ isActive }) =>
                  `rounded-xl px-4 py-3.5 text-sm font-semibold transition-colors ${
                    isActive
                      ? "bg-slate-950 text-white dark:bg-white dark:text-slate-950"
                      : "text-slate-600 hover:bg-slate-100 dark:text-slate-300 dark:hover:bg-white/10"
                  }`
                }
              >
                {link.name}
              </NavLink>
            ))}
          </div>

          <div className="mt-4 grid grid-cols-2 gap-2">
            <button
              type="button"
              onClick={handleProfile}
              className="flex items-center justify-center gap-2 rounded-xl border border-slate-200 px-4 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50 dark:border-white/10 dark:text-slate-200 dark:hover:bg-white/5"
            >
              {user ? <User size={17} /> : <LogIn size={17} />}
              {user ? "Profile" : "Login"}
            </button>

            <Link
              to="/products"
              onClick={closeMenu}
              className="flex items-center justify-center rounded-xl bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 dark:bg-white dark:text-slate-950"
            >
              Shop Now
            </Link>
          </div>

          <div className="mt-3 flex items-center justify-between rounded-xl bg-slate-50 px-4 py-3 dark:bg-white/5">
            <span className="text-sm font-medium text-slate-600 dark:text-slate-300">
              Appearance
            </span>

            <ThemeToggle />
          </div>
        </nav>
      </div>
    </header>
  );
}

