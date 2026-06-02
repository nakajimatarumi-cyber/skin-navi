import "server-only";
import { GoogleGenerativeAI } from "@google/generative-ai";
import { DiagnosisAnswers } from "@/data/quiz";
import { products } from "@/data/products";
import { RecommendationResult } from "@/lib/types";

export type { RecommendationResult };

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || "");

function buildPrompt(answers: DiagnosisAnswers): string {
  const skinTypeMap: Record<string, string> = {
    dry: "乾燥肌",
    oily: "脂性肌",
    combination: "混合肌",
    normal: "普通肌",
    sensitive: "敏感肌",
  };

  const ageMap: Record<string, string> = {
    teens: "10代",
    "20s_early": "20代前半",
    "20s_late": "20代後半",
    "30s": "30代",
    "40s_plus": "40代以上",
  };

  const concernMap: Record<string, string> = {
    dryness: "乾燥・ごわつき",
    pores_oil: "毛穴の開き・テカリ",
    acne: "ニキビ・吹き出物",
    spots: "シミ・そばかす・くすみ",
    aging: "ハリ不足・たるみ・小じわ",
    none: "特になし",
  };

  const productList = products
    .map(
      (p) =>
        `ID:${p.id} | ${p.name} | カテゴリ:${p.category} | 対応悩み:${p.concerns.join(",")} | 対応肌:${p.suitableFor.join(",")}`
    )
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
  "routineTips": [
    "この方の肌に合ったスキンケアのコツ（3〜4項目）"
  ],
  "peelingAdvice": "専門家によるピーリング施術がこの方にどう役立つかの説明（大阪のエステサロンでのケアを自然に提案、2〜3文）"
}`;
}

export async function getDiagnosisRecommendation(
  answers: DiagnosisAnswers
): Promise<RecommendationResult> {
  const model = genAI.getGenerativeModel({
    model: "gemini-2.0-flash",
    systemInstruction:
      "あなたは日本の美容専門家です。ユーザーの肌診断に基づいて、具体的で実践的なスキンケアアドバイスをします。回答は必ずJSONのみで返してください。前後に説明文やMarkdownコードブロックを入れないでください。",
    generationConfig: {
      responseMimeType: "application/json",
    },
  });

  const result = await model.generateContent(buildPrompt(answers));
  const text = result.response.text().trim();
  const jsonText = text.replace(/```json\n?/g, "").replace(/```\n?/g, "").trim();
  return JSON.parse(jsonText) as RecommendationResult;
}
