import { motion } from "framer-motion";
import {
  ArrowRight,
  Check,
  Headphones,
  Play,
  ShieldCheck,
  Sparkles,
  Truck,
  Volume2,
  Waves,
} from "lucide-react";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";
import Button from "../components/Button";
import Rating from "../components/Rating";
import { products } from "../data/products";

const testimonials = [
  {
    name: "Ananya R.",
    role: "Verified Customer",
    text: "The sound quality is incredible for the price. The Air Pro has become my everyday companion.",
    rating: 5,
  },
  {
    name: "Rahul M.",
    role: "Verified Customer",
    text: "Super comfortable, excellent bass and the battery easily lasts through my workday.",
    rating: 5,
  },
  {
    name: "Meera S.",
    role: "Verified Customer",
    text: "I love the minimal design. The ANC is surprisingly good and calls are very clear.",
    rating: 5,
  },
];

export default function Home() {
  const featuredProducts = products.slice(0, 4);

  return (
    <div id="top">
      <section className="hero-grid relative overflow-hidden pt-[74px]">
        <div className="page-container grid min-h-[calc(100vh-74px)] items-center gap-10 py-16 lg:grid-cols-2 lg:py-20">
          <div className="relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-6 inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 px-4 py-2 text-xs font-semibold backdrop-blur dark:border-zinc-800 dark:bg-zinc-950/80"
            >
              <Sparkles size={14} />
              New generation audio
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="max-w-3xl text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-6xl lg:text-8xl"
            >
              Sound that
              <span className="block text-zinc-400">moves you.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-7 max-w-xl text-base leading-7 text-zinc-500 sm:text-lg dark:text-zinc-400"
            >
              Meet Auralis — premium wireless earbuds engineered with
              immersive sound, intelligent noise cancellation and all-day
              comfort.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-9 flex flex-wrap gap-3"
            >
              <Link to="/products">
                <Button className="gap-2">
                  Shop earbuds
                  <ArrowRight size={16} />
                </Button>
              </Link>

              <Link to="/about">
                <Button variant="secondary" className="gap-2">
                  <Play size={15} />
                  Discover Auralis
                </Button>
              </Link>
            </motion.div>

            <div className="mt-10 flex flex-wrap items-center gap-6 text-xs text-zinc-500">
              <span className="flex items-center gap-2">
                <Check size={15} />
                Free shipping over ₹3,000
              </span>

              <span className="flex items-center gap-2">
                <Check size={15} />
                1 year warranty
              </span>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.92 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute left-1/2 top-1/2 h-[80%] w-[80%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-zinc-200 blur-3xl dark:bg-zinc-900" />

            <div className="relative mx-auto max-w-xl overflow-hidden rounded-[40px] border border-zinc-200 bg-zinc-100 p-5 shadow-2xl dark:border-zinc-800 dark:bg-zinc-900">
              <img
                src={products[0].image}
                alt={products[0].name}
                className="aspect-square w-full rounded-[30px] object-cover"
              />

              <div className="absolute bottom-10 left-10 right-10 flex items-center justify-between rounded-2xl border border-white/20 bg-black/75 p-4 text-white backdrop-blur-xl">
                <div>
                  <p className="text-[10px] uppercase tracking-[0.2em] text-white/50">
                    Featured
                  </p>
                  <p className="mt-1 font-bold">{products[0].name}</p>
                </div>

                <span className="text-xl font-black">
                  ₹{products[0].price.toLocaleString()}
                </span>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -right-2 top-10 hidden rounded-2xl border border-zinc-200 bg-white p-4 shadow-xl sm:block dark:border-zinc-800 dark:bg-zinc-950"
            >
              <Volume2 size={20} />
              <p className="mt-2 text-xs font-bold">Spatial Audio</p>
              <p className="mt-1 text-[10px] text-zinc-400">360° immersion</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section className="border-y border-zinc-200 bg-white dark:border-zinc-800 dark:bg-zinc-950">
        <div className="page-container grid grid-cols-2 divide-x divide-zinc-200 py-6 sm:grid-cols-4 dark:divide-zinc-800">
          {[
            [Waves, "Immersive Sound"],
            [ShieldCheck, "1 Year Warranty"],
            [Truck, "Fast Delivery"],
            [Headphones, "24/7 Support"],
          ].map(([Icon, text]) => (
            <div
              key={text}
              className="flex items-center justify-center gap-2 px-3 py-3 text-center"
            >
              <Icon size={17} />
              <span className="text-xs font-semibold sm:text-sm">{text}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="page-container py-24">
        <div className="flex flex-col justify-between gap-5 sm:flex-row sm:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-400">
              Curated collection
            </p>

            <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
              Find your sound.
            </h2>
          </div>

          <Link
            to="/products"
            className="flex items-center gap-2 text-sm font-bold underline underline-offset-4"
          >
            View all products
            <ArrowRight size={15} />
          </Link>
        </div>

        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      <section className="bg-black py-24 text-white dark:bg-white dark:text-black">
        <div className="page-container grid items-center gap-12 lg:grid-cols-2">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-white/50 dark:text-black/50">
              The Auralis difference
            </p>

            <h2 className="mt-4 max-w-xl text-4xl font-black tracking-tight sm:text-6xl">
              Technology you can feel.
            </h2>

            <p className="mt-6 max-w-lg text-sm leading-7 text-white/60 dark:text-black/60">
              Every Auralis product is designed around one simple idea:
              technology should disappear so your music can take over.
            </p>

            <Link to="/about" className="mt-8 inline-block">
              <Button variant="light" className="gap-2">
                Explore our technology
                <ArrowRight size={15} />
              </Button>
            </Link>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              {
                icon: Volume2,
                title: "Adaptive ANC",
                text: "Block distractions intelligently.",
              },
              {
                icon: Waves,
                title: "Spatial Audio",
                text: "Feel surrounded by your music.",
              },
              {
                icon: Sparkles,
                title: "Hi-Res Sound",
                text: "Every detail, beautifully tuned.",
              },
              {
                icon: Headphones,
                title: "All-Day Comfort",
                text: "Designed around your ears.",
              },
            ].map((item) => (
              <motion.div
                whileHover={{ y: -5 }}
                key={item.title}
                className="rounded-3xl border border-white/10 bg-white/5 p-6 dark:border-black/10 dark:bg-black/5"
              >
                <item.icon size={22} />

                <h3 className="mt-8 font-bold">{item.title}</h3>

                <p className="mt-2 text-sm leading-6 text-white/50 dark:text-black/50">
                  {item.text}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-container py-24">
        <div className="text-center">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-400">
            Loved by listeners
          </p>

          <h2 className="mt-3 text-4xl font-black tracking-tight sm:text-5xl">
            Hear it from them.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <motion.article
              whileHover={{ y: -5 }}
              key={testimonial.name}
              className="rounded-[28px] border border-zinc-200 bg-white p-7 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <Rating rating={testimonial.rating} reviews={0} />

              <p className="mt-6 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
                “{testimonial.text}”
              </p>

              <div className="mt-7 border-t border-zinc-100 pt-5 dark:border-zinc-800">
                <p className="text-sm font-bold">{testimonial.name}</p>
                <p className="mt-1 text-xs text-zinc-400">
                  {testimonial.role}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="page-container pb-24">
        <div className="relative overflow-hidden rounded-[36px] bg-zinc-100 p-8 sm:p-12 dark:bg-zinc-900">
          <div className="relative z-10 max-w-xl">
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-400">
              Limited offer
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Your next favorite sound is 20% closer.
            </h2>

            <p className="mt-5 text-sm leading-7 text-zinc-500 dark:text-zinc-400">
              Get 10% off orders above ₹5,000 and free shipping on orders above
              ₹3,000.
            </p>

            <Link to="/products" className="mt-7 inline-block">
              <Button className="gap-2">
                Shop the offer
                <ArrowRight size={15} />
              </Button>
            </Link>
          </div>

          <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white dark:bg-zinc-800" />
        </div>
      </section>
    </div>
  );
}