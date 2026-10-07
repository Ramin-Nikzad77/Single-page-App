import product from "../product";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ArrowUpRight, Search } from "lucide-react";

export default function Products() {
  const [searchQuery, setSearchQuery] = useState("");
  const filteredProducts = product.filter((item) =>
    `${item.name} ${item.description} ${item.price}`
      .toLowerCase()
      .includes(searchQuery.trim().toLowerCase()),
  );

  return (
    <main className="mx-auto max-w-7xl px-5 pb-20 pt-12 sm:px-8 sm:pt-16 lg:px-12 lg:pt-20">
      <div className="mb-10 border-b border-ink/15 pb-8 sm:mb-12 sm:flex sm:items-end sm:justify-between sm:pb-10">
        <div>
          <h1>This is ramin page</h1>
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-moss">
            Your requirements
          </p>
          <h1 className="font-display text-4xl sm:text-5xl">
            The Products we have
          </h1>
        </div>
        <p className="mt-4 max-w-sm text-sm leading-6 text-muted sm:mt-0">
          Useful things, considered carefully. A small edit of favorites worth
          keeping close.
        </p>
      </div>
      <div className="mb-5 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <label className="relative block w-full sm:max-w-xs">
          <Search
            aria-hidden="true"
            size={16}
            className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-muted"
          />
          <input
            type="search"
            value={searchQuery}
            onChange={(event) => setSearchQuery(event.target.value)}
            placeholder="Search products..."
            aria-label="Search products"
            className="w-full border border-ink/20 bg-transparent py-2.5 pl-9 pr-3 text-sm text-ink outline-none transition-colors placeholder:text-muted focus:border-moss"
          />
        </label>
        <div className="flex items-center justify-between text-xs text-muted sm:gap-6">
          <span>
            {filteredProducts.length} considered{" "}
            {filteredProducts.length === 1 ? "essential" : "essentials"}
          </span>
          <span>
            {filteredProducts.length
              ? `01 — 0${filteredProducts.length}`
              : "No results"}
          </span>
        </div>
      </div>
      {filteredProducts.length ? (
        <ul className="m-0 grid list-none grid-cols-2 gap-x-4 gap-y-9 p-0 sm:gap-x-6 sm:gap-y-12 lg:grid-cols-4">
          {filteredProducts.map((item, index) => (
            <li key={item.id} className={`group rise-in-delay-${index + 1}`}>
              <Link
                to={`/products/${item.id}`}
                className="text-ink no-underline"
              >
                <div className="relative aspect-[4/4.5] overflow-hidden bg-[#e9e8e1]">
                  <span className="absolute left-3 top-3 z-10 bg-paper px-2.5 py-1 text-[10px] font-bold uppercase tracking-[0.1em]">
                    Essential 0{item.id}
                  </span>
                  <img
                    src={item.image}
                    alt={item.name}
                    className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                  />
                </div>
                <div className="flex items-center justify-between gap-2 pt-3.5">
                  <h2 className="text-sm font-semibold sm:text-base">
                    {item.name}
                  </h2>
                  <span className="text-sm text-muted">${item.price}</span>
                </div>
                <p className="mt-1 text-xs capitalize text-muted">
                  {item.description}
                </p>
                <span className="mt-3 inline-flex items-center gap-1 text-xs font-semibold text-moss">
                  View details <ArrowUpRight size={13} />
                </span>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="py-12 text-center text-sm text-muted" role="status">
          No products found. Try a different search.
        </p>
      )}
    </main>
  );
}
