import { Search, X } from "lucide-react";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="relative w-full">
      <Search
        size={18}
        className="absolute left-4 top-1/2 -translate-y-1/2 text-zinc-400"
      />

      <input
        type="text"
        value={value}
        onChange={(event) => onChange(event.target.value)}
        placeholder="Search earbuds..."
        className="h-12 w-full rounded-2xl border border-zinc-200 bg-white pl-11 pr-11 text-sm text-zinc-900 placeholder:text-zinc-400 focus:border-zinc-500 dark:border-zinc-800 dark:bg-zinc-950 dark:text-white"
      />

      {value && (
        <button
          type="button"
          onClick={() => onChange("")}
          className="absolute right-4 top-1/2 -translate-y-1/2 text-zinc-400 transition hover:text-black dark:hover:text-white"
        >
          <X size={17} />
        </button>
      )}
    </div>
  );
}