import { products, Product } from "@/data/products";

export function getRecommendedProducts(productIds: string[]): Product[] {
  return productIds
    .map((id) => products.find((p) => p.id === id))
    .filter((p): p is Product => p !== undefined);
}
