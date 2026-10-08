import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  LogOut,
  Mail,
  User,
  ShoppingBag,
  Package,
} from "lucide-react";

export default function Profile() {
  const navigate = useNavigate();

  const getUser = () => {
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

  const [user] = useState(getUser());

  const handleLogout = () => {
    localStorage.removeItem("auralis-user");
    navigate("/login");
  };

  if (!user) {
    return (
      <section className="flex min-h-[75vh] items-center justify-center px-4">
        <div className="text-center">
          <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-slate-100 dark:bg-white/10">
            <User size={28} />
          </div>

          <h1 className="mt-6 text-3xl font-black text-slate-950 dark:text-white">
            You're not signed in
          </h1>

          <p className="mt-3 text-slate-500 dark:text-slate-400">
            Sign in to view your Auralis profile.
          </p>

          <Link
            to="/login"
            className="mt-7 inline-flex rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-950"
          >
            Sign In
          </Link>
        </div>
      </section>
    );
  }

  const email = user.email || "Customer";
  const name =
    user.name ||
    email
      .split("@")[0]
      .replace(/[._-]/g, " ")
      .replace(/\b\w/g, (letter) => letter.toUpperCase());

  return (
    <section className="min-h-[80vh] px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-5xl">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition-colors hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
        >
          <ArrowLeft size={17} />
          Back to Home
        </Link>

        {/* Profile Header */}
        <div className="mt-8 overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm dark:border-white/10 dark:bg-white/[0.03]">
          <div className="h-32 bg-slate-950 dark:bg-white" />

          <div className="relative px-6 pb-8 sm:px-8">
            <div className="-mt-12 flex flex-col gap-5 sm:flex-row sm:items-end sm:justify-between">
              <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-end">
                <div className="flex h-24 w-24 items-center justify-center rounded-3xl border-4 border-white bg-slate-900 text-3xl font-black text-white shadow-xl dark:border-slate-950 dark:bg-white dark:text-slate-950">
                  {name.charAt(0).toUpperCase()}
                </div>

                <div className="pb-1">
                  <p className="text-xs font-bold uppercase tracking-[0.2em] text-slate-400">
                    Auralis Member
                  </p>

                  <h1 className="mt-1 text-2xl font-black text-slate-950 dark:text-white">
                    {name}
                  </h1>

                  <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                    {email}
                  </p>
                </div>
              </div>

              <button
                type="button"
                onClick={handleLogout}
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-red-200 px-4 py-2.5 text-sm font-bold text-red-600 transition-colors hover:bg-red-50 dark:border-red-500/20 dark:hover:bg-red-500/10"
              >
                <LogOut size={16} />
                Logout
              </button>
            </div>
          </div>
        </div>

        {/* Account Cards */}
        <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03]">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 dark:bg-white/10">
              <User size={20} />
            </div>

            <h2 className="mt-5 font-bold text-slate-950 dark:text-white">
              Personal Details
            </h2>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Manage your account information.
            </p>
          </div>

          <Link
            to="/products"
            className="rounded-2xl border border-slate-200 bg-white p-6 transition-all hover:-translate-y-1 hover:shadow-lg dark:border-white/10 dark:bg-white/[0.03]"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 dark:bg-white/10">
              <ShoppingBag size={20} />
            </div>

            <h2 className="mt-5 font-bold text-slate-950 dark:text-white">
              Continue Shopping
            </h2>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Explore our latest earbuds.
            </p>
          </Link>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03]">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-slate-100 dark:bg-white/10">
              <Package size={20} />
            </div>

            <h2 className="mt-5 font-bold text-slate-950 dark:text-white">
              Orders
            </h2>

            <p className="mt-2 text-sm text-slate-500 dark:text-slate-400">
              Your orders will appear here.
            </p>
          </div>
        </div>

        {/* Account Information */}
        <div className="mt-6 rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03] sm:p-8">
          <h2 className="text-xl font-black text-slate-950 dark:text-white">
            Account Information
          </h2>

          <div className="mt-6 grid gap-5 sm:grid-cols-2">
            <div className="rounded-2xl bg-slate-50 p-5 dark:bg-white/5">
              <div className="flex items-center gap-3">
                <Mail size={18} className="text-slate-500" />

                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Email
                </span>
              </div>

              <p className="mt-3 break-all font-semibold text-slate-950 dark:text-white">
                {email}
              </p>
            </div>

            <div className="rounded-2xl bg-slate-50 p-5 dark:bg-white/5">
              <div className="flex items-center gap-3">
                <User size={18} className="text-slate-500" />

                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">
                  Account
                </span>
              </div>

              <p className="mt-3 font-semibold text-slate-950 dark:text-white">
                Auralis Customer
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
