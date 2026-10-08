import { Link } from "react-router-dom";
import {
  ArrowLeft,
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";
import { useCart } from "../context/CartContext";

export default function Cart() {
  const {
    cart,
    subtotal,
    shipping,
    total,
    discount,
    updateQuantity,
    removeFromCart,
    clearCart,
  } = useCart();

  if (cart.length === 0) {
    return (
      <section className="min-h-[75vh] px-4 py-20 sm:px-6 lg:px-8">
        <div className="mx-auto flex max-w-4xl flex-col items-center justify-center py-20 text-center">
          <div className="flex h-24 w-24 items-center justify-center rounded-full bg-slate-100 dark:bg-white/10">
            <ShoppingBag size={36} className="text-slate-400" />
          </div>

          <h1 className="mt-7 text-4xl font-black text-slate-950 dark:text-white">
            Your cart is empty
          </h1>

          <p className="mt-4 text-slate-500 dark:text-slate-400">
            Add your favorite Auralis earbuds before checkout.
          </p>

          <Link
            to="/products"
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-slate-950 px-7 py-3.5 text-sm font-bold text-white dark:bg-white dark:text-slate-950"
          >
            Shop Earbuds
            <ArrowRight size={17} />
          </Link>
        </div>
      </section>
    );
  }

  return (
    <section className="px-4 py-12 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
        >
          <ArrowLeft size={17} />
          Continue Shopping
        </Link>

        <div className="mt-8 flex flex-col gap-8 lg:flex-row lg:items-start">
          <div className="min-w-0 flex-1">
            <div className="flex items-end justify-between">
              <div>
                <p className="text-xs font-bold uppercase tracking-[0.3em] text-slate-400">
                  Auralis
                </p>

                <h1 className="mt-2 text-4xl font-black text-slate-950 dark:text-white">
                  Shopping Cart
                </h1>
              </div>

              <button
                type="button"
                onClick={clearCart}
                className="text-sm font-semibold text-red-500"
              >
                Clear Cart
              </button>
            </div>

            <div className="mt-8 space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="rounded-3xl border border-slate-200 bg-white p-4 dark:border-white/10 dark:bg-white/[0.03] sm:p-5"
                >
                  <div className="flex gap-4">
                    <div className="h-28 w-28 shrink-0 overflow-hidden rounded-2xl bg-slate-100 dark:bg-white/5 sm:h-36 sm:w-36">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-4">
                        <div>
                          <p className="text-xs font-bold uppercase tracking-[0.15em] text-slate-400">
                            {item.category || "Earbuds"}
                          </p>

                          <h2 className="mt-1 text-lg font-black text-slate-950 dark:text-white sm:text-xl">
                            {item.name}
                          </h2>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          className="text-slate-400 hover:text-red-500"
                        >
                          <Trash2 size={19} />
                        </button>
                      </div>

                      <div className="mt-5 flex flex-wrap items-center justify-between gap-4">
                        <div className="flex items-center rounded-full border border-slate-200 dark:border-white/10">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="flex h-9 w-9 items-center justify-center"
                          >
                            <Minus size={15} />
                          </button>

                          <span className="w-8 text-center text-sm font-bold">
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="flex h-9 w-9 items-center justify-center"
                          >
                            <Plus size={15} />
                          </button>
                        </div>

                        <p className="text-lg font-black text-slate-950 dark:text-white">
                          ?
                          {(
                            Number(item.price || 0) * item.quantity
                          ).toLocaleString("en-IN")}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <aside className="w-full rounded-3xl border border-slate-200 bg-slate-50 p-6 dark:border-white/10 dark:bg-white/[0.04] lg:sticky lg:top-28 lg:max-w-sm">
            <h2 className="text-xl font-black text-slate-950 dark:text-white">
              Order Summary
            </h2>

            <div className="mt-6 space-y-4">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 dark:text-slate-400">
                  Subtotal
                </span>

                <span className="font-semibold">
                  ?{Number(subtotal).toLocaleString("en-IN")}
                </span>
              </div>

              {discount > 0 && (
                <div className="flex justify-between text-sm">
                  <span className="text-emerald-600">
                    Product Savings
                  </span>

                  <span className="font-semibold text-emerald-600">
                    -?{Number(discount).toLocaleString("en-IN")}
                  </span>
                </div>
              )}

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

              <div className="border-t border-slate-200 pt-4 dark:border-white/10">
                <div className="flex items-center justify-between">
                  <span className="font-bold">Total</span>

                  <span className="text-2xl font-black">
                    ?{Number(total).toLocaleString("en-IN")}
                  </span>
                </div>
              </div>
            </div>

            <Link
              to="/checkout"
              className="mt-7 flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-4 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-xl dark:bg-white dark:text-slate-950"
            >
              Proceed to Checkout
              <ArrowRight size={17} />
            </Link>

            <p className="mt-4 text-center text-xs leading-5 text-slate-400">
              Free shipping on orders above ?2,000.
            </p>
          </aside>
        </div>
      </div>
    </section>
  );
}
