import { NextRequest, NextResponse } from "next/server";
import { getDiagnosisRecommendation } from "@/lib/claude";
import { DiagnosisAnswers } from "@/data/quiz";

export async function POST(request: NextRequest) {
  try {
    const answers: DiagnosisAnswers = await request.json();

    if (!answers || typeof answers !== "object") {
      return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
    }

    const result = await getDiagnosisRecommendation(answers);
    return NextResponse.json(result);
  } catch (error) {
    console.error("Diagnosis API error:", error);
    return NextResponse.json(
      { error: "診断処理中にエラーが発生しました。もう一度お試しください。" },
      { status: 500 }
    );
  }
}
