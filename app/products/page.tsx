"use client";

import { useState } from "react";
import { products, Product, categoryLabels } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import { Search } from "lucide-react";
import { Input } from "@/components/ui/input";

const concernFilters = [
  { value: "all", label: "すべて" },
  { value: "dryness", label: "乾燥" },
  { value: "pores_oil", label: "毛穴・テカリ" },
  { value: "acne", label: "ニキビ" },
  { value: "spots", label: "シミ・くすみ" },
  { value: "aging", label: "エイジングケア" },
];

export default function ProductsPage() {
  const [query, setQuery] = useState("");
  const [concern, setConcern] = useState("all");
  const [category, setCategory] = useState("all");

  const filtered = products.filter((p) => {
    const matchesQuery =
      query === "" ||
      p.name.toLowerCase().includes(query.toLowerCase()) ||
      p.brand.toLowerCase().includes(query.toLowerCase()) ||
      p.keyIngredients.some((i) => i.toLowerCase().includes(query.toLowerCase()));

    const matchesConcern = concern === "all" || p.concerns.includes(concern);
    const matchesCategory = category === "all" || p.category === category;

    return matchesQuery && matchesConcern && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-white border-b border-rose-100 px-4 py-4 sticky top-0 z-10">
        <div className="max-w-lg mx-auto space-y-3">
          <h1 className="text-xl font-bold text-gray-800">商品一覧</h1>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="商品名・成分で検索"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="pl-9 border-rose-200 focus-visible:ring-rose-400"
            />
          </div>
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-hide">
            {concernFilters.map((f) => (
              <button
                key={f.value}
                onClick={() => setConcern(f.value)}
                className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-colors ${
                  concern === f.value
                    ? "bg-rose-500 text-white"
                    : "bg-white border border-rose-200 text-gray-600 hover:bg-rose-50"
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 py-4">
        <p className="text-sm text-gray-500 mb-4">{filtered.length}件の商品</p>
        <div className="grid grid-cols-2 gap-3">
          {filtered.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        {filtered.length === 0 && (
          <div className="text-center py-16 text-gray-400">
            <p className="text-lg mb-2">🔍</p>
            <p className="text-sm">条件に合う商品が見つかりませんでした</p>
          </div>
        )}
      </div>
    </div>
  );
}
