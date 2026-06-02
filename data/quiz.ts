export type QuizOption = {
  value: string;
  label: string;
  emoji?: string;
};

export type QuizQuestion = {
  id: string;
  question: string;
  description?: string;
  options: QuizOption[];
};

export const quizQuestions: QuizQuestion[] = [
  {
    id: "skin_type",
    question: "あなたの肌タイプはどれですか？",
    description: "洗顔後、何もつけずに30分放置したときの状態で判断してください",
    options: [
      { value: "dry", label: "乾燥肌", emoji: "🏜️" },
      { value: "oily", label: "脂性肌（オイリー）", emoji: "✨" },
      { value: "combination", label: "混合肌（Tゾーンのみ脂っぽい）", emoji: "☯️" },
      { value: "normal", label: "普通肌", emoji: "🌿" },
      { value: "sensitive", label: "敏感肌・ゆらぎ肌", emoji: "🌸" },
    ],
  },
  {
    id: "age",
    question: "年代を教えてください",
    options: [
      { value: "teens", label: "10代", emoji: "🌱" },
      { value: "20s_early", label: "20代前半", emoji: "🌺" },
      { value: "20s_late", label: "20代後半", emoji: "🌸" },
      { value: "30s", label: "30代", emoji: "🌹" },
      { value: "40s_plus", label: "40代以上", emoji: "🌷" },
    ],
  },
  {
    id: "main_concern",
    question: "一番気になる肌の悩みは何ですか？",
    options: [
      { value: "dryness", label: "乾燥・ごわつき", emoji: "💧" },
      { value: "pores_oil", label: "毛穴の開き・テカリ", emoji: "🔍" },
      { value: "acne", label: "ニキビ・吹き出物", emoji: "😣" },
      { value: "spots", label: "シミ・そばかす・くすみ", emoji: "☀️" },
      { value: "aging", label: "ハリ不足・たるみ・小じわ", emoji: "⏰" },
    ],
  },
  {
    id: "sub_concern",
    question: "次に気になる悩みはありますか？",
    options: [
      { value: "dryness", label: "乾燥・ごわつき", emoji: "💧" },
      { value: "pores_oil", label: "毛穴の開き・テカリ", emoji: "🔍" },
      { value: "acne", label: "ニキビ・吹き出物", emoji: "😣" },
      { value: "spots", label: "シミ・そばかす・くすみ", emoji: "☀️" },
      { value: "none", label: "特になし", emoji: "✨" },
    ],
  },
  {
    id: "sensitivity",
    question: "肌の敏感度はどのくらいですか？",
    options: [
      { value: "very_sensitive", label: "すぐに赤くなる・刺激を感じやすい" },
      { value: "somewhat_sensitive", label: "たまに反応することがある" },
      { value: "normal", label: "あまり気にならない" },
      { value: "not_sensitive", label: "ほとんど問題ない" },
    ],
  },
  {
    id: "lifestyle_sleep",
    question: "1日の平均睡眠時間はどのくらいですか？",
    options: [
      { value: "under5", label: "5時間未満", emoji: "😴" },
      { value: "5to6", label: "5〜6時間", emoji: "🌙" },
      { value: "6to8", label: "6〜8時間", emoji: "😊" },
      { value: "over8", label: "8時間以上", emoji: "💤" },
    ],
  },
  {
    id: "sunscreen",
    question: "日焼け止めは毎日使っていますか？",
    options: [
      { value: "always", label: "毎日欠かさず使う", emoji: "🌞" },
      { value: "often", label: "外出時は使う", emoji: "👒" },
      { value: "sometimes", label: "たまに使う", emoji: "🌤️" },
      { value: "never", label: "ほとんど使わない", emoji: "🌧️" },
    ],
  },
  {
    id: "current_care",
    question: "現在使っているスキンケアのステップ数は？",
    options: [
      { value: "minimal", label: "洗顔のみ・または1ステップ", emoji: "💦" },
      { value: "basic", label: "化粧水＋保湿（2〜3ステップ）", emoji: "🧴" },
      { value: "standard", label: "美容液も使う（4〜5ステップ）", emoji: "✨" },
      { value: "full", label: "6ステップ以上のフルケア", emoji: "💆" },
    ],
  },
  {
    id: "budget",
    question: "スキンケアへの月の予算はどのくらいですか？",
    options: [
      { value: "under3000", label: "3,000円以下", emoji: "💴" },
      { value: "3to8k", label: "3,000〜8,000円", emoji: "💰" },
      { value: "8to15k", label: "8,000〜15,000円", emoji: "💎" },
      { value: "over15k", label: "15,000円以上", emoji: "👑" },
    ],
  },
  {
    id: "fragrance",
    question: "香り付きのスキンケアは好きですか？",
    options: [
      { value: "love", label: "好き・気にしない", emoji: "🌹" },
      { value: "mild", label: "やさしい香りなら OK", emoji: "🌿" },
      { value: "dislike", label: "なるべく無香料がよい", emoji: "🚫" },
    ],
  },
];

export type DiagnosisAnswers = Record<string, string>;
