import { Filter, RotateCcw, X } from "lucide-react";

export default function FilterPanel({
  category,
  setCategory,
  minPrice,
  setMinPrice,
  maxPrice,
  setMaxPrice,
  rating,
  setRating,
  sortBy,
  setSortBy,
  onReset,
  mobileOpen,
  setMobileOpen,
}) {
  const categories = ["All", "Premium", "Everyday", "Sport"];

  const content = (
    <div className="space-y-7">
      <div>
        <div className="mb-3 flex items-center justify-between">
          <h3 className="text-sm font-bold">Category</h3>

          {mobileOpen && (
            <button
              onClick={() => setMobileOpen(false)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-900"
            >
              <X size={15} />
            </button>
          )}
        </div>

        <div className="space-y-2">
          {categories.map((item) => (
            <button
              key={item}
              onClick={() => setCategory(item)}
              className={`flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm transition ${
                category === item
                  ? "bg-black font-semibold text-white dark:bg-white dark:text-black"
                  : "text-zinc-500 hover:bg-zinc-100 hover:text-black dark:text-zinc-400 dark:hover:bg-zinc-900 dark:hover:text-white"
              }`}
            >
              <span>{item}</span>

              {category === item && <span>✓</span>}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-bold">Price Range</h3>

        <div className="grid grid-cols-2 gap-2">
          <input
            type="number"
            min="0"
            value={minPrice}
            onChange={(event) => setMinPrice(event.target.value)}
            placeholder="Min"
            className="h-10 w-full rounded-xl border border-zinc-200 bg-white px-3 text-sm dark:border-zinc-800 dark:bg-zinc-950"
          />

          <input
            type="number"
            min="0"
            value={maxPrice}
            onChange={(event) => setMaxPrice(event.target.value)}
            placeholder="Max"
            className="h-10 w-full rounded-xl border border-zinc-200 bg-white px-3 text-sm dark:border-zinc-800 dark:bg-zinc-950"
          />
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-bold">Minimum Rating</h3>

        <div className="space-y-2">
          {[0, 4, 4.5].map((item) => (
            <button
              key={item}
              onClick={() => setRating(item)}
              className={`flex w-full items-center justify-between rounded-xl px-3 py-2 text-sm transition ${
                rating === item
                  ? "bg-zinc-100 font-semibold text-black dark:bg-zinc-900 dark:text-white"
                  : "text-zinc-500 dark:text-zinc-400"
              }`}
            >
              <span>{item === 0 ? "All ratings" : `${item}+ stars`}</span>

              {rating === item && <span>✓</span>}
            </button>
          ))}
        </div>
      </div>

      <div>
        <h3 className="mb-3 text-sm font-bold">Sort By</h3>

        <select
          value={sortBy}
          onChange={(event) => setSortBy(event.target.value)}
          className="h-11 w-full rounded-xl border border-zinc-200 bg-white px-3 text-sm dark:border-zinc-800 dark:bg-zinc-950"
        >
          <option value="featured">Featured</option>
          <option value="price-low">Price: Low to High</option>
          <option value="price-high">Price: High to Low</option>
          <option value="rating">Highest Rated</option>
          <option value="newest">Newest</option>
        </select>
      </div>

      <button
        onClick={onReset}
        className="flex w-full items-center justify-center gap-2 rounded-xl border border-zinc-200 py-3 text-sm font-semibold transition hover:bg-zinc-100 dark:border-zinc-800 dark:hover:bg-zinc-900"
      >
        <RotateCcw size={15} />
        Reset Filters
      </button>
    </div>
  );

  if (mobileOpen) {
    return (
      <div className="fixed inset-0 z-[70] lg:hidden">
        <div
          className="absolute inset-0 bg-black/50"
          onClick={() => setMobileOpen(false)}
        />

        <aside className="absolute left-0 top-0 h-full w-[85%] max-w-sm overflow-y-auto bg-[#f7f7f5] p-6 dark:bg-[#080808]">
          <div className="mb-7 flex items-center gap-2">
            <Filter size={18} />
            <span className="font-bold">Filters</span>
          </div>

          {content}
        </aside>
      </div>
    );
  }

  return (
    <aside className="hidden lg:block">
      <div className="sticky top-28 rounded-[28px] border border-zinc-200 bg-white p-6 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="mb-7 flex items-center gap-2">
          <Filter size={18} />
          <h2 className="font-bold">Filters</h2>
        </div>

        {content}
      </div>
    </aside>
  );
}