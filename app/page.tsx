import Link from "next/link";
import { Button } from "@/components/ui/button";
import { products } from "@/data/products";
import { Sparkles, ArrowRight, Star, Calendar } from "lucide-react";

const featuredProducts = products.slice(0, 4);

export default function HomePage() {
  return (
    <div className="min-h-screen bg-white pb-24">
      {/* Hero */}
      <section className="relative bg-gradient-to-br from-rose-400 via-pink-400 to-rose-300 text-white overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.15)_0%,_transparent_60%)]" />
        <div className="relative max-w-lg mx-auto px-4 py-12 text-center space-y-5">
          <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-1.5 text-sm font-medium">
            <Sparkles className="h-4 w-4" />
            AI肌診断 無料
          </div>
          <h1 className="text-3xl font-bold leading-tight">
            あなたの肌に
            <br />
            ぴったりのケアを
            <br />
            見つけよう
          </h1>
          <p className="text-white/85 text-sm">
            10問の質問に答えるだけで、あなたの肌悩みに合った
            スキンケアをAIがご提案します。
          </p>
          <Link href="/diagnosis">
            <Button
              size="lg"
              className="bg-white text-rose-600 hover:bg-rose-50 rounded-full px-8 font-semibold shadow-lg"
            >
              無料で診断する
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
          <p className="text-white/70 text-xs">所要時間：約2分 / 登録不要</p>
        </div>
      </section>

      {/* Features */}
      <section className="max-w-lg mx-auto px-4 py-8 space-y-3">
        <h2 className="text-lg font-bold text-gray-800">SkinNaviでできること</h2>
        <div className="grid grid-cols-2 gap-3">
          {[
            {
              icon: "✨",
              title: "AI肌診断",
              desc: "肌タイプ・悩みに合ったスキンケアをAIが提案",
              href: "/diagnosis",
              bg: "bg-rose-50",
            },
            {
              icon: "🛍️",
              title: "商品一覧",
              desc: "厳選スキンケア商品をQoo10・楽天・Amazonで購入",
              href: "/products",
              bg: "bg-pink-50",
            },
            {
              icon: "💗",
              title: "お気に入り",
              desc: "気になる商品を保存してあとで比較・購入",
              href: "/favorites",
              bg: "bg-fuchsia-50",
            },
            {
              icon: "💆",
              title: "ピーリング予約",
              desc: "大阪エステサロンでプロのケアを体験",
              href: "/booking",
              bg: "bg-purple-50",
            },
          ].map((item) => (
            <Link key={item.href} href={item.href}>
              <div className={`${item.bg} rounded-2xl p-4 space-y-2 h-full hover:scale-[1.02] transition-transform active:scale-95`}>
                <div className="text-2xl">{item.icon}</div>
                <p className="font-semibold text-gray-800 text-sm">{item.title}</p>
                <p className="text-xs text-gray-500 leading-relaxed">{item.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Featured Products */}
      <section className="px-4 py-4 space-y-4">
        <div className="max-w-lg mx-auto flex items-center justify-between">
          <h2 className="text-lg font-bold text-gray-800">人気の商品</h2>
          <Link href="/products" className="text-sm text-rose-500 hover:text-rose-600 font-medium flex items-center gap-1">
            もっと見る <ArrowRight className="h-3 w-3" />
          </Link>
        </div>
        <div className="max-w-lg mx-auto grid grid-cols-2 gap-3">
          {featuredProducts.map((product) => (
            <div
              key={product.id}
              className="bg-white rounded-2xl border border-rose-100 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="bg-rose-50 aspect-square flex items-center justify-center">
                <span className="text-5xl">🧴</span>
              </div>
              <div className="p-3 space-y-1.5">
                <p className="text-xs text-gray-400">{product.brand}</p>
                <p className="text-sm font-medium text-gray-800 line-clamp-2 leading-tight">
                  {product.name}
                </p>
                <div className="flex items-center gap-1">
                  <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
                  <span className="text-xs text-gray-500">{product.rating} ({product.reviewCount})</span>
                </div>
                <p className="text-sm font-bold text-gray-700">¥{product.price.toLocaleString()}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Peeling CTA Banner */}
      <section className="max-w-lg mx-auto px-4 py-4">
        <Link href="/booking">
          <div className="bg-gradient-to-r from-rose-400 to-pink-500 rounded-2xl p-5 text-white flex items-center justify-between hover:from-rose-500 hover:to-pink-600 transition-colors">
            <div className="space-y-1">
              <p className="text-xs font-medium text-white/80">大阪エステサロン</p>
              <p className="font-bold">プロのピーリング体験</p>
              <p className="text-xs text-white/80">無料カウンセリング受付中</p>
            </div>
            <div className="flex items-center gap-2">
              <Calendar className="h-8 w-8 text-white/80" />
              <ArrowRight className="h-4 w-4" />
            </div>
          </div>
        </Link>
      </section>

      {/* Affiliate disclosure */}
      <div className="max-w-lg mx-auto px-4 py-2">
        <p className="text-xs text-gray-400 text-center">
          ※ 本サイトはアフィリエイト広告（Amazon・楽天・Qoo10）を利用しています
        </p>
      </div>
    </div>
  );
}
