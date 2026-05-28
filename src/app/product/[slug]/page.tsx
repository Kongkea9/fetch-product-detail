import { ProductCardComponent } from "@/components/product/product-card";
import { ProductResponse } from "@/lib/product";
import { notFound } from "next/navigation";

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
  const { slug } = await params;
  const response = await fetch(`${BASE_URL}/api/v1/products/slug/${slug}`);

  if (!response.ok) {
    notFound();
  }

  const product: ProductResponse = await response.json();

  console.log("data : ", product);

  return (
    <div className="grid grid-cols-1 gap-5 p-10">
      <ProductCardComponent key={product.id} product={product} />
    </div>
  );
}
