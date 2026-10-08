import { motion } from "framer-motion";
import {
  AudioLines,
  Heart,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";

export default function About() {
  const values = [
    {
      icon: AudioLines,
      title: "Sound first",
      text: "Every decision starts with the listening experience. We tune every product to make music feel natural and immersive.",
    },
    {
      icon: Sparkles,
      title: "Thoughtful design",
      text: "We believe great technology should look simple, feel effortless and fit naturally into everyday life.",
    },
    {
      icon: Heart,
      title: "Made for people",
      text: "Comfort, usability and reliability are just as important to us as technical specifications.",
    },
    {
      icon: ShieldCheck,
      title: "Built to last",
      text: "From materials to software, we focus on creating products that stay useful long after the first listen.",
    },
  ];

  return (
    <div className="pt-[74px]">
      <section className="hero-grid border-b border-zinc-200 py-20 dark:border-zinc-800">
        <div className="page-container">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-400">
            About Auralis
          </p>

          <h1 className="mt-5 max-w-5xl text-5xl font-black leading-[0.95] tracking-[-0.05em] sm:text-7xl lg:text-8xl">
            We make technology
            <span className="text-zinc-400"> disappear.</span>
          </h1>

          <p className="mt-8 max-w-2xl text-base leading-8 text-zinc-500 sm:text-lg dark:text-zinc-400">
            Auralis was created around a simple belief: the best technology
            doesn't ask for your attention. It gives your attention back to
            what matters.
          </p>
        </div>
      </section>

      <section className="page-container py-24">
        <div className="grid gap-14 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-400">
              Our story
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
              Born from a love of listening.
            </h2>

            <div className="mt-7 space-y-5 text-sm leading-8 text-zinc-500 dark:text-zinc-400">
              <p>
                Auralis started with a question: why should premium sound
                require complicated products?
              </p>

              <p>
                We wanted to build wireless earbuds that were beautifully
                simple, genuinely comfortable and capable of delivering the
                kind of sound that makes you stop and listen.
              </p>

              <p>
                Today, our focus remains the same — thoughtful engineering,
                clean design and an obsession with the details people actually
                notice.
              </p>
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="overflow-hidden rounded-[36px] bg-zinc-100 dark:bg-zinc-900"
          >
            <img
              src="https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=1200&q=85"
              alt="Auralis audio"
              className="aspect-square w-full object-cover"
            />
          </motion.div>
        </div>
      </section>

      <section className="bg-black py-24 text-white dark:bg-white dark:text-black">
        <div className="page-container">
          <div className="grid gap-10 sm:grid-cols-3">
            {[
              ["8+", "Audio products"],
              ["50K+", "Listeners"],
              ["4.8/5", "Average rating"],
            ].map(([number, label]) => (
              <div key={label}>
                <p className="text-5xl font-black sm:text-6xl">{number}</p>
                <p className="mt-3 text-sm text-white/50 dark:text-black/50">
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="page-container py-24">
        <div className="max-w-2xl">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-400">
            What we believe
          </p>

          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">
            Four principles. One obsession.
          </h2>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {values.map((value) => (
            <motion.article
              whileHover={{ y: -5 }}
              key={value.title}
              className="rounded-[28px] border border-zinc-200 bg-white p-7 dark:border-zinc-800 dark:bg-zinc-950"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-zinc-100 dark:bg-zinc-900">
                <value.icon size={22} />
              </div>

              <h3 className="mt-7 text-xl font-bold">{value.title}</h3>

              <p className="mt-3 text-sm leading-7 text-zinc-500 dark:text-zinc-400">
                {value.text}
              </p>
            </motion.article>
          ))}
        </div>
      </section>

      <section className="page-container pb-24">
        <div className="rounded-[36px] bg-zinc-100 p-8 sm:p-12 dark:bg-zinc-900">
          <div className="grid gap-10 md:grid-cols-3">
            <div>
              <Target size={24} />
              <h3 className="mt-5 font-bold">Our mission</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Make exceptional audio accessible without unnecessary
                complexity.
              </p>
            </div>

            <div>
              <Users size={24} />
              <h3 className="mt-5 font-bold">Our community</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Build products around real people and how they actually listen.
              </p>
            </div>

            <div>
              <Sparkles size={24} />
              <h3 className="mt-5 font-bold">Our future</h3>
              <p className="mt-2 text-sm leading-6 text-zinc-500">
                Keep pushing wireless audio forward while keeping the
                experience beautifully simple.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}