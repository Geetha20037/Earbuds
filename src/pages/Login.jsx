import { Eye, EyeOff, Headphones, Lock, Mail, ArrowLeft } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({
    email: "",
    password: "",
  });
  const [error, setError] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setError("");

    if (!form.email || !form.password) {
      setError("Please enter your email and password.");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(form.email)) {
      setError("Please enter a valid email address.");
      return;
    }

    localStorage.setItem("auralis-user", form.email);

    navigate("/");
  };

  return (
    <div className="min-h-screen bg-[#f7f7f5] dark:bg-[#080808]">
      <div className="grid min-h-screen lg:grid-cols-2">
        <div className="hidden bg-black p-10 text-white lg:flex lg:flex-col lg:justify-between dark:bg-white dark:text-black">
          <Link to="/" className="flex items-center gap-2">
            <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white text-black dark:bg-black dark:text-white">
              <Headphones size={20} />
            </div>

            <span className="text-xl font-black">Auralis</span>
          </Link>

          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/40 dark:text-black/40">
              Welcome back
            </p>

            <h1 className="mt-5 max-w-xl text-6xl font-black leading-[0.95] tracking-tight">
              Your sound is waiting.
            </h1>

            <p className="mt-6 max-w-md text-sm leading-7 text-white/50 dark:text-black/50">
              Sign in to manage your account, orders and personalized Auralis
              experience.
            </p>
          </div>

          <p className="text-xs text-white/30 dark:text-black/30">
            © 2026 Auralis
          </p>
        </div>

        <div className="flex items-center justify-center p-6 sm:p-10">
          <div className="w-full max-w-md">
            <Link
              to="/"
              className="mb-8 inline-flex items-center gap-2 text-sm text-zinc-500 hover:text-black lg:hidden dark:hover:text-white"
            >
              <ArrowLeft size={15} />
              Back to home
            </Link>

            <div className="lg:hidden">
              <div className="flex items-center gap-2">
                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-black text-white dark:bg-white dark:text-black">
                  <Headphones size={20} />
                </div>

                <span className="text-xl font-black">Auralis</span>
              </div>
            </div>

            <div className="mt-10 lg:mt-0">
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-400">
                Account
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight">
                Welcome back.
              </h2>

              <p className="mt-3 text-sm text-zinc-500">
                Sign in to continue your Auralis journey.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="mt-8 space-y-5">
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
                    placeholder="Enter your password"
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

              {error && (
                <p className="rounded-xl bg-rose-50 p-3 text-xs font-medium text-rose-600 dark:bg-rose-950/30">
                  {error}
                </p>
              )}

              <button
                type="submit"
                className="h-13 w-full rounded-full bg-black text-sm font-bold text-white transition hover:scale-[1.01] dark:bg-white dark:text-black"
              >
                Sign In
              </button>
            </form>

            <p className="mt-7 text-center text-sm text-zinc-500">
              Don't have an account?{" "}
              <Link
                to="/signup"
                className="font-bold text-black underline underline-offset-4 dark:text-white"
              >
                Create one
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}