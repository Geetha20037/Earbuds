import {
  ArrowLeft,
  Check,
  Eye,
  EyeOff,
  Headphones,
  Lock,
  Mail,
  User,
} from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Signup() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    if (
      !form.name ||
      !form.email ||
      !form.password ||
      !form.confirmPassword
    ) {
      setError("Please complete all fields.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    if (form.password.length < 6) {
      setError("Password must contain at least 6 characters.");
      return;
    }

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    localStorage.setItem("auralis-user", form.email);

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#f7f7f5] dark:bg-[#080808]">
      <div className="grid min-h-screen lg:grid-cols-2">
        <div className="hidden bg-zinc-100 p-10 lg:flex lg:flex-col lg:justify-between dark:bg-zinc-900">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white dark:bg-white dark:text-black">
              <Headphones size={20} />
            </div>

            <span className="text-xl font-black">Auralis</span>
          </Link>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-400">
              Join Auralis
            </p>

            <h1 className="mt-5 max-w-xl text-6xl font-black leading-[0.95] tracking-tight">
              Better sound starts here.
            </h1>

            <div className="mt-8 space-y-4">
              {[
                "Track your orders",
                "Save your favorite products",
                "Get early access to new launches",
              ].map((item) => (
                <div key={item} className="flex items-center gap-3 text-sm">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full bg-black text-white dark:bg-white dark:text-black">
                    <Check size={14} />
                  </div>

                  {item}
                </div>
              ))}
            </div>
          </div>

          <p className="text-xs text-zinc-400">© 2026 Auralis</p>
        </div>

        <div className="flex items-center justify-center p-6 sm:p-10">
          <div className="w-full max-w-md">
            <Link
              to="/"
              className="inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-black lg:hidden dark:hover:text-white"
            >
              <ArrowLeft size={15} />
              Back to home
            </Link>

            <div className="mt-8 lg:mt-0">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-400">
                Create account
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight">
                Join Auralis.
              </h2>

              <p className="mt-3 text-sm text-zinc-500">
                Create your account and make every listen count.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-4">
              <div>
                <label className="text-xs font-bold">Full name</label>

                <div className="relative mt-2">
                  <User
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                  />

                  <input
                    required
                    type="text"
                    value={form.name}
                    onChange={(event) =>
                      setForm({
                        ...form,
                        name: event.target.value,
                      })
                    }
                    placeholder="Your name"
                    className="h-13 w-full rounded-xl border border-zinc-200 bg-white pl-11 pr-4 text-sm dark:border-zinc-800 dark:bg-zinc-950"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold">Email address</label>

                <div className="relative mt-2">
                  <Mail
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                  />

                  <input
                    required
                    type="email"
                    value={form.email}
                    onChange={(event) =>
                      setForm({
                        ...form,
                        email: event.target.value,
                      })
                    }
                    placeholder="you@example.com"
                    className="h-13 w-full rounded-xl border border-zinc-200 bg-white pl-11 pr-4 text-sm dark:border-zinc-800 dark:bg-zinc-950"
                  />
                </div>
              </div>

              <div>
                <label className="text-xs font-bold">Password</label>

                <div className="relative mt-2">
                  <Lock
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                  />

                  <input
                    required
                    type={showPassword ? "text" : "password"}
                    value={form.password}
                    onChange={(event) =>
                      setForm({
                        ...form,
                        password: event.target.value,
                      })
                    }
                    placeholder="At least 6 characters"
                    className="h-13 w-full rounded-xl border border-zinc-200 bg-white pl-11 pr-12 text-sm dark:border-zinc-800 dark:bg-zinc-950"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword((current) => !current)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400"
                  >
                    {showPassword ? (
                      <EyeOff size={17} />
                    ) : (
                      <Eye size={17} />
                    )}
                  </button>
                </div>
              </div>

              <div>
                <label className="text-xs font-bold">Confirm password</label>

                <div className="relative mt-2">
                  <Lock
                    size={17}
                    className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
                  />

                  <input
                    required
                    type={showConfirm ? "text" : "password"}
                    value={form.confirmPassword}
                    onChange={(event) =>
                      setForm({
                        ...form,
                        confirmPassword: event.target.value,
                      })
                    }
                    placeholder="Repeat your password"
                    className="h-13 w-full rounded-xl border border-zinc-200 bg-white pl-11 pr-12 text-sm dark:border-zinc-800 dark:bg-zinc-950"
                  />

                  <button
                    type="button"
                    onClick={() => setShowConfirm((current) => !current)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400"
                  >
                    {showConfirm ? (
                      <EyeOff size={17} />
                    ) : (
                      <Eye size={17} />
                    )}
                  </button>
                </div>
              </div>

              {error && (
                <p className="rounded-xl bg-rose-50 p-3 text-xs font-medium text-rose-600 dark:bg-rose-950/30">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="mt-2 h-13 w-full rounded-full bg-black text-sm font-bold text-white transition hover:scale-[1.01] dark:bg-white dark:text-black"
              >
                Create Account
              </button>
            </form>

            <p className="mt-7 text-center text-sm text-zinc-500">
              Already have an account?{" "}
              <Link
                to="/login"
                className="font-bold text-black underline underline-offset-4 dark:text-white"
              >
                Sign in
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}