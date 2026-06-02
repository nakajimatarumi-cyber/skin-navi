"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Heart, Star, ShoppingBag } from "lucide-react";
import { Product, categoryLabels, categoryEmojis } from "@/data/products";
import { toggleFavorite, isFavorite } from "@/lib/favorites";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";

type Props = {
  product: Product;
  reason?: string;
  showReason?: boolean;
};

const categoryBg: Record<string, string> = {
  cleanser: "bg-blue-50",
  toner: "bg-cyan-50",
  serum: "bg-yellow-50",
  moisturizer: "bg-green-50",
  sunscreen: "bg-orange-50",
  mask: "bg-emerald-50",
  eye_cream: "bg-purple-50",
  oil: "bg-pink-50",
};

export default function ProductCard({ product, reason, showReason }: Props) {
  const [favorited, setFavorited] = useState(false);
  const [imgError, setImgError] = useState(false);

  useEffect(() => {
    setFavorited(isFavorite(product.id));
  }, [product.id]);

  const handleFavorite = () => {
    const newState = toggleFavorite(product.id);
    setFavorited(newState);
  };

  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow border-rose-100">
      <div className={`relative aspect-square flex items-center justify-center ${categoryBg[product.category] ?? "bg-rose-50"}`}>
        {!imgError ? (
          <Image
            src={product.imageUrl}
            alt={product.name}
            fill
            className="object-contain p-3"
            onError={() => setImgError(true)}
            unoptimized
          />
        ) : (
          <div className="text-6xl">{categoryEmojis[product.category]}</div>
        )}
        <button
          onClick={handleFavorite}
          className="absolute top-2 right-2 p-2 rounded-full bg-white/80 hover:bg-white transition-colors z-10"
          aria-label={favorited ? "お気に入りから外す" : "お気に入りに追加"}
        >
          <Heart
            className={`h-5 w-5 transition-colors ${
              favorited ? "fill-rose-500 text-rose-500" : "text-gray-400"
            }`}
          />
        </button>
        <Badge className="absolute bottom-2 left-2 bg-white text-rose-600 border-rose-200 text-xs z-10">
          {categoryLabels[product.category]}
        </Badge>
      </div>

      <CardContent className="p-4 space-y-3">
        <div>
          <p className="text-xs text-gray-400 mb-1">{product.brand}</p>
          <h3 className="font-semibold text-gray-800 text-sm leading-tight line-clamp-2">
            {product.name}
          </h3>
        </div>

        <div className="flex items-center gap-1">
          <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
          <span className="text-xs font-medium text-gray-700">{product.rating}</span>
          <span className="text-xs text-gray-400">({product.reviewCount.toLocaleString()}件)</span>
        </div>

        <p className="text-xs text-gray-500 line-clamp-2">{product.description}</p>

        {showReason && reason && (
          <div className="bg-rose-50 rounded-lg p-3">
            <p className="text-xs text-rose-700 leading-relaxed">
              <span className="font-medium">あなたへのおすすめ理由：</span>
              <br />
              {reason}
            </p>
          </div>
        )}

        <div className="flex flex-wrap gap-1">
          {product.keyIngredients.slice(0, 3).map((ing) => (
            <span key={ing} className="text-xs bg-pink-50 text-pink-600 px-2 py-0.5 rounded-full">
              {ing}
            </span>
          ))}
        </div>

        <p className="text-base font-bold text-gray-800">¥{product.price.toLocaleString()}</p>

        <div className="grid grid-cols-3 gap-1.5">
          {product.affiliateLinks.amazon && (
            <a
              href={product.affiliateLinks.amazon}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1 text-xs bg-amber-400 hover:bg-amber-500 text-gray-900 font-medium py-2 px-1 rounded-lg transition-colors"
            >
              <ShoppingBag className="h-3 w-3" />
              Amazon
            </a>
          )}
          {product.affiliateLinks.rakuten && (
            <a
              href={product.affiliateLinks.rakuten}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1 text-xs bg-rose-500 hover:bg-rose-600 text-white font-medium py-2 px-1 rounded-lg transition-colors"
            >
              <ShoppingBag className="h-3 w-3" />
              楽天
            </a>
          )}
          {product.affiliateLinks.qoo10 && (
            <a
              href={product.affiliateLinks.qoo10}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-1 text-xs bg-orange-500 hover:bg-orange-600 text-white font-medium py-2 px-1 rounded-lg transition-colors"
            >
              <ShoppingBag className="h-3 w-3" />
              Qoo10
            </a>
          )}
        </div>
      </CardContent>
    </Card>
  );
}
