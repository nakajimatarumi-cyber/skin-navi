"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import { RecommendationResult } from "@/lib/types";
import { getRecommendedProducts } from "@/lib/products-utils";
import { DiagnosisAnswers } from "@/data/quiz";
import { Product } from "@/data/products";
import ProductCard from "@/components/products/ProductCard";
import { Button } from "@/components/ui/button";
import { Sparkles, RefreshCw, Calendar, ChevronDown, ChevronUp } from "lucide-react";

type StoredData = {
  answers: DiagnosisAnswers;
  result: RecommendationResult;
};

export default function ResultPage() {
  const params = useParams();
  const router = useRouter();
  const [data, setData] = useState<StoredData | null>(null);
  const [products, setProducts] = useState<Product[]>([]);
  const [showTips, setShowTips] = useState(false);

  useEffect(() => {
    const stored = sessionStorage.getItem(`diagnosis_${params.id}`);
    if (!stored) {
      router.push("/diagnosis");
      return;
    }
    const parsed: StoredData = JSON.parse(stored);
    setData(parsed);
    const recommended = getRecommendedProducts(parsed.result.recommendedProductIds);
    setProducts(recommended);
  }, [params.id, router]);

  if (!data) return null;

  const { result } = data;

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white pb-24">
      {/* Hero */}
      <div className="bg-gradient-to-br from-rose-400 to-pink-500 text-white px-4 pt-8 pb-12">
        <div className="max-w-lg mx-auto text-center space-y-3">
          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto">
            <Sparkles className="h-8 w-8" />
          </div>
          <h1 className="text-2xl font-bold">診断結果</h1>
          <p className="text-white/90 text-sm">AIがあなたの肌を分析しました</p>
        </div>
      </div>

      <div className="max-w-lg mx-auto px-4 -mt-6 space-y-6">
        {/* Skin Profile */}
        <div className="bg-white rounded-2xl p-5 shadow-sm border border-rose-100">
          <h2 className="font-bold text-gray-800 mb-3 flex items-center gap-2">
            <span className="text-rose-500">✨</span>
            あなたの肌プロフィール
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">{result.skinProfile}</p>
        </div>

        {/* Routine Tips */}
        <div className="bg-white rounded-2xl shadow-sm border border-rose-100 overflow-hidden">
          <button
            className="w-full flex items-center justify-between p-5"
            onClick={() => setShowTips(!showTips)}
          >
            <h2 className="font-bold text-gray-800 flex items-center gap-2">
              <span className="text-rose-500">💡</span>
              あなたの肌に合ったケアのコツ
            </h2>
            {showTips ? (
              <ChevronUp className="h-4 w-4 text-gray-400" />
            ) : (
              <ChevronDown className="h-4 w-4 text-gray-400" />
            )}
          </button>
          {showTips && (
            <div className="px-5 pb-5 space-y-2">
              {result.routineTips.map((tip, i) => (
                <div key={i} className="flex items-start gap-3">
                  <span className="text-rose-400 text-sm mt-0.5 font-bold">{i + 1}.</span>
                  <p className="text-sm text-gray-600 leading-relaxed">{tip}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Recommended Products */}
        <div>
          <h2 className="font-bold text-gray-800 mb-4 flex items-center gap-2">
            <span className="text-rose-500">🛍️</span>
            あなたへのおすすめ商品
          </h2>
          <div className="grid grid-cols-2 gap-3">
            {products.map((product) => (
              <ProductCard
                key={product.id}
                product={product}
                reason={result.reasons[product.id]}
                showReason
              />
            ))}
          </div>
        </div>

        {/* Peeling CTA */}
        <div className="bg-gradient-to-br from-rose-400 to-pink-500 rounded-2xl p-5 text-white">
          <h2 className="font-bold mb-2 flex items-center gap-2">
            <Calendar className="h-5 w-5" />
            プロによるピーリング施術
          </h2>
          <p className="text-sm text-white/90 leading-relaxed mb-4">
            {result.peelingAdvice}
          </p>
          <Link href="/booking">
            <Button className="w-full bg-white text-rose-600 hover:bg-rose-50 font-semibold rounded-full">
              無料カウンセリングを予約する
            </Button>
          </Link>
        </div>

        {/* Retry */}
        <div className="text-center pb-4">
          <Link href="/diagnosis">
            <Button variant="outline" className="border-rose-200 text-rose-600 hover:bg-rose-50 rounded-full">
              <RefreshCw className="h-4 w-4 mr-2" />
              もう一度診断する
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
