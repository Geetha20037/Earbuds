import { Link } from "react-router-dom";
import { ShoppingBag, ArrowUpRight } from "lucide-react";
import { useCart } from "../context/CartContext";
import Rating from "./Rating";

export default function ProductCard({ product }) {
  const { addToCart } = useCart();

  const handleAddToCart = () => {
    addToCart(product);
  };

  return (
    <article className="group overflow-hidden rounded-3xl border border-slate-200 bg-white transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-slate-900/10 dark:border-white/10 dark:bg-white/[0.03] dark:hover:shadow-black/30">
      {/* Image */}
      <Link
        to={`/products/${product.id}`}
        className="relative block aspect-square overflow-hidden bg-slate-100 dark:bg-white/5"
      >
        {product.badge && (
          <span className="absolute left-4 top-4 z-10 rounded-full bg-slate-950 px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white dark:bg-white dark:text-slate-950">
            {product.badge}
          </span>
        )}

        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
        />

        <div className="absolute bottom-4 right-4 flex h-10 w-10 translate-y-3 items-center justify-center rounded-full bg-white text-slate-950 opacity-0 shadow-lg transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100 dark:bg-slate-950 dark:text-white">
          <ArrowUpRight size={17} />
        </div>
      </Link>

      {/* Content */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div>
            <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400">
              {product.brand}
            </p>

            <Link
              to={`/products/${product.id}`}
              className="mt-1 block text-lg font-bold tracking-tight text-slate-950 transition-colors hover:text-slate-600 dark:text-white dark:hover:text-slate-300"
            >
              {product.name}
            </Link>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2">
          <Rating rating={product.rating} />

          <span className="text-xs font-medium text-slate-400">
            ({product.reviews})
          </span>
        </div>

        <div className="mt-5 flex items-end justify-between gap-3">
          <div>
            <span className="text-xl font-black text-slate-950 dark:text-white">
              ₹{product.price.toLocaleString("en-IN")}
            </span>

            {product.originalPrice && (
              <span className="ml-2 text-sm text-slate-400 line-through">
                ₹{product.originalPrice.toLocaleString("en-IN")}
              </span>
            )}
          </div>

          <button
            type="button"
            onClick={handleAddToCart}
            className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-slate-950 text-white transition-all duration-300 hover:scale-105 hover:shadow-lg dark:bg-white dark:text-slate-950"
            aria-label={`Add ${product.name} to cart`}
            title="Add to Cart"
          >
            <ShoppingBag size={18} />
          </button>
        </div>

        <button
          type="button"
          onClick={handleAddToCart}
          className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl border border-slate-200 py-3 text-sm font-bold text-slate-700 transition-all hover:bg-slate-950 hover:text-white dark:border-white/10 dark:text-slate-200 dark:hover:bg-white dark:hover:text-slate-950"
        >
          <ShoppingBag size={16} />
          Add to Cart
        </button>
      </div>
    </article>
  );
}

