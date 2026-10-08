import { Star } from "lucide-react";

export default function Rating({ rating, reviews, light = false }) {
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center gap-0.5">
        {[1, 2, 3, 4, 5].map((star) => (
          <Star
            key={star}
            size={14}
            fill="currentColor"
            className={
              star <= Math.round(rating)
                ? light
                  ? "text-white"
                  : "text-amber-400"
                : "text-zinc-300 dark:text-zinc-700"
            }
          />
        ))}
      </div>

      <span
        className={`text-xs ${
          light
            ? "text-white/70"
            : "text-zinc-500 dark:text-zinc-400"
        }`}
      >
        {rating} ({reviews})
      </span>
    </div>
  );
}