export type AffiliateLinks = {
  amazon?: string;
  rakuten?: string;
  qoo10?: string;
};

export type Product = {
  id: string;
  name: string;
  brand: string;
  category: "cleanser" | "toner" | "serum" | "moisturizer" | "sunscreen" | "mask" | "eye_cream" | "oil";
  price: number;
  image: string;
  description: string;
  keyIngredients: string[];
  suitableFor: string[];
  concerns: string[];
  rating: number;
  reviewCount: number;
  affiliateLinks: AffiliateLinks;
  isRecommended?: boolean;
};

export const products: Product[] = [
  {
    id: "p001",
    name: "センシティブ モイスチャー クレンジング",
    brand: "スキンナビ セレクト",
    category: "cleanser",
    price: 2980,
    image: "/images/products/cleanser-sensitive.jpg",
    description: "敏感肌でも使えるやさしいミルク洗顔。必要な潤いを守りながら汚れを落とします。",
    keyIngredients: ["セラミド", "ヒアルロン酸", "スクワラン"],
    suitableFor: ["sensitive", "dry", "normal"],
    concerns: ["dryness", "sensitivity"],
    rating: 4.6,
    reviewCount: 312,
    affiliateLinks: {
      amazon: "https://www.amazon.co.jp/s?k=センシティブ+洗顔+セラミド",
      rakuten: "https://search.rakuten.co.jp/search/mall/センシティブ+洗顔+セラミド/",
      qoo10: "https://www.qoo10.jp/search/?keyword=センシティブ+洗顔",
    },
  },
  {
    id: "p002",
    name: "ポア クリア バランシング ウォッシュ",
    brand: "スキンナビ セレクト",
    category: "cleanser",
    price: 2480,
    image: "/images/products/cleanser-pore.jpg",
    description: "毛穴の黒ずみ・テカリを防ぐ、BHA配合の泡立ち洗顔フォーム。",
    keyIngredients: ["サリチル酸", "ティーツリー", "ナイアシンアミド"],
    suitableFor: ["oily", "combination"],
    concerns: ["pores_oil", "acne"],
    rating: 4.4,
    reviewCount: 198,
    affiliateLinks: {
      amazon: "https://www.amazon.co.jp/s?k=毛穴+洗顔+サリチル酸",
      rakuten: "https://search.rakuten.co.jp/search/mall/毛穴+洗顔+BHA/",
      qoo10: "https://www.qoo10.jp/search/?keyword=毛穴+洗顔",
    },
  },
  {
    id: "p003",
    name: "ヒアルロン ディープ モイスト ローション",
    brand: "スキンナビ セレクト",
    category: "toner",
    price: 3480,
    image: "/images/products/toner-hyaluron.jpg",
    description: "3種のヒアルロン酸が肌の奥まで浸透。乾燥が気になる方の毎日の化粧水。",
    keyIngredients: ["ヒアルロン酸Na", "加水分解ヒアルロン酸", "アセチルヒアルロン酸Na"],
    suitableFor: ["dry", "normal", "sensitive"],
    concerns: ["dryness"],
    rating: 4.7,
    reviewCount: 524,
    affiliateLinks: {
      amazon: "https://www.amazon.co.jp/s?k=ヒアルロン酸+化粧水+保湿",
      rakuten: "https://search.rakuten.co.jp/search/mall/ヒアルロン酸+化粧水/",
      qoo10: "https://www.qoo10.jp/search/?keyword=ヒアルロン酸+化粧水",
    },
  },
  {
    id: "p004",
    name: "ブライトニング ビタC エッセンス",
    brand: "スキンナビ セレクト",
    category: "serum",
    price: 5980,
    image: "/images/products/serum-vitac.jpg",
    description: "安定型ビタミンC誘導体配合の美容液。シミ・くすみにアプローチし明るい肌へ。",
    keyIngredients: ["アスコルビルグルコシド", "ナイアシンアミド", "レチノール"],
    suitableFor: ["normal", "combination", "dry"],
    concerns: ["spots", "aging"],
    rating: 4.5,
    reviewCount: 287,
    affiliateLinks: {
      amazon: "https://www.amazon.co.jp/s?k=ビタミンC+美容液+シミ",
      rakuten: "https://search.rakuten.co.jp/search/mall/ビタミンC+美容液+ブライトニング/",
      qoo10: "https://www.qoo10.jp/search/?keyword=ビタミンC+美容液",
    },
  },
  {
    id: "p005",
    name: "レチノール アンチエイジング クリーム",
    brand: "スキンナビ セレクト",
    category: "moisturizer",
    price: 6980,
    image: "/images/products/cream-retinol.jpg",
    description: "低刺激レチノール配合のナイトクリーム。ハリ・弾力を取り戻すエイジングケア。",
    keyIngredients: ["純粋レチノール", "ペプチド", "スクワラン"],
    suitableFor: ["dry", "normal", "combination"],
    concerns: ["aging"],
    rating: 4.3,
    reviewCount: 156,
    affiliateLinks: {
      amazon: "https://www.amazon.co.jp/s?k=レチノール+クリーム+エイジングケア",
      rakuten: "https://search.rakuten.co.jp/search/mall/レチノール+クリーム/",
      qoo10: "https://www.qoo10.jp/search/?keyword=レチノール+クリーム",
    },
  },
  {
    id: "p006",
    name: "セラミド バリア リペア クリーム",
    brand: "スキンナビ セレクト",
    category: "moisturizer",
    price: 4480,
    image: "/images/products/cream-ceramide.jpg",
    description: "3種のセラミドで肌バリアを修復・強化。敏感肌・乾燥肌の保湿クリームの定番。",
    keyIngredients: ["セラミドNP", "セラミドAP", "セラミドEOP"],
    suitableFor: ["sensitive", "dry", "normal"],
    concerns: ["dryness", "sensitivity"],
    rating: 4.8,
    reviewCount: 731,
    affiliateLinks: {
      amazon: "https://www.amazon.co.jp/s?k=セラミド+保湿クリーム+乾燥肌",
      rakuten: "https://search.rakuten.co.jp/search/mall/セラミド+保湿クリーム/",
      qoo10: "https://www.qoo10.jp/search/?keyword=セラミド+クリーム",
    },
  },
  {
    id: "p007",
    name: "ノンコメドジェニック モイスチャーゲル",
    brand: "スキンナビ セレクト",
    category: "moisturizer",
    price: 3280,
    image: "/images/products/gel-noncomedo.jpg",
    description: "ニキビができにくいノンコメドジェニックテスト済みのさっぱりゲル保湿。",
    keyIngredients: ["ナイアシンアミド", "アゼライン酸", "グリセリン"],
    suitableFor: ["oily", "combination", "acne-prone"],
    concerns: ["acne", "pores_oil"],
    rating: 4.4,
    reviewCount: 342,
    affiliateLinks: {
      amazon: "https://www.amazon.co.jp/s?k=ノンコメドジェニック+保湿+ニキビ",
      rakuten: "https://search.rakuten.co.jp/search/mall/ノンコメドジェニック+ゲル/",
      qoo10: "https://www.qoo10.jp/search/?keyword=ノンコメドジェニック+保湿",
    },
  },
  {
    id: "p008",
    name: "SPF50+ ミルクサンスクリーン",
    brand: "スキンナビ セレクト",
    category: "sunscreen",
    price: 3680,
    image: "/images/products/sunscreen-milk.jpg",
    description: "SPF50+ PA++++の日焼け止めミルク。白浮きなしで敏感肌も使いやすい。",
    keyIngredients: ["酸化亜鉛", "二酸化チタン", "ヒアルロン酸"],
    suitableFor: ["sensitive", "dry", "normal", "oily"],
    concerns: ["spots", "aging"],
    rating: 4.6,
    reviewCount: 489,
    affiliateLinks: {
      amazon: "https://www.amazon.co.jp/s?k=日焼け止め+SPF50+白浮きなし",
      rakuten: "https://search.rakuten.co.jp/search/mall/日焼け止め+SPF50+敏感肌/",
      qoo10: "https://www.qoo10.jp/search/?keyword=日焼け止め+SPF50",
    },
  },
  {
    id: "p009",
    name: "AHA ピーリング パッド",
    brand: "スキンナビ セレクト",
    category: "mask",
    price: 4980,
    image: "/images/products/pad-aha.jpg",
    description: "グリコール酸配合のピーリングコットンパッド。週1〜2回のケアで透明感アップ。",
    keyIngredients: ["グリコール酸", "乳酸", "ナイアシンアミド"],
    suitableFor: ["normal", "oily", "combination"],
    concerns: ["pores_oil", "spots", "acne"],
    rating: 4.5,
    reviewCount: 223,
    affiliateLinks: {
      amazon: "https://www.amazon.co.jp/s?k=AHA+ピーリング+パッド",
      rakuten: "https://search.rakuten.co.jp/search/mall/AHA+ピーリング+コットン/",
      qoo10: "https://www.qoo10.jp/search/?keyword=AHA+ピーリング",
    },
  },
  {
    id: "p010",
    name: "コラーゲン ブースト アイクリーム",
    brand: "スキンナビ セレクト",
    category: "eye_cream",
    price: 5480,
    image: "/images/products/eyecream-collagen.jpg",
    description: "目元の乾燥・小じわに特化したリッチアイクリーム。コラーゲン産生をサポート。",
    keyIngredients: ["加水分解コラーゲン", "ペプチド", "カフェイン"],
    suitableFor: ["dry", "normal", "combination"],
    concerns: ["aging", "dryness"],
    rating: 4.2,
    reviewCount: 178,
    affiliateLinks: {
      amazon: "https://www.amazon.co.jp/s?k=アイクリーム+コラーゲン+小じわ",
      rakuten: "https://search.rakuten.co.jp/search/mall/アイクリーム+エイジングケア/",
      qoo10: "https://www.qoo10.jp/search/?keyword=アイクリーム+コラーゲン",
    },
  },
  {
    id: "p011",
    name: "ナイアシンアミド 10% セラム",
    brand: "スキンナビ セレクト",
    category: "serum",
    price: 3980,
    image: "/images/products/serum-niacinamide.jpg",
    description: "高濃度ナイアシンアミド10%配合。毛穴・ニキビ跡・くすみに幅広くアプローチ。",
    keyIngredients: ["ナイアシンアミド10%", "亜鉛", "ヒアルロン酸"],
    suitableFor: ["oily", "combination", "normal"],
    concerns: ["pores_oil", "spots", "acne"],
    rating: 4.7,
    reviewCount: 612,
    affiliateLinks: {
      amazon: "https://www.amazon.co.jp/s?k=ナイアシンアミド+美容液+10%",
      rakuten: "https://search.rakuten.co.jp/search/mall/ナイアシンアミド+セラム/",
      qoo10: "https://www.qoo10.jp/search/?keyword=ナイアシンアミド+美容液",
    },
  },
  {
    id: "p012",
    name: "プロバイオティクス カーミング マスク",
    brand: "スキンナビ セレクト",
    category: "mask",
    price: 2980,
    image: "/images/products/mask-probiotic.jpg",
    description: "プロバイオティクス配合の鎮静マスク。赤みや敏感になった肌をやさしくケア。",
    keyIngredients: ["乳酸菌エキス", "パンテノール", "アラントイン"],
    suitableFor: ["sensitive", "dry", "normal"],
    concerns: ["sensitivity", "dryness", "acne"],
    rating: 4.5,
    reviewCount: 267,
    affiliateLinks: {
      amazon: "https://www.amazon.co.jp/s?k=プロバイオティクス+シートマスク+敏感肌",
      rakuten: "https://search.rakuten.co.jp/search/mall/プロバイオティクス+マスク/",
      qoo10: "https://www.qoo10.jp/search/?keyword=プロバイオティクス+マスク",
    },
  },
];

export const categoryLabels: Record<Product["category"], string> = {
  cleanser: "洗顔・クレンジング",
  toner: "化粧水・ローション",
  serum: "美容液・セラム",
  moisturizer: "保湿クリーム・ジェル",
  sunscreen: "日焼け止め",
  mask: "マスク・パック",
  eye_cream: "アイクリーム",
  oil: "オイル",
};
