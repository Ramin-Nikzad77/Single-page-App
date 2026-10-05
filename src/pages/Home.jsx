import { Link } from "react-router-dom";
import { ArrowDown, ArrowRight, ArrowUpRight } from "lucide-react";
import product from "../product";

export default function Home() {
  return (
    <main>
      <section className="relative isolate min-h-[540px] overflow-hidden bg-ink sm:min-h-[620px] lg:min-h-[690px]">
        <img
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=2400&q=90"
          alt="A bright, considered workspace with a laptop and everyday tools"
          className="absolute inset-0 -z-20 size-full object-cover object-center"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-r from-black/75 via-black/40 to-black/5" />
        <div className="mx-auto flex min-h-[540px] max-w-7xl items-center px-6 py-16 sm:min-h-[620px] sm:px-10 lg:min-h-[690px] lg:px-12">
          <div className="rise-in max-w-2xl text-white">
            <p className="mb-6 flex items-center gap-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-lime">
              <span className="h-px w-8 bg-lime" /> An online shopping platform
            </p>
            <h1 className="font-display text-5xl leading-[1.08] sm:text-6xl lg:text-7xl">
              Everyday things,
              <br />
              you <em className="font-medium text-lime">need.</em>
            </h1>
            <p className="mt-6 max-w-md text-base leading-7 text-white/80 sm:text-lg">
              Meet the useful, well-made essentials that make the everyday feel
              a little more yours.
            </p>
            <Link
              to="/products"
              className="mt-9 inline-flex items-center gap-3 rounded-full bg-lime px-6 py-3.5 text-sm font-bold text-ink no-underline transition-transform hover:-translate-y-0.5"
            >
              Available Products
              <ArrowUpRight size={17} />
            </Link>
          </div>
          <a
            href="#favorites"
            aria-label="Scroll to favorites"
            className="absolute bottom-8 right-8 hidden size-12 items-center justify-center rounded-full border border-white/40 text-white transition-colors hover:bg-white hover:text-ink sm:flex lg:right-12"
          >
            <ArrowDown size={19} />
          </a>
        </div>
      </section>

      <section
        id="favorites"
        className="mx-auto max-w-7xl px-5 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-24"
      >
        <div className="mb-8 flex items-end justify-between gap-5 sm:mb-10">
          <div>
            <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.18em] text-moss">
              The good stuff
            </p>
            <h2 className="font-display text-3xl sm:text-4xl">
              A few current favorites
            </h2>
          </div>
          <Link
            to="/products"
            className="mb-1 flex items-center gap-2 text-sm font-semibold text-ink no-underline hover:text-moss"
          >
            Shop everything <ArrowRight size={16} />
          </Link>
        </div>
        <div className="grid grid-cols-2 gap-x-4 gap-y-8 sm:gap-x-6 lg:grid-cols-4">
          {product.map((item, index) => (
            <Link
              key={item.id}
              to={`/products/${item.id}`}
              className={`group text-ink no-underline rise-in-delay-${index + 1}`}
            >
              <div className="aspect-[4/4.5] overflow-hidden bg-[#e9e8e1]">
                <img
                  src={item.image}
                  alt={item.name}
                  className="size-full object-cover transition-transform duration-500 group-hover:scale-[1.04]"
                />
              </div>
              <div className="flex items-baseline justify-between gap-2 pt-3.5">
                <h3 className="text-sm font-semibold sm:text-base">
                  {item.name}
                </h3>
                <span className="text-sm text-muted">${item.price}</span>
              </div>
              <span className="mt-2 inline-flex items-center gap-1 text-xs font-semibold text-moss opacity-0 transition-opacity group-hover:opacity-100">
                View details <ArrowUpRight size={13} />
              </span>
            </Link>
          ))}
        </div>
      </section>
    </main>
  );
}
