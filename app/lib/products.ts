// Product data + types for the PDP prototype.
// Each product demonstrates a different requirement from the PRD:
//  - charger: baseline (Req #1 lite via "Charger Model" tile)
//  - iphone:  Req #1 — Variant Pricing (storage tiles show SP per SKU)
//  - foundation: Req #3 — Shade swatches with hex codes
//  - centrum: Req #1 + #2 — Variant Pricing + PPU savings with threshold logic

export type StorageVariant = {
  label: string;       // "128GB"
  sp: number;          // selling price
  mrp: number;         // listed price
};

export type ShadeVariant = {
  code: string;        // "220"
  name: string;        // "Natural Beige"
  hex: string;         // "#DDB48E"
  sp: number;
  mrp: number;
  outOfStock?: boolean;
};

export type WeightVariant = {
  label: string;       // "30 Tablets"
  count: number;       // 30
  sp: number;
  mrp: number;
};

export type ColourChargerVariant = {
  name: string;
  img: string;
  state: "default" | "selected" | "out-of-stock";
};

export type VariantPickerConfig =
  | { kind: "storage"; title: string; variants: StorageVariant[]; defaultIndex: number }
  | { kind: "shade"; title: string; variants: ShadeVariant[]; defaultIndex: number }
  | { kind: "weight"; title: string; unit: string; variants: WeightVariant[]; defaultIndex: number }
  | {
      kind: "charger";
      versionTitle: string;
      versionOptions: string[];
      chargerModelTitle: string;
      chargerOptions: string[];
      colourTitle: string;
      colourVariants: ColourChargerVariant[];
    };

export type Product = {
  slug: string;
  brand: string;
  name: string;
  hero: string;
  rating: number;
  reviewCount: number;
  prepaidOnly?: boolean;
  price: number;
  mrp: number;
  currency: string;       // "AED" / "Ð"
  ppu?: { quantity: string; perUnit: string };
  comboSaving?: number;
  bestsellerRank?: number;
  bestsellerCategory?: string;
  variantPicker: VariantPickerConfig;
  overview: string;
  highlights: string[];
  // Legacy → successor mapping (PRD: "Legacy-to-New Model Entry Point")
  successorSlug?: string;
  oos?: boolean;
};

// ───────────────────────────────────────────────────────────────────────────
// Helpers for Req #2 (PPU + savings + threshold)
// ───────────────────────────────────────────────────────────────────────────
export function ppu(sp: number, count: number): number {
  return sp / count;
}

export function savingsPct(largerPpu: number, smallestPpu: number): number {
  return (1 - largerPpu / smallestPpu) * 100;
}

export function threshold(sp: number): number {
  return Math.round(Math.sqrt(sp));
}

export function shouldShowSavings(sp: number, largerPpu: number, smallestPpu: number): boolean {
  if (largerPpu >= smallestPpu) return false; // edge case from PRD
  return savingsPct(largerPpu, smallestPpu) >= threshold(sp);
}

// ───────────────────────────────────────────────────────────────────────────
// Products
// ───────────────────────────────────────────────────────────────────────────

export const PRODUCTS: Record<string, Product> = {
  // ─── CHARGER (baseline / current PDP) ────────────────────────────────────
  charger: {
    slug: "charger",
    brand: "Anker",
    name: "Anker 735 GaN II 65W USB C Charger - 3-Port Compact Wall Charger for MacBook Pro/Air, iPad Pro & iPhone",
    hero: "/variants/variant-735-gan-ii.png",
    rating: 4.6,
    reviewCount: 1541,
    prepaidOnly: true,
    price: 110,
    mrp: 149,
    currency: "Ð",
    ppu: { quantity: "65W", perUnit: "Ð1.69/W" },
    comboSaving: 45,
    bestsellerRank: 27,
    bestsellerCategory: "Chargers",
    variantPicker: {
      kind: "charger",
      versionTitle: "Versions",
      versionOptions: ["UK 3 PIN", "US 2 PIN"],
      chargerModelTitle: "Charger Model",
      chargerOptions: ["UK 3 PIN", "US 2 PIN"],
      colourTitle: "Colour",
      colourVariants: [
        { name: "735 GaN", img: "/variants/variant-735-gan.png", state: "default" },
        { name: "735 GaN II", img: "/variants/variant-735-gan-ii.png", state: "selected" },
        { name: "736 GaN II", img: "/variants/variant-736-gan-ii.png", state: "default" },
        { name: "736 GaN", img: "/variants/variant-736-gan.png", state: "out-of-stock" },
      ],
    },
    overview:
      "A compact, high-performance wall charger built with GaN (Gallium Nitride) technology for faster, cooler, and more efficient charging. With 65W output, it can power laptops, tablets, and smartphones at top speed.",
    highlights: [
      "Power 3 devices at once with 2 USB-C ports and one USB-A port",
      "Connect a single device to charge at up to 65W.",
      "Charge Up to 30 Minutes Faster: Our exclusive PowerIQ 4.0 technology",
      "Greener with GaN: The amount of power saved could be up to 796.39 million kWh per year",
      "ActiveShield 2.0: Anker's proprietary technology enhances protection by intelligently monitoring temperature",
    ],
  },

  // ─── IPHONE 14 (LEGACY, OOS) → successor: iPhone 15 Pro ─────────────────
  // Demonstrates Legacy-to-New Model Entry Point PRD.
  "iphone-14": {
    slug: "iphone-14",
    brand: "Apple",
    name: "Apple iPhone 14 5G Smartphone with FaceTime - Blue - International Version",
    hero: "/products/iphone-14/hero.jpg",
    rating: 4.6,
    reviewCount: 5821,
    prepaidOnly: false,
    price: 2549,
    mrp: 2999,
    currency: "AED",
    bestsellerRank: 14,
    bestsellerCategory: "Smartphones",
    successorSlug: "iphone",
    oos: true,
    variantPicker: {
      kind: "storage",
      title: "Storage",
      defaultIndex: 0,
      variants: [
        { label: "128GB", sp: 2549, mrp: 2999 },
        { label: "256GB", sp: 2849, mrp: 3299 },
        { label: "512GB", sp: 3499, mrp: 3899 },
      ],
    },
    overview:
      "iPhone 14 features an advanced dual-camera system, all-day battery life, and the safety capabilities of Crash Detection and Emergency SOS via satellite. Powered by the A15 Bionic chip with 5-core GPU.",
    highlights: [
      "6.1-inch Super Retina XDR display with True Tone",
      "A15 Bionic chip with 5-core GPU for fast performance",
      "Advanced dual-camera system with 12MP Main and Ultra Wide",
      "Action mode for smooth, steady, handheld videos",
      "Crash Detection and Emergency SOS via satellite",
    ],
  },

  // ─── IPHONE 15 PRO (Req #1: Variant Pricing on storage tiles) ────────────
  iphone: {
    slug: "iphone",
    brand: "Apple",
    name: "Apple iPhone 15 Pro 5G Smartphone with FaceTime - Natural Titanium - International Version",
    hero: "/products/iphone/hero.jpg",
    rating: 4.7,
    reviewCount: 3284,
    prepaidOnly: false,
    price: 3949,
    mrp: 4399,
    currency: "AED",
    bestsellerRank: 2,
    bestsellerCategory: "Smartphones",
    variantPicker: {
      kind: "storage",
      title: "Storage",
      defaultIndex: 0,
      variants: [
        { label: "128GB", sp: 3949, mrp: 4399 },
        { label: "256GB", sp: 4299, mrp: 4799 },
        { label: "512GB", sp: 5549, mrp: 5999 },
        { label: "1TB",   sp: 6399, mrp: 6899 },
      ],
    },
    overview:
      "iPhone 15 Pro is forged in titanium and features the powerful A17 Pro chip, a customizable Action button, and the most powerful iPhone camera system ever, including a 48MP Main camera and 5x Telephoto on iPhone 15 Pro Max.",
    highlights: [
      "Forged in titanium with the new contoured edge design",
      "A17 Pro chip — the most powerful chip ever in a smartphone",
      "Customizable Action button replaces the Ring/Silent switch",
      "48MP Main camera with 2x and 3x optical-quality zoom",
      "USB-C with USB 3 for up to 20× faster transfer speeds",
    ],
  },

  // ─── FOUNDATION (Req #3: Shade swatches with hex) ────────────────────────
  foundation: {
    slug: "foundation",
    brand: "Maybelline New York",
    name: "Maybelline Fit Me Matte + Poreless Liquid Foundation - 30ml",
    hero: "/products/foundation/hero.jpg",
    rating: 4.5,
    reviewCount: 6912,
    price: 49,
    mrp: 65,
    currency: "AED",
    ppu: { quantity: "30ml", perUnit: "AED 1.63/ml" },
    bestsellerRank: 1,
    bestsellerCategory: "Foundation",
    variantPicker: {
      kind: "shade",
      title: "Shade",
      defaultIndex: 3, // 220 Natural Beige
      variants: [
        { code: "110", name: "Porcelain",      hex: "#F5DCC4", sp: 49, mrp: 65 },
        { code: "115", name: "Ivory",          hex: "#EFCFAF", sp: 49, mrp: 65 },
        { code: "128", name: "Warm Nude",      hex: "#E8C8A4", sp: 49, mrp: 65 },
        { code: "220", name: "Natural Beige",  hex: "#DDB48E", sp: 49, mrp: 65 },
        { code: "228", name: "Soft Tan",       hex: "#CFA07A", sp: 49, mrp: 65 },
        { code: "230", name: "Natural Buff",   hex: "#C49A75", sp: 49, mrp: 65 },
        { code: "310", name: "Sun Beige",      hex: "#A87749", sp: 49, mrp: 65 },
        { code: "330", name: "Toffee",         hex: "#8E6037", sp: 49, mrp: 65, outOfStock: true },
      ],
    },
    overview:
      "Maybelline Fit Me Matte + Poreless Foundation is a natural matte foundation that mattifies and refines pores. With micro-powders that control shine and blur pores, it gives a flawless finish that fits skin's tone and texture.",
    highlights: [
      "Mattifying foundation that controls shine for up to 12 hours",
      "Refines pores for a smooth, even-looking finish",
      "Lightweight, breathable formula won't clog pores",
      "Available in 40 shades to match every skin tone",
      "Dermatologist-tested. Allergy-tested. Non-comedogenic.",
    ],
  },

  // ─── CENTRUM (Req #1 + #2: Pack-size SP + PPU + savings %) ───────────────
  tablets: {
    slug: "tablets",
    brand: "Centrum",
    name: "Centrum Adult Multivitamin & Multimineral Supplement Tablets - Complete from A to Zinc",
    hero: "/products/centrum/hero.jpg",
    rating: 4.6,
    reviewCount: 2189,
    price: 46,
    mrp: 59,
    currency: "AED",
    ppu: { quantity: "30 Tablets", perUnit: "AED 1.53/tab" },
    bestsellerRank: 3,
    bestsellerCategory: "Multivitamins",
    variantPicker: {
      kind: "weight",
      title: "Pack Size",
      unit: "tablets",
      defaultIndex: 0,
      variants: [
        { label: "30 Tablets",  count: 30,  sp: 46,  mrp: 59 },
        { label: "60 Tablets",  count: 60,  sp: 79,  mrp: 109 },
        { label: "100 Tablets", count: 100, sp: 119, mrp: 169 },
      ],
    },
    overview:
      "Centrum Adult Multivitamin/Multimineral Supplement is a complete A to Zinc formula that helps support energy, immunity, and metabolism. With 24 essential nutrients including Vitamin D, B-complex, and antioxidants for everyday wellness.",
    highlights: [
      "Complete A to Zinc formula with 24 essential nutrients",
      "Supports energy, immunity, and overall wellness",
      "Verified non-GMO and gluten-free ingredients",
      "Recommended by doctors and pharmacists worldwide",
      "Easy-to-swallow coated tablets for daily use",
    ],
  },
};
