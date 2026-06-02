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
  imageUrl: string;
  description: string;
  keyIngredients: string[];
  suitableFor: string[];
  concerns: string[];
  rating: number;
  reviewCount: number;
  affiliateLinks: AffiliateLinks;
};

const AMAZON_TAG = "skinnavi-22";
const RAKUTEN_ID = "5471e9b9.6b166d14.5471e9ba.9b177d5d";
const QOO10_ID = "1465605654";

// AmazonアソシエイトASIN画像URL生成
const amazonImage = (asin: string) =>
  `https://ws-fe.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=${asin}&Format=_SL250_&ID=AsinImage&MarketPlace=JP&ServiceVersion=20070822&WS=1&tag=${AMAZON_TAG}&language=ja_JP`;

// Amazon検索リンク生成（キーワード検索＋アフィリエイトタグ）
const amazonLink = (keyword: string) =>
  `https://www.amazon.co.jp/s?k=${encodeURIComponent(keyword)}&tag=${AMAZON_TAG}`;

// 楽天アフィリエイトリンク生成
const rakutenLink = (keyword: string) => {
  const encoded = encodeURIComponent(
    `https://search.rakuten.co.jp/search/mall/${keyword}/`
  );
  return `https://hb.afl.rakuten.co.jp/ichiba/${RAKUTEN_ID}/?pc=${encoded}&link_type=text`;
};

// Qoo10アフィリエイトリンク生成
const qoo10Link = (keyword: string) =>
  `https://www.qoo10.jp/search/?keyword=${encodeURIComponent(keyword)}&affiliate_code=${QOO10_ID}`;

export const products: Product[] = [
  {
    id: "p001",
    name: "肌ラボ 極潤プレミアムヒアルロン液 170mL",
    brand: "ロート製薬",
    category: "toner",
    price: 968,
    emoji: "💧",
    imageUrl: amazonImage("B003BVMQBW"),
    description: "5種のヒアルロン酸を配合した大人気の保湿化粧水。肌の奥まで潤いを届けてもちもち肌へ。",
    keyIngredients: ["ヒアルロン酸Na", "加水分解ヒアルロン酸", "アセチルヒアルロン酸Na"],
    suitableFor: ["dry", "normal", "sensitive"],
    concerns: ["dryness"],
    rating: 4.5,
    reviewCount: 18432,
    affiliateLinks: {
      amazon: amazonLink("肌ラボ 極潤プレミアムヒアルロン液"),
      rakuten: rakutenLink("肌ラボ+極潤プレミアムヒアルロン液"),
      qoo10: qoo10Link("肌ラボ 極潤プレミアムヒアルロン液"),
    },
  },
  {
    id: "p002",
    name: "ミノン アミノモイスト モイストチャージローション II 150mL",
    brand: "第一三共ヘルスケア",
    category: "toner",
    price: 1760,
    emoji: "💧",
    imageUrl: amazonImage("B07PXWL95R"),
    description: "9種のアミノ酸配合の敏感肌向け化粧水。低刺激でしっとり潤う敏感肌の定番アイテム。",
    keyIngredients: ["アミノ酸", "グリセリン", "ヒアルロン酸Na"],
    suitableFor: ["sensitive", "dry", "normal"],
    concerns: ["dryness", "sensitivity"],
    rating: 4.6,
    reviewCount: 12847,
    affiliateLinks: {
      amazon: amazonLink("ミノン アミノモイスト モイストチャージローション"),
      rakuten: rakutenLink("ミノン+アミノモイスト+ローション"),
      qoo10: qoo10Link("ミノン アミノモイスト ローション"),
    },
  },
  {
    id: "p003",
    name: "ファンケル マイルドクレンジングオイル 120mL",
    brand: "ファンケル",
    category: "cleanser",
    price: 1870,
    emoji: "🫧",
    imageUrl: amazonImage("B07BDRNN28"),
    description: "無添加処方の大人気クレンジングオイル。メイクを素早く落としながら肌をしっとり保つ。累計1億本突破。",
    keyIngredients: ["オリーブ油", "ホホバ種子油", "スクワラン"],
    suitableFor: ["sensitive", "dry", "normal"],
    concerns: ["dryness", "sensitivity"],
    rating: 4.7,
    reviewCount: 42651,
    affiliateLinks: {
      amazon: amazonLink("ファンケル マイルドクレンジングオイル"),
      rakuten: rakutenLink("ファンケル+マイルドクレンジングオイル"),
      qoo10: qoo10Link("ファンケル マイルドクレンジングオイル"),
    },
  },
  {
    id: "p004",
    name: "ロート メラノCC 薬用しみ集中対策美容液 20mL",
    brand: "ロート製薬",
    category: "serum",
    price: 990,
    emoji: "✨",
    imageUrl: amazonImage("B001ETPE2A"),
    description: "ビタミンC誘導体配合の美容液。シミ・そばかすを防いで透明感アップ。皮膚科医も支持する実力派。",
    keyIngredients: ["アスコルビン酸2-グルコシド", "レチノール", "α-アルブチン"],
    suitableFor: ["normal", "combination", "oily"],
    concerns: ["spots", "aging"],
    rating: 4.5,
    reviewCount: 28943,
    affiliateLinks: {
      amazon: amazonLink("メラノCC 薬用しみ集中対策美容液"),
      rakuten: rakutenLink("メラノCC+薬用しみ集中対策美容液"),
      qoo10: qoo10Link("メラノCC 美容液"),
    },
  },
  {
    id: "p005",
    name: "COSRX ナイアシンアミド15 フェイスクリーム 50mL",
    brand: "COSRX",
    category: "moisturizer",
    price: 2530,
    emoji: "🫙",
    imageUrl: amazonImage("B09MPNP21N"),
    description: "高濃度ナイアシンアミド15%配合の韓国コスメ。毛穴・ニキビ跡・くすみに幅広くアプローチ。",
    keyIngredients: ["ナイアシンアミド15%", "アルブチン", "ペンタペプチド-18"],
    suitableFor: ["oily", "combination", "normal"],
    concerns: ["pores_oil", "spots", "acne"],
    rating: 4.4,
    reviewCount: 8762,
    affiliateLinks: {
      amazon: amazonLink("COSRX ナイアシンアミド15 フェイスクリーム"),
      rakuten: rakutenLink("COSRX+ナイアシンアミド15+フェイスクリーム"),
      qoo10: qoo10Link("COSRX ナイアシンアミド"),
    },
  },
  {
    id: "p006",
    name: "ビオレUV アクアリッチウォータリーエッセンス SPF50+ 70g",
    brand: "花王",
    category: "sunscreen",
    price: 880,
    emoji: "☀️",
    imageUrl: amazonImage("B08VGWK8MV"),
    description: "SPF50+ PA++++のさらさら日焼け止め。白浮きせず毎日使いやすい国民的UVケア。",
    keyIngredients: ["マイクロディフェンス技術", "ヒアルロン酸"],
    suitableFor: ["oily", "combination", "normal", "dry", "sensitive"],
    concerns: ["spots", "aging"],
    rating: 4.6,
    reviewCount: 35218,
    affiliateLinks: {
      amazon: amazonLink("ビオレUV アクアリッチウォータリーエッセンス SPF50+"),
      rakuten: rakutenLink("ビオレUV+アクアリッチウォータリーエッセンス"),
      qoo10: qoo10Link("ビオレUV アクアリッチ"),
    },
  },
  {
    id: "p007",
    name: "アネッサ パーフェクトUV スキンケアミルク SPF50+ 60mL",
    brand: "資生堂",
    category: "sunscreen",
    price: 2090,
    emoji: "☀️",
    imageUrl: amazonImage("B0B8T2M4Z7"),
    description: "汗・水・熱に強いスーパーウォータープルーフ処方。アウトドアでも安心の高機能日焼け止め。",
    keyIngredients: ["アクアブースター技術", "スキンケア成分"],
    suitableFor: ["normal", "combination", "oily"],
    concerns: ["spots", "aging"],
    rating: 4.7,
    reviewCount: 22134,
    affiliateLinks: {
      amazon: amazonLink("アネッサ パーフェクトUV スキンケアミルク SPF50+"),
      rakuten: rakutenLink("アネッサ+パーフェクトUV+スキンケアミルク"),
      qoo10: qoo10Link("アネッサ パーフェクトUV"),
    },
  },
  {
    id: "p008",
    name: "CeraVe モイスチャライジングクリーム 340g",
    brand: "CeraVe",
    category: "moisturizer",
    price: 2178,
    emoji: "🫙",
    imageUrl: amazonImage("B07YZN73RH"),
    description: "3種のセラミド＋ヒアルロン酸配合の皮膚科医推奨クリーム。乾燥肌・敏感肌に最適な保湿クリーム。",
    keyIngredients: ["セラミドNP", "セラミドAP", "ヒアルロン酸Na"],
    suitableFor: ["dry", "sensitive", "normal"],
    concerns: ["dryness", "sensitivity"],
    rating: 4.6,
    reviewCount: 15893,
    affiliateLinks: {
      amazon: amazonLink("CeraVe モイスチャライジングクリーム"),
      rakuten: rakutenLink("CeraVe+モイスチャライジングクリーム"),
      qoo10: qoo10Link("CeraVe モイスチャライジングクリーム"),
    },
  },
  {
    id: "p009",
    name: "タカミスキンピール 30mL",
    brand: "タカミ",
    category: "toner",
    price: 3850,
    emoji: "💧",
    imageUrl: amazonImage("B003VWKZX4"),
    description: "毛穴・ざらつきに独自の角質美容水。ターンオーバーを整えてなめらかな素肌へ。SNSで話題の人気商品。",
    keyIngredients: ["タカミエキス", "BHA", "アミノ酸"],
    suitableFor: ["oily", "combination", "normal"],
    concerns: ["pores_oil", "acne", "aging"],
    rating: 4.4,
    reviewCount: 19832,
    affiliateLinks: {
      amazon: amazonLink("タカミスキンピール"),
      rakuten: rakutenLink("タカミスキンピール"),
      qoo10: qoo10Link("タカミスキンピール"),
    },
  },
  {
    id: "p010",
    name: "ニュートロジーナ ハイドロブースト ウォータージェル 50g",
    brand: "ニュートロジーナ",
    category: "moisturizer",
    price: 1980,
    emoji: "🫙",
    imageUrl: amazonImage("B07PHFJYB7"),
    description: "ヒアルロン酸配合のさっぱりウォータージェル。オイルフリーで脂性肌・混合肌にぴったり。",
    keyIngredients: ["ヒアルロン酸Na", "グリセリン"],
    suitableFor: ["oily", "combination", "normal"],
    concerns: ["dryness", "pores_oil"],
    rating: 4.4,
    reviewCount: 11247,
    affiliateLinks: {
      amazon: amazonLink("ニュートロジーナ ハイドロブースト ウォータージェル"),
      rakuten: rakutenLink("ニュートロジーナ+ハイドロブースト+ウォータージェル"),
      qoo10: qoo10Link("ニュートロジーナ ハイドロブースト"),
    },
  },
  {
    id: "p011",
    name: "オルビス ユードット ホワイトニングセラム 35mL",
    brand: "オルビス",
    category: "serum",
    price: 4180,
    emoji: "✨",
    imageUrl: amazonImage("B09DHFZ1PQ"),
    description: "薬用美白有効成分×ハリケア成分配合。シミ予防＋エイジングケアを同時にアプローチする薬用美容液。",
    keyIngredients: ["トラネキサム酸", "ナイアシンアミド", "ペプチド"],
    suitableFor: ["normal", "dry", "combination"],
    concerns: ["spots", "aging"],
    rating: 4.5,
    reviewCount: 7624,
    affiliateLinks: {
      amazon: amazonLink("オルビス ユードット ホワイトニングセラム"),
      rakuten: rakutenLink("オルビス+ユードット+ホワイトニングセラム"),
      qoo10: qoo10Link("オルビス ユードット ホワイトニングセラム"),
    },
  },
  {
    id: "p012",
    name: "Dr.Jart+ シカペアクリーム+ 15mL",
    brand: "Dr.Jart+",
    category: "moisturizer",
    price: 1870,
    emoji: "🫙",
    imageUrl: amazonImage("B07K1GSVCB"),
    description: "センテラアジアティカ配合の鎮静クリーム。赤み・炎症・敏感な肌をケアする韓国コスメの定番。",
    keyIngredients: ["センテラアジアティカ", "パンテノール", "マデカシン酸"],
    suitableFor: ["sensitive", "normal"],
    concerns: ["acne", "sensitivity", "dryness"],
    rating: 4.5,
    reviewCount: 9341,
    affiliateLinks: {
      amazon: amazonLink("ドクタージャルト シカペアクリーム"),
      rakuten: rakutenLink("ドクタージャルト+シカペアクリーム"),
      qoo10: qoo10Link("ドクタージャルト シカペアクリーム"),
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
