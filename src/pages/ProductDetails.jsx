import { useNavigate, useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { ArrowLeft, ArrowUpRight } from "lucide-react";
import product from "../product";

export default function ProductDetails() {
  const navigate = useNavigate();
  const { id } = useParams();
  const wantedProduct = product.find((item) => item.id === Number(id));

  if (!wantedProduct) {
    return (
      <main className="mx-auto grid min-h-[65vh] max-w-7xl place-items-center px-5 py-16 text-center">
        <div>
          <p className="mb-3 text-[11px] font-bold uppercase tracking-[0.18em] text-moss">
            A little detour
          </p>
          <h1 className="font-display text-4xl">That one got away.</h1>
          <button
            onClick={() => navigate("/products")}
            className="mt-7 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-moss"
          >
            Browse the collection
          </button>
        </div>
      </main>
    );
  }
  return (
    <main className="mx-auto max-w-7xl px-5 pb-20 pt-8 sm:px-8 sm:pt-12 lg:px-12 lg:pb-24">
      <button
        onClick={() => navigate(-1)}
        className="mb-7 inline-flex items-center gap-2 text-sm font-medium text-muted transition-colors hover:text-ink"
      >
        <ArrowLeft size={16} /> Back
      </button>
      <div className="grid gap-9 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16">
        <div className="relative aspect-[4/3] overflow-hidden bg-[#e9e8e1] sm:aspect-[5/4]">
          <img
            src={wantedProduct.image}
            alt={wantedProduct.name}
            className="size-full object-cover"
          />
          <span className="absolute bottom-4 left-4 bg-paper px-3 py-2 text-[10px] font-bold uppercase tracking-[0.14em]">
            Essential 0{wantedProduct.id}
          </span>
        </div>
        <section className="flex flex-col justify-center py-1 lg:py-8">
          <p className="mb-4 text-[11px] font-bold uppercase tracking-[0.18em] text-moss">
            A good choice, made simple
          </p>
          <h1 className="font-display text-4xl sm:text-5xl">
            {wantedProduct.name}
          </h1>
          <p className="mt-4 text-lg text-muted">${wantedProduct.price}</p>
          <div className="my-7 h-px bg-ink/15" />
          <p className="max-w-md text-base leading-7 text-ink/75">
            {wantedProduct.description}
          </p>
          <p className="mt-3 max-w-md text-sm leading-6 text-muted">
            Thoughtfully selected for its everyday usefulness, considered
            design, and lasting place in your routine.
          </p>
          <Link
            to="/products"
            className="mt-9 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-moss"
          >
            Continue browsing <ArrowUpRight size={16} />
          </Link>
          <Link
            to="/checkout"
            className="mt-9 inline-flex w-fit items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white no-underline transition-colors hover:bg-moss"
          >
            Add to checkout <ArrowUpRight size={16} />
          </Link>
        </section>
      </div>
    </main>
  );
}
