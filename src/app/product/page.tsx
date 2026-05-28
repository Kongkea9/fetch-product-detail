"use client";
import { ProductCardComponent } from "@/components/product/product-card";
import { ProductResponse } from "@/lib/product";
import Link from "next/link";
import { useEffect, useState } from "react";

type productData = ProductResponse[];
// base url
const BASE_URL = process.env.NEXT_PUBLIC_API_URL;
export default function ProductPage() {
  const [products, setProduct] = useState<productData>();
  // useEffect
  useEffect(() => {
    async function getData() {
      const response = await fetch(`${BASE_URL}/api/v1/products`);
      const data = await response.json();
      setProduct(data);
    }
    getData();
  }, []);
  console.log("data : ", products);

  return (
    <div className="grid grid-cols-4 gap-5 p-10">
      {products?.map((product) => (
        <Link href={`/product/${product?.slug}`}>
          <ProductCardComponent key={product.id} product={product} />
        </Link>
      ))}
    </div>
  );
}
