import Link from "next/link";
import { PRODUCTS } from "./lib/products";

const PRODUCT_CARDS = [
  {
    slug: "charger",
    label: "Anker 735 Charger",
    sub: "Baseline PDP — Req #1 lite",
    bg: "from-bluegray-100 to-white",
  },
  {
    slug: "iphone",
    label: "Apple iPhone 15 Pro",
    sub: "Req #1 — Variant Pricing on storage tiles",
    bg: "from-accent-50 to-white",
  },
  {
    slug: "iphone-14",
    label: "Apple iPhone 14 (Legacy · OOS)",
    sub: "Successor banner → iPhone 15 Pro",
    bg: "from-red-50 to-white",
  },
  {
    slug: "tablets",
    label: "Centrum Multivitamin",
    sub: "Req #1 + #2 — PPU + savings % + threshold",
    bg: "from-emerald-50 to-white",
  },
  {
    slug: "foundation",
    label: "Maybelline Fit Me Foundation",
    sub: "Req #3 — Hex-code shade swatches",
    bg: "from-orange-50 to-white",
  },
];

export default function Home() {
  return (
    <main className="mx-auto min-h-screen w-full max-w-[480px] flex flex-col gap-4 p-4 bg-gradient-to-b from-white to-[#F3F3F7]">
      <header className="flex flex-col gap-1 pt-3">
        <h1 className="text-2xl font-bold tracking-[-0.4px] text-bluegray-1000">Product Grouping Prototypes</h1>
        <p className="text-sm text-bluegray-700">Each PDP demonstrates a different requirement from the PRD.</p>
      </header>

      <div className="flex flex-col gap-3">
        {PRODUCT_CARDS.map((card) => {
          const p = PRODUCTS[card.slug];
          return (
            <Link
              key={card.slug}
              href={`/p/${card.slug}`}
              className={`flex items-center gap-3 rounded-2xl border border-bluegray-200 bg-gradient-to-br ${card.bg} p-3 hover:shadow-md transition`}
            >
              <div className="h-16 w-16 shrink-0 overflow-hidden rounded-xl bg-white border border-bluegray-100">
                <img src={p.hero} alt="" className="h-full w-full object-cover" />
              </div>
              <div className="flex flex-1 flex-col gap-0.5 min-w-0">
                <span className="text-[13px] font-semibold text-bluegray-700">{p.brand}</span>
                <span className="text-[15px] font-bold tracking-[-0.28px] text-bluegray-1000 truncate">{card.label}</span>
                <span className="text-xs text-bluegray-600">{card.sub}</span>
              </div>
              <span className="text-bluegray-500">›</span>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
