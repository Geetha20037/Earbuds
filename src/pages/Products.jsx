import { Filter, Grid2X2, List, ShoppingBag } from "lucide-react";
import { useMemo, useState } from "react";
import ProductCard from "../components/ProductCard";
import SearchBar from "../components/SearchBar";
import FilterPanel from "../components/FilterPanel";
import { products } from "../data/products";

export default function Products() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [rating, setRating] = useState(0);
  const [sortBy, setSortBy] = useState("featured");
  const [mobileFilters, setMobileFilters] = useState(false);
  const [view, setView] = useState("grid");

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (search.trim()) {
      const query = search.toLowerCase();

      result = result.filter(
        (product) =>
          product.name.toLowerCase().includes(query) ||
          product.category.toLowerCase().includes(query) ||
          product.color.toLowerCase().includes(query),
      );
    }

    if (category !== "All") {
      result = result.filter((product) => product.category === category);
    }

    if (minPrice) {
      result = result.filter((product) => product.price >= Number(minPrice));
    }

    if (maxPrice) {
      result = result.filter((product) => product.price <= Number(maxPrice));
    }

    if (rating > 0) {
      result = result.filter((product) => product.rating >= rating);
    }

    if (sortBy === "price-low") {
      result.sort((a, b) => a.price - b.price);
    }

    if (sortBy === "price-high") {
      result.sort((a, b) => b.price - a.price);
    }

    if (sortBy === "rating") {
      result.sort((a, b) => b.rating - a.rating);
    }

    if (sortBy === "newest") {
      result.sort((a, b) => b.id - a.id);
    }

    return result;
  }, [search, category, minPrice, maxPrice, rating, sortBy]);

  const resetFilters = () => {
    setSearch("");
    setCategory("All");
    setMinPrice("");
    setMaxPrice("");
    setRating(0);
    setSortBy("featured");
  };

  return (
    <div className="pt-[74px]">
      <section className="border-b border-zinc-200 bg-white py-16 dark:border-zinc-800 dark:bg-zinc-950">
        <div className="page-container">
          <p className="text-xs font-bold uppercase tracking-[0.25em] text-zinc-400">
            Shop Auralis
          </p>

          <h1 className="mt-3 text-5xl font-black tracking-tight sm:text-7xl">
            Find your sound.
          </h1>

          <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-500 dark:text-zinc-400">
            Explore our collection of wireless earbuds built for music,
            movement, calls and everything between.
          </p>
        </div>
      </section>

      <section className="page-container py-10">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex-1 lg:max-w-md">
            <SearchBar value={search} onChange={setSearch} />
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setMobileFilters(true)}
              className="flex h-11 items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 text-sm font-semibold lg:hidden dark:border-zinc-800 dark:bg-zinc-950"
            >
              <Filter size={16} />
              Filters
            </button>

            <div className="hidden items-center rounded-xl border border-zinc-200 bg-white p-1 sm:flex dark:border-zinc-800 dark:bg-zinc-950">
              <button
                onClick={() => setView("grid")}
                className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                  view === "grid"
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "text-zinc-400"
                }`}
              >
                <Grid2X2 size={16} />
              </button>

              <button
                onClick={() => setView("list")}
                className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                  view === "list"
                    ? "bg-black text-white dark:bg-white dark:text-black"
                    : "text-zinc-400"
                }`}
              >
                <List size={16} />
              </button>
            </div>

            <div className="flex h-11 items-center gap-2 rounded-xl border border-zinc-200 bg-white px-4 text-sm dark:border-zinc-800 dark:bg-zinc-950">
              <ShoppingBag size={15} className="text-zinc-400" />
              {filteredProducts.length} products
            </div>
          </div>
        </div>

        <div className="mt-10 grid gap-8 lg:grid-cols-[240px_1fr]">
          <FilterPanel
            category={category}
            setCategory={setCategory}
            minPrice={minPrice}
            setMinPrice={setMinPrice}
            maxPrice={maxPrice}
            setMaxPrice={setMaxPrice}
            rating={rating}
            setRating={setRating}
            sortBy={sortBy}
            setSortBy={setSortBy}
            onReset={resetFilters}
            mobileOpen={mobileFilters}
            setMobileOpen={setMobileFilters}
          />

          <div>
            {filteredProducts.length > 0 ? (
              <div
                className={
                  view === "grid"
                    ? "grid gap-5 sm:grid-cols-2 xl:grid-cols-3"
                    : "grid gap-5"
                }
              >
                {filteredProducts.map((product) => (
                  <ProductCard key={product.id} product={product} />
                ))}
              </div>
            ) : (
              <div className="flex min-h-[400px] flex-col items-center justify-center rounded-[28px] border border-dashed border-zinc-300 text-center dark:border-zinc-700">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-zinc-100 dark:bg-zinc-900">
                  <ShoppingBag size={24} className="text-zinc-400" />
                </div>

                <h2 className="mt-5 text-xl font-bold">
                  No products found
                </h2>

                <p className="mt-2 text-sm text-zinc-500">
                  Try changing your search or filters.
                </p>

                <button
                  onClick={resetFilters}
                  className="mt-5 rounded-full bg-black px-5 py-3 text-sm font-semibold text-white dark:bg-white dark:text-black"
                >
                  Clear filters
                </button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}