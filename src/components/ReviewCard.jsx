import { ThumbsUp } from "lucide-react";
import Rating from "./Rating";

export default function ReviewCard({ review }) {
  return (
    <article className="rounded-2xl border border-zinc-200 bg-white p-5 dark:border-zinc-800 dark:bg-zinc-950">
      <div className="flex items-start justify-between gap-4">
        <div>
          <p className="text-sm font-bold">{review.name}</p>

          <p className="mt-1 text-xs text-zinc-400">{review.date}</p>
        </div>

        <Rating rating={review.rating} reviews={0} />
      </div>

      <p className="mt-4 text-sm leading-7 text-zinc-600 dark:text-zinc-400">
        {review.comment}
      </p>

      <button className="mt-4 flex items-center gap-2 text-xs font-medium text-zinc-500 hover:text-black dark:text-zinc-500 dark:hover:text-white">
        <ThumbsUp size={14} />
        Helpful
      </button>
    </article>
  );
}