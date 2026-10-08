import { motion } from "framer-motion";
import {
  ArrowLeft,
  Check,
  Minus,
  Plus,
  ShieldCheck,
  ShoppingBag,
  Truck,
} from "lucide-react";
import { Link, useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { products } from "../data/products";
import Rating from "../components/Rating";
import Button from "../components/Button";
import ProductCard from "../components/ProductCard";
import ReviewCard from "../components/ReviewCard";
import { useCart } from "../context/CartContext";

const reviews = [
  {
    name: "Arjun K.",
    date: "2 weeks ago",
    rating: 5,
    comment:
      "Excellent sound quality and very comfortable. The ANC works really well during my daily commute.",
  },
  {
    name: "Sneha P.",
    date: "1 month ago",
    rating: 5,
    comment:
      "The case is compact and battery life is amazing. I would definitely recommend these.",
  },
  {
    name: "Vikram S.",
    date: "2 months ago",
    rating: 4,
    comment:
      "Very good earbuds overall. The audio feels rich and the design is premium.",
  },
];

export default function ProductDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find((item) => item.id === Number(id));

  const [quantity, setQuantity] = useState(1);
  const [added, setAdded] = useState(false);

  if (!product) {
    return (
      <div className="flex min-h-screen items-center justify-center pt-[74px]">
        <div className="text-center">
          <h1 className="text-3xl font-black">Product not found</h1>

          <Link
            to="/products"
            className="mt-5 inline-block rounded-full bg-black px-6 py-3 text-sm font-semibold text-white dark:bg-white dark:text-black"
          >
            Back to products
          </Link>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let index = 0; index < quantity; index += 1) {
      addToCart(product);
    }

    setAdded(true);

    setTimeout(() => {
      setAdded(false);
    }, 2000);
  };

  const discount = Math.round(
    ((product.originalPrice - product.price) / product.originalPrice) * 100,
  );

  return (
    <div className="pt-[74px]">
      <section className="page-container py-8">
        <button
          onClick={() => navigate(-1)}
          className="mb-8 flex items-center gap-2 text-sm font-medium text-zinc-500 hover:text-black dark:hover:text-white"
        >
          <ArrowLeft size={16} />
          Back
        </button>

        <div className="grid gap-12 lg:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="overflow-hidden rounded-[32px] bg-zinc-100 dark:bg-zinc-900"
          >
            <img
              src={product.image}
              alt={product.name}
              className="aspect-square h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex flex-col justify-center"
          >
            <div className="flex items-center gap-2">
              <span className="rounded-full bg-black px-3 py-1.5 text-[10px] font-bold uppercase tracking-wider text-white dark:bg-white dark:text-black">
                {product.badge}
              </span>

              <span className="text-xs text-zinc-400">
                {product.category}
              </span>
            </div>

            <h1 className="mt-5 text-4xl font-black tracking-tight sm:text-6xl">
              {product.name}
            </h1>

            <p className="mt-3 text-sm font-medium text-zinc-400">
              {product.color}
            </p>

            <div className="mt-5">
              <Rating rating={product.rating} reviews={product.reviews} />
            </div>

            <p className="mt-7 max-w-xl text-base leading-8 text-zinc-500 dark:text-zinc-400">
              {product.description}
            </p>

            <div className="mt-7 flex items-end gap-3">
              <span className="text-4xl font-black">
                ₹{product.price.toLocaleString()}
              </span>

              <span className="pb-1 text-sm text-zinc-400 line-through">
                ₹{product.originalPrice.toLocaleString()}
              </span>

              <span className="rounded-full bg-emerald-100 px-3 py-1 text-xs font-bold text-emerald-700 dark:bg-emerald-950 dark:text-emerald-400">
                Save {discount}%
              </span>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <div className="flex h-12 items-center rounded-full border border-zinc-200 dark:border-zinc-800">
                <button
                  onClick={() =>
                    setQuantity((current) => Math.max(1, current - 1))
                  }
                  className="flex h-12 w-12 items-center justify-center"
                >
                  <Minus size={15} />
                </button>

                <span className="w-8 text-center text-sm font-bold">
                  {quantity}
                </span>

                <button
                  onClick={() => setQuantity((current) => current + 1)}
                  className="flex h-12 w-12 items-center justify-center"
                >
                  <Plus size={15} />
                </button>
              </div>

              <Button
                onClick={handleAddToCart}
                className="h-12 flex-1 gap-2 sm:flex-none sm:px-10"
              >
                <ShoppingBag size={17} />
                {added ? "Added to Cart" : "Add to Cart"}
              </Button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                [Truck, "Free delivery", "Orders over ₹3,000"],
                [ShieldCheck, "1 year warranty", "安心 included"],
                [Check, "Easy returns", "7 day returns"],
              ].map(([Icon, title, text]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-zinc-200 p-4 dark:border-zinc-800"
                >
                  <Icon size={18} />

                  <p className="mt-3 text-xs font-bold">{title}</p>

                  <p className="mt-1 text-[10px] text-zinc-400">{text}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-white py-20 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="page-container">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr]">
            <div>
              <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-400">
                Product details
              </p>

              <h2 className="mt-3 text-4xl font-black tracking-tight">
                Built for better listening.
              </h2>

              <p className="mt-5 text-sm leading-7 text-zinc-500 dark:text-zinc-400">
                Every detail is carefully designed to deliver a premium
                listening experience without compromising comfort.
              </p>
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              {product.features.map((feature) => (
                <div
                  key={feature}
                  className="flex items-center gap-3 rounded-2xl border border-zinc-200 p-5 dark:border-zinc-800"
                >
                  <div className="flex h-9 w-9 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-900">
                    <Check size={15} />
                  </div>

                  <span className="text-sm font-semibold">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="page-container py-20">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-400">
              Reviews
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight">
              What listeners say.
            </h2>
          </div>

          <Rating rating={product.rating} reviews={product.reviews} />
        </div>

        <div className="mt-10 grid gap-4 md:grid-cols-3">
          {reviews.map((review) => (
            <ReviewCard key={review.name} review={review} />
          ))}
        </div>
      </section>

      <section className="page-container pb-24">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-400">
              You may also like
            </p>

            <h2 className="mt-3 text-3xl font-black">More from Auralis</h2>
          </div>

          <Link
            to="/products"
            className="hidden text-sm font-bold underline underline-offset-4 sm:block"
          >
            View all
          </Link>
        </div>

        <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {products
            .filter((item) => item.id !== product.id)
            .slice(0, 4)
            .map((item) => (
              <ProductCard key={item.id} product={item} />
            ))}
        </div>
      </section>
    </div>
  );
}