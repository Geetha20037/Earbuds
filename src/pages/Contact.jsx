import {
  Clock3,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
  Send,
} from "lucide-react";
import { useState } from "react";
import Button from "../components/Button";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);

    setTimeout(() => {
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="pt-[74px]">
      <section className="border-b border-zinc-200 py-20 dark:border-zinc-800">
        <div className="page-container">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-400">
            Contact
          </p>

          <h1 className="mt-4 text-5xl font-black tracking-tight sm:text-7xl">
            Let's talk.
          </h1>

          <p className="mt-6 max-w-xl text-base leading-7 text-zinc-500 dark:text-zinc-400">
            Have a question about a product, order or anything Auralis? Our
            team is ready to help.
          </p>
        </div>
      </section>

      <section className="page-container py-16">
        <div className="grid gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <div>
            <div className="grid gap-4">
              {[
                [Mail, "Email us", "hello@auralis.example"],
                [Phone, "Call us", "+91 90000 00000"],
                [MapPin, "Visit us", "Bengaluru, Karnataka"],
                [Clock3, "Support hours", "Mon – Sat, 9 AM – 7 PM"],
              ].map(([Icon, title, value]) => (
                <div
                  key={title}
                  className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950"
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-zinc-100 dark:bg-zinc-900">
                    <Icon size={18} />
                  </div>

                  <h3 className="mt-4 text-sm font-bold">{title}</h3>

                  <p className="mt-1 text-sm text-zinc-500 dark:text-zinc-400">
                    {value}
                  </p>
                </div>
              ))}
            </div>

            <div className="mt-4 rounded-2xl bg-black p-6 text-white dark:bg-white dark:text-black">
              <MessageCircle size={22} />

              <h3 className="mt-5 font-bold">Need quick help?</h3>

              <p className="mt-2 text-sm leading-6 text-white/50 dark:text-black/50">
                Our support team usually responds within a few hours.
              </p>
            </div>
          </div>

          <form
            onSubmit={handleSubmit}
            className="rounded-[32px] border border-zinc-200 bg-white p-7 sm:p-9 dark:border-zinc-800 dark:bg-zinc-950"
          >
            <div className="grid gap-5 sm:grid-cols-2">
              <div>
                <label className="text-xs font-bold">First name</label>

                <input
                  required
                  type="text"
                  placeholder="Your name"
                  className="mt-2 h-12 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 text-sm dark:border-zinc-800 dark:bg-zinc-900"
                />
              </div>

              <div>
                <label className="text-xs font-bold">Email</label>

                <input
                  required
                  type="email"
                  placeholder="you@example.com"
                  className="mt-2 h-12 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 text-sm dark:border-zinc-800 dark:bg-zinc-900"
                />
              </div>
            </div>

            <div className="mt-5">
              <label className="text-xs font-bold">Subject</label>

              <select
                required
                className="mt-2 h-12 w-full rounded-xl border border-zinc-200 bg-zinc-50 px-4 text-sm dark:border-zinc-800 dark:bg-zinc-900"
              >
                <option value="">Choose a subject</option>
                <option>Product question</option>
                <option>Order support</option>
                <option>Warranty</option>
                <option>Returns</option>
                <option>Other</option>
              </select>
            </div>

            <div className="mt-5">
              <label className="text-xs font-bold">Message</label>

              <textarea
                required
                rows="6"
                placeholder="How can we help?"
                className="mt-2 w-full resize-none rounded-xl border border-zinc-200 bg-zinc-50 p-4 text-sm dark:border-zinc-800 dark:bg-zinc-900"
              />
            </div>

            <Button type="submit" className="mt-5 w-full gap-2">
              <Send size={16} />
              {submitted ? "Message Sent!" : "Send Message"}
            </Button>
          </form>
        </div>
      </section>
    </div>
  );
}