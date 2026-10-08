import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {
  ArrowLeft,
  Check,
  CreditCard,
  Lock,
  ShoppingBag,
  Truck,
} from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Checkout() {
  const navigate = useNavigate();

  const {
    cart,
    subtotal,
    shipping,
    total,
    clearCart,
  } = useCart();

  const [orderPlaced, setOrderPlaced] = useState(false);

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    pincode: "",
    payment: "card",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setForm((current) => ({
      ...current,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    if (cart.length === 0) {
      navigate("/products");
      return;
    }

    setOrderPlaced(true);
    clearCart();
  };

  if (orderPlaced) {
    return (
      <section className="flex min-h-[75vh] items-center justify-center px-4 py-16 sm:px-6">
        <div className="w-full max-w-xl rounded-[2rem] border border-slate-200 bg-white p-8 text-center shadow-xl dark:border-white/10 dark:bg-white/[0.04] sm:p-12">
          <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-emerald-100 text-emerald-600 dark:bg-emerald-500/10 dark:text-emerald-400">
            <Check size={38} strokeWidth={2.5} />
          </div>

          <p className="mt-7 text-xs font-bold uppercase tracking-[0.3em] text-slate-400">
            Auralis
          </p>

          <h1 className="mt-3 text-3xl font-black text-slate-950 dark:text-white sm:text-4xl">
            Order Confirmed
          </h1>

          <p className="mx-auto mt-4 max-w-md leading-7 text-slate-500 dark:text-slate-400">
            Thank you for your purchase. Your Auralis earbuds are on their way
            to you.
          </p>

          <div className="mt-7 rounded-2xl bg-slate-50 p-5 text-left dark:bg-white/5">
            <div className="flex items-center gap-3">
              <Truck size={20} className="text-emerald-500" />

              <div>
                <p className="text-sm font-bold text-slate-950 dark:text-white">
                  Delivery address
                </p>
                <p className="mt-1 text-sm text-slate-500 dark:text-slate-400">
                  {form.address}, {form.city}, {form.state} - {form.pincode}
                </p>
              </div>
            </div>
          </div>

          <Link
            to="/products"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-7 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-950"
          >
            Continue Shopping
          </Link>
        </div>
      </section>
    );
  }

  if (cart.length === 0) {
    return (
      <section className="flex min-h-[75vh] items-center justify-center px-4 py-16">
        <div className="text-center">
          <ShoppingBag
            size={48}
            className="mx-auto text-slate-300 dark:text-slate-600"
          />

          <h1 className="mt-6 text-3xl font-black text-slate-950 dark:text-white">
            Your cart is empty
          </h1>

          <p className="mt-3 text-slate-500 dark:text-slate-400">
            Add a product before proceeding to checkout.
          </p>

          <Link
            to="/products"
            className="mt-7 inline-flex rounded-full bg-slate-950 px-6 py-3 font-bold text-white dark:bg-white dark:text-slate-950"
          >
            Browse Products
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-6xl">
        <Link
          to="/cart"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
        >
          <ArrowLeft size={17} />
          Back to Cart
        </Link>

        <div className="mt-8">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">
            Auralis
          </p>

          <h1 className="mt-2 text-4xl font-black text-slate-950 dark:text-white">
            Checkout
          </h1>
        </div>

        <form
          onSubmit={handleSubmit}
          className="mt-10 grid gap-8 lg:grid-cols-[1fr_380px]"
        >
          <div className="space-y-6">
            <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03] sm:p-8">
              <h2 className="text-xl font-black text-slate-950 dark:text-white">
                Contact Information
              </h2>

              <div className="mt-6 grid gap-4 sm:grid-cols-2">
                <input
                  required
                  name="name"
                  value={form.name}
                  onChange={handleChange}
                  placeholder="Full name"
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-white"
                />

                <input
                  required
                  type="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  placeholder="Email address"
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-white"
                />

                <input
                  required
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  placeholder="Phone number"
                  className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-white sm:col-span-2"
                />
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03] sm:p-8">
              <h2 className="text-xl font-black text-slate-950 dark:text-white">
                Delivery Address
              </h2>

              <div className="mt-6 space-y-4">
                <textarea
                  required
                  name="address"
                  value={form.address}
                  onChange={handleChange}
                  rows="3"
                  placeholder="House / Flat / Street / Area"
                  className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none transition focus:border-slate-950 dark:border-white/10 dark:bg-white/5 dark:text-white dark:focus:border-white"
                />

                <div className="grid gap-4 sm:grid-cols-3">
                  <input
                    required
                    name="city"
                    value={form.city}
                    onChange={handleChange}
                    placeholder="City"
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none dark:border-white/10 dark:bg-white/5 dark:text-white"
                  />

                  <input
                    required
                    name="state"
                    value={form.state}
                    onChange={handleChange}
                    placeholder="State"
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none dark:border-white/10 dark:bg-white/5 dark:text-white"
                  />

                  <input
                    required
                    name="pincode"
                    value={form.pincode}
                    onChange={handleChange}
                    placeholder="Pincode"
                    inputMode="numeric"
                    className="rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3.5 text-sm outline-none dark:border-white/10 dark:bg-white/5 dark:text-white"
                  />
                </div>
              </div>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 dark:border-white/10 dark:bg-white/[0.03] sm:p-8">
              <h2 className="text-xl font-black text-slate-950 dark:text-white">
                Payment Method
              </h2>

              <div className="mt-6 space-y-3">
                <label className="flex cursor-pointer items-center gap-4 rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                  <input
                    type="radio"
                    name="payment"
                    value="card"
                    checked={form.payment === "card"}
                    onChange={handleChange}
                  />

                  <CreditCard
                    size={20}
                    className="text-slate-500"
                  />

                  <div>
                    <p className="text-sm font-bold text-slate-950 dark:text-white">
                      Credit / Debit Card
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Secure online payment
                    </p>
                  </div>
                </label>

                <label className="flex cursor-pointer items-center gap-4 rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                  <input
                    type="radio"
                    name="payment"
                    value="upi"
                    checked={form.payment === "upi"}
                    onChange={handleChange}
                  />

                  <span className="flex h-5 w-5 items-center justify-center rounded bg-slate-950 text-[8px] font-black text-white dark:bg-white dark:text-slate-950">
                    UPI
                  </span>

                  <div>
                    <p className="text-sm font-bold text-slate-950 dark:text-white">
                      UPI
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Google Pay, PhonePe, Paytm and more
                    </p>
                  </div>
                </label>

                <label className="flex cursor-pointer items-center gap-4 rounded-2xl border border-slate-200 p-4 dark:border-white/10">
                  <input
                    type="radio"
                    name="payment"
                    value="cod"
                    checked={form.payment === "cod"}
                    onChange={handleChange}
                  />

                  <Truck size={20} className="text-slate-500" />

                  <div>
                    <p className="text-sm font-bold text-slate-950 dark:text-white">
                      Cash on Delivery
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      Pay when your order arrives
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>

          <aside className="h-fit rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.04] lg:sticky lg:top-28">
            <h2 className="text-xl font-black text-slate-950 dark:text-white">
              Order Summary
            </h2>

            <div className="mt-6 space-y-4">
              {cart.map((item) => (
                <div key={item.id} className="flex gap-3">
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-white dark:bg-white/5">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-full w-full object-cover"
                    />

                    <span className="absolute right-1 top-1 flex h-5 min-w-5 items-center justify-center rounded-full bg-slate-950 px-1 text-[9px] font-bold text-white dark:bg-white dark:text-slate-950">
                      {item.quantity}
                    </span>
                  </div>

                  <div className="min-w-0 flex-1">
                    <p className="truncate text-sm font-bold text-slate-950 dark:text-white">
                      {item.name}
                    </p>

                    <p className="mt-1 text-xs text-slate-400">
                      ?{Number(item.price).toLocaleString("en-IN")} each
                    </p>
                  </div>

                  <p className="text-sm font-bold text-slate-950 dark:text-white">
                    ?
                    {(
                      Number(item.price) * item.quantity
                    ).toLocaleString("en-IN")}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-6 space-y-3 border-t border-slate-200 pt-5 dark:border-white/10">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 dark:text-slate-400">
                  Subtotal
                </span>

                <span className="font-semibold">
                  ?{Number(subtotal).toLocaleString("en-IN")}
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-slate-500 dark:text-slate-400">
                  Shipping
                </span>

                <span className="font-semibold">
                  {shipping === 0
                    ? "Free"
                    : `?${Number(shipping).toLocaleString("en-IN")}`}
                </span>
              </div>

              <div className="flex justify-between border-t border-slate-200 pt-4 dark:border-white/10">
                <span className="font-bold">Total</span>

                <span className="text-xl font-black">
                  ?{Number(total).toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-xl dark:bg-white dark:text-slate-950"
            >
              <Lock size={16} />
              Place Order
            </button>

            <p className="mt-4 text-center text-xs leading-5 text-slate-400">
              Your order information is securely processed.
            </p>
          </aside>
        </form>
      </div>
    </section>
  );
}
