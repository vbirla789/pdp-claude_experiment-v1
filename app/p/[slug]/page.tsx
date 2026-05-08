import { notFound } from "next/navigation";
import PdpDesign from "@/app/components/pdp-design";
import { PRODUCTS } from "@/app/lib/products";

export function generateStaticParams() {
  return Object.keys(PRODUCTS).map((slug) => ({ slug }));
}

export default async function ProductPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const product = PRODUCTS[slug];
  if (!product) notFound();
  return <PdpDesign product={product} />;
}
