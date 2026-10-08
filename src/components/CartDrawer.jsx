import { Link } from "react-router-dom";
import {
  X,
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowRight,
} from "lucide-react";
import { useCart } from "../context/CartContext";

export default function CartDrawer() {
  const {
    cart,
    cartCount,
    subtotal,
    shipping,
    total,
    isCartOpen,
    closeCart,
    updateQuantity,
    removeFromCart,
  } = useCart();

  if (!isCartOpen) {
    return null;
  }

  return (
    <>
      <div
        className="fixed inset-0 z-[60] bg-slate-950/50 backdrop-blur-sm"
        onClick={closeCart}
      />

      <aside className="fixed right-0 top-0 z-[70] flex h-screen w-full max-w-md flex-col bg-white shadow-2xl dark:bg-slate-950">
        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-5 dark:border-white/10">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-slate-400">
              Auralis
            </p>

            <h2 className="mt-1 text-xl font-black text-slate-950 dark:text-white">
              Your Cart
            </h2>
          </div>

          <button
            type="button"
            onClick={closeCart}
            aria-label="Close cart"
            className="flex h-10 w-10 items-center justify-center rounded-full text-slate-600 transition hover:bg-slate-100 hover:text-slate-950 dark:text-slate-300 dark:hover:bg-white/10 dark:hover:text-white"
          >
            <X size={21} />
          </button>
        </div>

        <div className="flex items-center justify-between border-b border-slate-200 px-5 py-3 dark:border-white/10">
          <span className="text-sm text-slate-500 dark:text-slate-400">
            {cartCount} {cartCount === 1 ? "item" : "items"}
          </span>

          {cart.length > 0 && (
            <span className="text-xs font-semibold text-emerald-600">
              Ready to checkout
            </span>
          )}
        </div>

        <div className="custom-scrollbar flex-1 overflow-y-auto px-5 py-5">
          {cart.length === 0 ? (
            <div className="flex min-h-[60vh] flex-col items-center justify-center text-center">
              <div className="flex h-20 w-20 items-center justify-center rounded-full bg-slate-100 dark:bg-white/10">
                <ShoppingBag
                  size={30}
                  className="text-slate-400 dark:text-slate-500"
                />
              </div>

              <h3 className="mt-6 text-xl font-black text-slate-950 dark:text-white">
                Your cart is empty
              </h3>

              <p className="mt-2 max-w-xs text-sm leading-6 text-slate-500 dark:text-slate-400">
                Discover premium Auralis earbuds and add your favorite pair to
                the cart.
              </p>

              <Link
                to="/products"
                onClick={closeCart}
                className="mt-7 inline-flex items-center gap-2 rounded-full bg-slate-950 px-6 py-3 text-sm font-bold text-white transition hover:-translate-y-0.5 dark:bg-white dark:text-slate-950"
              >
                Explore Products
                <ArrowRight size={16} />
              </Link>
            </div>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.id}
                  className="rounded-2xl border border-slate-200 p-3 dark:border-white/10"
                >
                  <div className="flex gap-3">
                    <div className="h-24 w-24 shrink-0 overflow-hidden rounded-xl bg-slate-100 dark:bg-white/5">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover"
                      />
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex items-start justify-between gap-2">
                        <div>
                          <h3 className="line-clamp-2 text-sm font-bold text-slate-950 dark:text-white">
                            {item.name}
                          </h3>

                          {item.category && (
                            <p className="mt-1 text-xs text-slate-400">
                              {item.category}
                            </p>
                          )}
                        </div>

                        <button
                          type="button"
                          onClick={() => removeFromCart(item.id)}
                          aria-label={`Remove ${item.name}`}
                          className="shrink-0 text-slate-400 transition hover:text-red-500"
                        >
                          <Trash2 size={17} />
                        </button>
                      </div>

                      <div className="mt-4 flex items-center justify-between">
                        <div className="flex items-center rounded-full border border-slate-200 dark:border-white/10">
                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity - 1)
                            }
                            className="flex h-8 w-8 items-center justify-center text-slate-500 transition hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                          >
                            <Minus size={14} />
                          </button>

                          <span className="w-7 text-center text-xs font-bold text-slate-950 dark:text-white">
                            {item.quantity}
                          </span>

                          <button
                            type="button"
                            onClick={() =>
                              updateQuantity(item.id, item.quantity + 1)
                            }
                            className="flex h-8 w-8 items-center justify-center text-slate-500 transition hover:text-slate-950 dark:text-slate-400 dark:hover:text-white"
                          >
                            <Plus size={14} />
                          </button>
                        </div>

                        <p className="text-sm font-black text-slate-950 dark:text-white">
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
          )}
        </div>

        {cart.length > 0 && (
          <div className="border-t border-slate-200 bg-white p-5 dark:border-white/10 dark:bg-slate-950">
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-500 dark:text-slate-400">
                  Subtotal
                </span>
                <span className="font-semibold text-slate-950 dark:text-white">
                  ?{Number(subtotal).toLocaleString("en-IN")}
                </span>
              </div>

              <div className="flex justify-between text-sm">
                <span className="text-slate-500 dark:text-slate-400">
                  Shipping
                </span>
                <span className="font-semibold text-slate-950 dark:text-white">
                  {shipping === 0
                    ? "Free"
                    : `?${Number(shipping).toLocaleString("en-IN")}`}
                </span>
              </div>

              <div className="flex items-center justify-between border-t border-slate-200 pt-3 dark:border-white/10">
                <span className="font-bold text-slate-950 dark:text-white">
                  Total
                </span>

                <span className="text-xl font-black text-slate-950 dark:text-white">
                  ?{Number(total).toLocaleString("en-IN")}
                </span>
              </div>
            </div>

            <Link
              to="/cart"
              onClick={closeCart}
              className="mt-5 flex w-full items-center justify-center gap-2 rounded-full bg-slate-950 px-5 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:shadow-xl dark:bg-white dark:text-slate-950"
            >
              View Cart
              <ArrowRight size={17} />
            </Link>
          </div>
        )}
      </aside>
    </>
  );
}
