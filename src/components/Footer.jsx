import { ArrowUpRight, Mail, MapPin, Phone } from "lucide-react";
import { Link } from "react-router-dom";

const footerLinks = {
  Shop: [
    { name: "All Earbuds", path: "/products" },
    { name: "Best Sellers", path: "/products?sort=popular" },
    { name: "New Arrivals", path: "/products?sort=newest" },
    { name: "Offers", path: "/products?sort=discount" },
  ],
  Company: [
    { name: "About Us", path: "/about" },
    { name: "Contact", path: "/contact" },
    { name: "Login", path: "/login" },
    { name: "Create Account", path: "/signup" },
  ],
  Support: [
    { name: "Shipping & Delivery", path: "/contact" },
    { name: "Returns", path: "/contact" },
    { name: "Warranty", path: "/contact" },
    { name: "Help Center", path: "/contact" },
  ],
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-slate-200 bg-slate-50 dark:border-white/10 dark:bg-slate-950">
      {/* Main Footer */}
      <div className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_2fr]">
          {/* Brand */}
          <div className="max-w-md">
            <Link to="/" className="inline-flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-slate-950 text-white dark:bg-white dark:text-slate-950">
                <span className="text-sm font-black">A</span>
              </div>

              <div>
                <span className="block text-lg font-black tracking-[0.18em] text-slate-950 dark:text-white">
                  AURALIS
                </span>
                <span className="block text-[9px] font-medium uppercase tracking-[0.3em] text-slate-500 dark:text-slate-400">
                  Pure Sound
                </span>
              </div>
            </Link>

            <p className="mt-6 text-sm leading-7 text-slate-600 dark:text-slate-400">
              Premium earbuds engineered for people who want powerful sound,
              thoughtful design, and all-day comfort without compromise.
            </p>

            {/* Contact Details */}
            <div className="mt-7 space-y-4">
              <a
                href="mailto:hello@auralis.com"
                className="flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-sm dark:bg-white/5">
                  <Mail size={16} />
                </span>
                hello@auralis.com
              </a>

              <a
                href="tel:+919876543210"
                className="flex items-center gap-3 text-sm text-slate-600 transition-colors hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-sm dark:bg-white/5">
                  <Phone size={16} />
                </span>
                +91 98765 43210
              </a>

              <div className="flex items-center gap-3 text-sm text-slate-600 dark:text-slate-400">
                <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-white shadow-sm dark:bg-white/5">
                  <MapPin size={16} />
                </span>
                Bengaluru, India
              </div>
            </div>
          </div>

          {/* Footer Links */}
          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3">
            {Object.entries(footerLinks).map(([title, links]) => (
              <div key={title}>
                <h3 className="text-sm font-bold text-slate-950 dark:text-white">
                  {title}
                </h3>

                <ul className="mt-5 space-y-3.5">
                  {links.map((link) => (
                    <li key={link.name}>
                      <Link
                        to={link.path}
                        className="text-sm text-slate-500 transition-colors hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Newsletter */}
        <div className="mt-16 overflow-hidden rounded-3xl bg-slate-950 p-6 text-white sm:p-8 dark:bg-white dark:text-slate-950">
          <div className="flex flex-col gap-7 lg:flex-row lg:items-center lg:justify-between">
            <div className="max-w-lg">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400 dark:text-slate-500">
                Stay in the loop
              </p>

              <h3 className="mt-2 text-2xl font-black tracking-tight sm:text-3xl">
                Get the latest from Auralis.
              </h3>

              <p className="mt-2 text-sm leading-6 text-slate-400 dark:text-slate-500">
                New products, exclusive offers and sound stories delivered to
                your inbox.
              </p>
            </div>

            <form
              onSubmit={(event) => {
                event.preventDefault();
                alert("Thank you for subscribing to Auralis!");
                event.currentTarget.reset();
              }}
              className="flex w-full max-w-md flex-col gap-2 sm:flex-row"
            >
              <input
                type="email"
                required
                placeholder="Your email address"
                className="h-12 min-w-0 flex-1 rounded-xl border border-white/10 bg-white/10 px-4 text-sm text-white outline-none placeholder:text-slate-400 focus:border-white/30 dark:border-slate-200 dark:bg-slate-100 dark:text-slate-950 dark:placeholder:text-slate-500"
              />

              <button
                type="submit"
                className="flex h-12 items-center justify-center gap-2 rounded-xl bg-white px-5 text-sm font-bold text-slate-950 transition-transform hover:-translate-y-0.5 dark:bg-slate-950 dark:text-white"
              >
                Subscribe
                <ArrowUpRight size={16} />
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-slate-200 dark:border-white/10">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 px-4 py-6 text-xs text-slate-500 sm:px-6 md:flex-row md:items-center md:justify-between lg:px-8">
          <p>© {currentYear} Auralis. All rights reserved.</p>

          <div className="flex items-center gap-5">
            <Link
              to="/contact"
              className="transition-colors hover:text-slate-950 dark:hover:text-white"
            >
              Privacy
            </Link>

            <Link
              to="/contact"
              className="transition-colors hover:text-slate-950 dark:hover:text-white"
            >
              Terms
            </Link>

            <Link
              to="/contact"
              className="transition-colors hover:text-slate-950 dark:hover:text-white"
            >
              Support
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}