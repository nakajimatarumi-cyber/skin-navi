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
  emoji: string;
  description: string;
  keyIngredients: string[];
  suitableFor: string[];
  concerns: string[];
  rating: number;
  reviewCount: number;
  affiliateLinks: AffiliateLinks;
};

const TAG = "kaoru0529-22";

export const products: Product[] = [
  {
    id: "p001",
    name: "肌ラボ 極潤プレミアムヒアルロン液 170mL",
    brand: "ロート製薬",
    category: "toner",
    price: 968,
    emoji: "💧",
    description: "5種のヒアルロン酸を配合した大人気の保湿化粧水。肌の奥まで潤いを届けてもちもち肌へ。",
    keyIngredients: ["ヒアルロン酸Na", "加水分解ヒアルロン酸", "アセチルヒアルロン酸Na"],
    suitableFor: ["dry", "normal", "sensitive"],
    concerns: ["dryness"],
    rating: 4.5,
    reviewCount: 18432,
    affiliateLinks: {
      amazon: `https://www.amazon.co.jp/s?k=肌ラボ+極潤プレミアムヒアルロン液&tag=${TAG}`,
      rakuten: "https://search.rakuten.co.jp/search/mall/肌ラボ+極潤プレミアムヒアルロン液/",
      qoo10: "https://www.qoo10.jp/search/?keyword=肌ラボ+極潤プレミアム",
    },
  },
  {
    id: "p002",
    name: "ミノン アミノモイスト モイストチャージローション II 150mL",
    brand: "第一三共ヘルスケア",
    category: "toner",
    price: 1760,
    emoji: "💧",
    description: "9種のアミノ酸を配合した敏感肌向け化粧水。低刺激でしっとり潤う敏感肌の定番。",
    keyIngredients: ["アミノ酸", "グリセリン", "ヒアルロン酸Na"],
    suitableFor: ["sensitive", "dry", "normal"],
    concerns: ["dryness", "sensitivity"],
    rating: 4.6,
    reviewCount: 12847,
    affiliateLinks: {
      amazon: `https://www.amazon.co.jp/s?k=ミノン+アミノモイスト+ローション&tag=${TAG}`,
      rakuten: "https://search.rakuten.co.jp/search/mall/ミノン+アミノモイスト+ローション/",
      qoo10: "https://www.qoo10.jp/search/?keyword=ミノン+アミノモイスト+ローション",
    },
  },
  {
    id: "p003",
    name: "ファンケル マイルドクレンジングオイル 120mL",
    brand: "ファンケル",
    category: "cleanser",
    price: 1870,
    emoji: "🫧",
    description: "無添加処方の大人気クレンジングオイル。メイクを素早く落としながら肌をしっとり保つ。累計1億本突破。",
    keyIngredients: ["オリーブ油", "ホホバ種子油", "スクワラン"],
    suitableFor: ["sensitive", "dry", "normal"],
    concerns: ["dryness", "sensitivity"],
    rating: 4.7,
    reviewCount: 42651,
    affiliateLinks: {
      amazon: `https://www.amazon.co.jp/s?k=ファンケル+マイルドクレンジングオイル&tag=${TAG}`,
      rakuten: "https://search.rakuten.co.jp/search/mall/ファンケル+マイルドクレンジングオイル/",
      qoo10: "https://www.qoo10.jp/search/?keyword=ファンケル+クレンジングオイル",
    },
  },
  {
    id: "p004",
    name: "ロート メラノCC 薬用しみ集中対策美容液 20mL",
    brand: "ロート製薬",
    category: "serum",
    price: 990,
    emoji: "✨",
    description: "ビタミンC誘導体（アスコルビン酸2-グルコシド）配合の美容液。シミ・そばかすを防いで透明感アップ。",
    keyIngredients: ["アスコルビン酸2-グルコシド", "レチノール", "α-アルブチン"],
    suitableFor: ["normal", "combination", "oily"],
    concerns: ["spots", "aging"],
    rating: 4.5,
    reviewCount: 28943,
    affiliateLinks: {
      amazon: `https://www.amazon.co.jp/s?k=メラノCC+薬用しみ集中対策美容液&tag=${TAG}`,
      rakuten: "https://search.rakuten.co.jp/search/mall/メラノCC+美容液/",
      qoo10: "https://www.qoo10.jp/search/?keyword=メラノCC+美容液",
    },
  },
  {
    id: "p005",
    name: "COSRX ナイアシンアミド15 フェイスクリーム 50mL",
    brand: "COSRX",
    category: "moisturizer",
    price: 2530,
    emoji: "🫙",
    description: "高濃度ナイアシンアミド15%配合の韓国コスメ。毛穴・ニキビ跡・くすみに幅広くアプローチ。",
    keyIngredients: ["ナイアシンアミド15%", "アルブチン", "ペンタペプチド-18"],
    suitableFor: ["oily", "combination", "normal"],
    concerns: ["pores_oil", "spots", "acne"],
    rating: 4.4,
    reviewCount: 8762,
    affiliateLinks: {
      amazon: `https://www.amazon.co.jp/s?k=COSRX+ナイアシンアミド15+フェイスクリーム&tag=${TAG}`,
      rakuten: "https://search.rakuten.co.jp/search/mall/COSRX+ナイアシンアミド/",
      qoo10: "https://www.qoo10.jp/search/?keyword=COSRX+ナイアシンアミド",
    },
  },
  {
    id: "p006",
    name: "ビオレUV アクアリッチウォータリーエッセンス SPF50+ 70g",
    brand: "花王",
    category: "sunscreen",
    price: 880,
    emoji: "☀️",
    description: "SPF50+ PA++++のさらさらテクスチャー日焼け止め。白浮きせず毎日使いやすい大人気UV。",
    keyIngredients: ["マイクロディフェンス技術", "ヒアルロン酸"],
    suitableFor: ["oily", "combination", "normal", "dry", "sensitive"],
    concerns: ["spots", "aging"],
    rating: 4.6,
    reviewCount: 35218,
    affiliateLinks: {
      amazon: `https://www.amazon.co.jp/s?k=ビオレUV+アクアリッチウォータリーエッセンス&tag=${TAG}`,
      rakuten: "https://search.rakuten.co.jp/search/mall/ビオレUV+アクアリッチ+エッセンス/",
      qoo10: "https://www.qoo10.jp/search/?keyword=ビオレUV+アクアリッチ",
    },
  },
  {
    id: "p007",
    name: "アネッサ パーフェクトUV スキンケアミルク SPF50+ 60mL",
    brand: "資生堂",
    category: "sunscreen",
    price: 2090,
    emoji: "☀️",
    description: "汗・水・熱に強いスーパーウォータープルーフ処方。アウトドアでも安心の高機能日焼け止め。",
    keyIngredients: ["アクアブースター技術", "スキンケア成分"],
    suitableFor: ["normal", "combination", "oily"],
    concerns: ["spots", "aging"],
    rating: 4.7,
    reviewCount: 22134,
    affiliateLinks: {
      amazon: `https://www.amazon.co.jp/s?k=アネッサ+パーフェクトUV+スキンケアミルク&tag=${TAG}`,
      rakuten: "https://search.rakuten.co.jp/search/mall/アネッサ+パーフェクトUV+ミルク/",
      qoo10: "https://www.qoo10.jp/search/?keyword=アネッサ+パーフェクトUV",
    },
  },
  {
    id: "p008",
    name: "CeraVe モイスチャライジングクリーム 340g",
    brand: "CeraVe",
    category: "moisturizer",
    price: 2178,
    emoji: "🫙",
    description: "3種のセラミド＋ヒアルロン酸配合の皮膚科医推奨クリーム。乾燥肌・敏感肌の保湿ケアに最適。",
    keyIngredients: ["セラミドNP", "セラミドAP", "ヒアルロン酸Na"],
    suitableFor: ["dry", "sensitive", "normal"],
    concerns: ["dryness", "sensitivity"],
    rating: 4.6,
    reviewCount: 15893,
    affiliateLinks: {
      amazon: `https://www.amazon.co.jp/s?k=CeraVe+モイスチャライジングクリーム&tag=${TAG}`,
      rakuten: "https://search.rakuten.co.jp/search/mall/CeraVe+モイスチャライジングクリーム/",
      qoo10: "https://www.qoo10.jp/search/?keyword=CeraVe+セラヴィ+クリーム",
    },
  },
  {
    id: "p009",
    name: "タカミスキンピール 30mL",
    brand: "タカミ",
    category: "toner",
    price: 3850,
    emoji: "💧",
    description: "毛穴・ざらつきに独自の角質美容水。ターンオーバーを整えてなめらかな素肌へ。SNSで話題の人気商品。",
    keyIngredients: ["タカミエキス", "BHA", "アミノ酸"],
    suitableFor: ["oily", "combination", "normal"],
    concerns: ["pores_oil", "acne", "aging"],
    rating: 4.4,
    reviewCount: 19832,
    affiliateLinks: {
      amazon: `https://www.amazon.co.jp/s?k=タカミスキンピール&tag=${TAG}`,
      rakuten: "https://search.rakuten.co.jp/search/mall/タカミスキンピール/",
      qoo10: "https://www.qoo10.jp/search/?keyword=タカミスキンピール",
    },
  },
  {
    id: "p010",
    name: "ニュートロジーナ ハイドロブースト ウォータージェル 50g",
    brand: "ニュートロジーナ",
    category: "moisturizer",
    price: 1980,
    emoji: "🫙",
    description: "ヒアルロン酸配合のさっぱりウォータージェル。オイルフリーで脂性肌・混合肌にぴったりの保湿。",
    keyIngredients: ["ヒアルロン酸Na", "グリセリン"],
    suitableFor: ["oily", "combination", "normal"],
    concerns: ["dryness", "pores_oil"],
    rating: 4.4,
    reviewCount: 11247,
    affiliateLinks: {
      amazon: `https://www.amazon.co.jp/s?k=ニュートロジーナ+ハイドロブースト+ウォータージェル&tag=${TAG}`,
      rakuten: "https://search.rakuten.co.jp/search/mall/ニュートロジーナ+ハイドロブースト/",
      qoo10: "https://www.qoo10.jp/search/?keyword=ニュートロジーナ+ハイドロブースト",
    },
  },
  {
    id: "p011",
    name: "オルビス ユードット ホワイトニングセラム 35mL",
    brand: "オルビス",
    category: "serum",
    price: 4180,
    emoji: "✨",
    description: "薬用美白有効成分×ハリケア成分配合。シミ予防＋エイジングケアを同時にアプローチする薬用美容液。",
    keyIngredients: ["トラネキサム酸", "ナイアシンアミド", "ペプチド"],
    suitableFor: ["normal", "dry", "combination"],
    concerns: ["spots", "aging"],
    rating: 4.5,
    reviewCount: 7624,
    affiliateLinks: {
      amazon: `https://www.amazon.co.jp/s?k=オルビス+ユードット+ホワイトニングセラム&tag=${TAG}`,
      rakuten: "https://search.rakuten.co.jp/search/mall/オルビス+ユードット+ホワイトニング/",
      qoo10: "https://www.qoo10.jp/search/?keyword=オルビス+ユードット+美容液",
    },
  },
  {
    id: "p012",
    name: "ドクタージャルト シカペアクリーム+ 15mL",
    brand: "Dr.Jart+",
    category: "moisturizer",
    price: 1870,
    emoji: "🫙",
    description: "センテラアジアティカ配合の鎮静クリーム。赤み・炎症・敏感な肌をケアする韓国コスメの定番。",
    keyIngredients: ["センテラアジアティカ", "パンテノール", "マデカシン酸"],
    suitableFor: ["sensitive", "acne-prone", "normal"],
    concerns: ["acne", "sensitivity", "dryness"],
    rating: 4.5,
    reviewCount: 9341,
    affiliateLinks: {
      amazon: `https://www.amazon.co.jp/s?k=ドクタージャルト+シカペアクリーム&tag=${TAG}`,
      rakuten: "https://search.rakuten.co.jp/search/mall/ドクタージャルト+シカペア/",
      qoo10: "https://www.qoo10.jp/search/?keyword=ドクタージャルト+シカペア",
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

export const categoryEmojis: Record<Product["category"], string> = {
  cleanser: "🫧",
  toner: "💧",
  serum: "✨",
  moisturizer: "🫙",
  sunscreen: "☀️",
  mask: "🌿",
  eye_cream: "👁️",
  oil: "🌹",
};
