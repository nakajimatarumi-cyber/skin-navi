"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { getFavoriteIds } from "@/lib/favorites";
import { products } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import { Heart, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function FavoritesPage() {
  const [favoriteProducts, setFavoriteProducts] = useState(
    products.filter((p) => getFavoriteIds().includes(p.id))
  );

  useEffect(() => {
    const ids = getFavoriteIds();
    setFavoriteProducts(products.filter((p) => ids.includes(p.id)));

    const handleStorage = () => {
      const updated = getFavoriteIds();
      setFavoriteProducts(products.filter((p) => updated.includes(p.id)));
    };
    window.addEventListener("storage", handleStorage);
    return () => window.removeEventListener("storage", handleStorage);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pb-24">
      <div className="bg-white border-b border-rose-100 px-4 py-4">
        <div className="max-w-lg mx-auto">
          <h1 className="text-xl font-bold text-gray-800 flex items-center gap-2">
            <Heart className="h-5 w-5 text-rose-500 fill-rose-500" />
            お気に入り
          </h1>
          <p className="text-sm text-gray-500 mt-1">{favoriteProducts.length}件保存中</p>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 py-4">
        {favoriteProducts.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-20 text-center space-y-5">
            <div className="w-16 h-16 bg-rose-100 rounded-full flex items-center justify-center">
              <Heart className="h-8 w-8 text-rose-300" />
            </div>
            <div>
              <p className="font-semibold text-gray-700">まだお気に入りがありません</p>
              <p className="text-sm text-gray-400 mt-1">
                気になる商品のハートをタップして保存しましょう
              </p>
            </div>
            <div className="flex flex-col gap-2 w-full max-w-xs">
              <Link href="/diagnosis">
                <Button className="w-full bg-rose-500 hover:bg-rose-600 text-white rounded-full">
                  <Sparkles className="h-4 w-4 mr-2" />
                  肌診断でおすすめを見つける
                </Button>
              </Link>
              <Link href="/products">
                <Button variant="outline" className="w-full border-rose-200 text-rose-600 hover:bg-rose-50 rounded-full">
                  商品一覧を見る
                </Button>
              </Link>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-2 gap-3">
            {favoriteProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
