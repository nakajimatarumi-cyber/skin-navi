import "server-only";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { DiagnosisAnswers } from "@/data/quiz";
import { products } from "@/data/products";
import { RecommendationResult } from "@/lib/types";

export type { RecommendationResult };

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

// ─── ルールベースフォールバック ───────────────────────────────────────
function getRuleBasedRecommendation(answers: DiagnosisAnswers): RecommendationResult {
  const skinType = answers.skin_type;
  const mainConcern = answers.main_concern;
  const subConcern = answers.sub_concern;
  const age = answers.age;

  const skinTypeLabels: Record<string, string> = {
    dry: "乾燥肌", oily: "脂性肌", combination: "混合肌",
    normal: "普通肌", sensitive: "敏感肌",
  };
  const concernLabels: Record<string, string> = {
    dryness: "乾燥・ごわつき", pores_oil: "毛穴・テカリ", acne: "ニキビ",
    spots: "シミ・くすみ", aging: "エイジングケア", none: "なし",
  };
  const ageLabels: Record<string, string> = {
    teens: "10代", "20s_early": "20代前半", "20s_late": "20代後半",
    "30s": "30代", "40s_plus": "40代以上",
  };

  // スコアリングで商品をランク付け
  const scored = products.map((p) => {
    let score = 0;
    if (p.suitableFor.includes(skinType)) score += 3;
    if (p.concerns.includes(mainConcern)) score += 3;
    if (subConcern && p.concerns.includes(subConcern)) score += 2;
    if (["40s_plus", "30s"].includes(age) && p.concerns.includes("aging")) score += 1;
    return { ...p, score };
  });
  scored.sort((a, b) => b.score - a.score);
  const top5 = scored.slice(0, 5);

  const reasons: Record<string, string> = {};
  top5.forEach((p) => {
    const matched = p.concerns.filter((c) => [mainConcern, subConcern].includes(c));
    reasons[p.id] = matched.length > 0
      ? `${skinTypeLabels[skinType] || skinType}の方に最適で、${matched.map((c) => concernLabels[c] || c).join("・")}に効果的な成分を配合しています。`
      : `${skinTypeLabels[skinType] || skinType}の方の肌バリアをサポートし、毎日のケアをより効果的にします。`;
  });

  const tips: Record<string, string[]> = {
    dry: ["化粧水は手のひらで温めてから優しくハンドプレス", "乳液・クリームは化粧水後すぐに重ねて蒸発を防ぐ", "週1〜2回の集中保湿パックで潤いを補充", "室内の乾燥対策に加湿器を活用しましょう"],
    oily: ["洗顔は1日2回。過剰な洗顔はかえって皮脂分泌を増やします", "化粧水はしっかり浸透させ、軽めのゲルで保湿", "週1〜2回のAHAピーリングで毛穴の角栓ケア", "油分の少ないノンコメドジェニック製品を選びましょう"],
    combination: ["Tゾーンと目元・口元で保湿量を変えるゾーン別ケアが効果的", "軽いテクスチャーの化粧水で全体を保湿", "Tゾーンは吸水性の高いシートマスクで過剰な皮脂をケア", "季節の変わり目は肌の状態をこまめにチェック"],
    sensitive: ["刺激の少ない無香料・無着色の製品を選びましょう", "新しい製品は必ず腕の内側でパッチテストを", "洗顔はぬるめのお湯で、こすらずやさしく", "外出時は日焼け止めで紫外線ダメージを防ぎましょう"],
    normal: ["今の肌バランスを維持する基本ケアを継続しましょう", "年齢に応じた予防的エイジングケアを取り入れて", "日焼け止めで将来のシミ・くすみ予防を", "季節や体調に合わせてケアを柔軟に調整しましょう"],
  };

  const peelingMap: Record<string, string> = {
    dry: "乾燥肌の方には、保湿効果の高い「モイスチャーピーリング」がおすすめです。古い角質を除去しながら潤いを補充し、スキンケアの浸透力を高めます。大阪のSkinNaviエステサロンで、お肌の状態に合わせた施術をご提案します。",
    oily: "脂性肌・毛穴の開きが気になる方には、BHA系のピーリング施術が効果的です。余分な皮脂や角栓を取り除き、毛穴が引き締まったなめらかな肌へと整えます。大阪のSkinNaviエステサロンでプロの施術をお試しください。",
    combination: "混合肌の方には、部位別に最適化したハイブリッドピーリングをご用意しています。Tゾーンの毛穴ケアと乾燥部位の保湿を同時にアプローチ。大阪のSkinNaviエステで、バランスの取れた美肌を目指しましょう。",
    sensitive: "敏感肌の方でも安心できる、低刺激の乳酸ピーリングをご用意しています。肌バリアを守りながらやさしくターンオーバーを促進。大阪のSkinNaviエステサロンで、専門家が丁寧にケアいたします。",
    spots: "シミ・くすみが気になる方には、ビタミンC導入と組み合わせたブライトニングピーリングが効果的です。透明感あふれる肌へと導きます。大阪のSkinNaviエステサロンで、輝く素肌を手に入れましょう。",
    aging: "エイジングケアには、レチノールやペプチドを組み合わせたアンチエイジングピーリングがおすすめです。ハリ・弾力を取り戻し、若々しい肌へ。大阪のSkinNaviエステサロンでご相談ください。",
  };

  const peelingAdvice = peelingMap[mainConcern] || peelingMap[skinType] ||
    "プロによるピーリング施術は、自宅ケアでは届かない深い角質層にアプローチします。大阪のSkinNaviエステサロンで、あなたの肌に最適な施術をご提案します。";

  return {
    skinProfile: `${ageLabels[age] || age}の${skinTypeLabels[skinType] || skinType}の方ですね。${concernLabels[mainConcern] || mainConcern}が主なお悩みとのこと、しっかりとケアしていきましょう。正しいスキンケアを続けることで、必ず理想の肌に近づけます。`,
    recommendedProductIds: top5.map((p) => p.id),
    reasons,
    routineTips: tips[skinType] || tips["normal"],
    peelingAdvice,
  };
}

// ─── Gemini AI推薦 ────────────────────────────────────────────────────
function buildPrompt(answers: DiagnosisAnswers): string {
  const skinTypeMap: Record<string, string> = {
    dry: "乾燥肌", oily: "脂性肌", combination: "混合肌",
    normal: "普通肌", sensitive: "敏感肌",
  };
  const ageMap: Record<string, string> = {
    teens: "10代", "20s_early": "20代前半", "20s_late": "20代後半",
    "30s": "30代", "40s_plus": "40代以上",
  };
  const concernMap: Record<string, string> = {
    dryness: "乾燥・ごわつき", pores_oil: "毛穴の開き・テカリ",
    acne: "ニキビ・吹き出物", spots: "シミ・そばかす・くすみ",
    aging: "ハリ不足・たるみ・小じわ", none: "特になし",
  };

  const productList = products
    .map((p) => `ID:${p.id} | ${p.name} | カテゴリ:${p.category} | 対応悩み:${p.concerns.join(",")} | 対応肌:${p.suitableFor.join(",")}`)
    .join("\n");

  return `あなたはプロの美容アドバイザーです。以下の診断結果に基づいて、最適なスキンケア商品を推薦してください。

【診断結果】
- 肌タイプ: ${skinTypeMap[answers.skin_type] || answers.skin_type}
- 年代: ${ageMap[answers.age] || answers.age}
- 主な悩み: ${concernMap[answers.main_concern] || answers.main_concern}
- サブ悩み: ${concernMap[answers.sub_concern] || answers.sub_concern}
- 肌の敏感度: ${answers.sensitivity}
- 睡眠時間: ${answers.lifestyle_sleep}
- 日焼け止め使用: ${answers.sunscreen}
- 現在のケアステップ: ${answers.current_care}
- 月の予算: ${answers.budget}
- 香りの好み: ${answers.fragrance}

【利用可能な商品リスト】
${productList}

以下のJSON形式のみで回答してください。前後に説明文やコードブロックを入れないでください：
{
  "skinProfile": "この方の肌タイプと特徴についての2〜3文の説明（優しく励ます口調で）",
  "recommendedProductIds": ["最適な商品ID", "2番目", "3番目", "4番目", "5番目"],
  "reasons": {
    "商品ID": "この方にこの商品をすすめる理由（1〜2文）"
  },
  "routineTips": ["この方の肌に合ったスキンケアのコツ（3〜4項目）"],
  "peelingAdvice": "専門家によるピーリング施術がこの方にどう役立つかの説明（大阪のエステサロンでのケアを自然に提案、2〜3文）"
}`;
}

export async function getDiagnosisRecommendation(
  answers: DiagnosisAnswers
): Promise<RecommendationResult> {
  // Gemini APIを試みて、失敗したらルールベースにフォールバック
  try {
    const model = genAI.getGenerativeModel({
      model: "gemini-2.0-flash",
      systemInstruction:
        "あなたは日本の美容専門家です。回答は必ずJSONのみで返してください。",
      generationConfig: { responseMimeType: "application/json" },
    });
    const result = await model.generateContent(buildPrompt(answers));
    const text = result.response.text().trim();
    const jsonText = text.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
    return JSON.parse(jsonText) as RecommendationResult;
  } catch (error) {
    console.warn("Gemini API unavailable, using rule-based fallback:", error);
    return getRuleBasedRecommendation(answers);
  }
}
