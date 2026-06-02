"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { quizQuestions, DiagnosisAnswers } from "@/data/quiz";
import QuizStep from "@/components/quiz/QuizStep";
import { Sparkles, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function DiagnosisPage() {
  const router = useRouter();
  const [step, setStep] = useState<"intro" | "quiz" | "loading">("intro");
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<DiagnosisAnswers>({});

  const currentQuestion = quizQuestions[currentIndex];
  const totalSteps = quizQuestions.length;

  const handleSelect = (value: string) => {
    const newAnswers = { ...answers, [currentQuestion.id]: value };
    setAnswers(newAnswers);

    setTimeout(() => {
      if (currentIndex < totalSteps - 1) {
        setCurrentIndex(currentIndex + 1);
      } else {
        submitDiagnosis(newAnswers);
      }
    }, 300);
  };

  const handleBack = () => {
    if (currentIndex === 0) {
      setStep("intro");
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const submitDiagnosis = async (finalAnswers: DiagnosisAnswers) => {
    setStep("loading");
    try {
      const response = await fetch("/api/diagnose", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(finalAnswers),
      });

      if (!response.ok) throw new Error("API error");

      const result = await response.json();
      const resultId = Date.now().toString();
      sessionStorage.setItem(`diagnosis_${resultId}`, JSON.stringify({ answers: finalAnswers, result }));
      router.push(`/result/${resultId}`);
    } catch (error) {
      alert("診断中にエラーが発生しました。もう一度お試しください。");
      setStep("quiz");
    }
  };

  if (step === "intro") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-rose-50 via-pink-50 to-white flex flex-col items-center justify-center px-4 pb-20">
        <div className="max-w-sm mx-auto text-center space-y-8">
          <div className="space-y-4">
            <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto">
              <Sparkles className="h-10 w-10 text-rose-500" />
            </div>
            <h1 className="text-2xl font-bold text-gray-800">
              肌タイプ診断
            </h1>
            <p className="text-gray-500 text-sm leading-relaxed">
              10問の質問に答えるだけで、あなたの肌に本当に合ったスキンケアをAIが提案します。
            </p>
          </div>

          <div className="bg-white rounded-2xl p-5 shadow-sm border border-rose-100 space-y-3 text-left">
            <h3 className="font-semibold text-gray-700 text-sm">診断でわかること</h3>
            {[
              "あなたの肌タイプの詳しい特徴",
              "今の悩みに効くケアのポイント",
              "肌に合ったおすすめ商品5選",
              "プロによるピーリング施術のご提案",
            ].map((item) => (
              <div key={item} className="flex items-start gap-2">
                <span className="text-rose-400 mt-0.5">✓</span>
                <span className="text-sm text-gray-600">{item}</span>
              </div>
            ))}
          </div>

          <Button
            onClick={() => setStep("quiz")}
            size="lg"
            className="w-full bg-rose-500 hover:bg-rose-600 text-white rounded-full py-6 text-base font-semibold"
          >
            診断をはじめる
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>

          <p className="text-xs text-gray-400">所要時間：約2分 / 無料</p>
        </div>
      </div>
    );
  }

  if (step === "loading") {
    return (
      <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white flex flex-col items-center justify-center px-4 pb-20">
        <div className="text-center space-y-6">
          <div className="w-20 h-20 bg-rose-100 rounded-full flex items-center justify-center mx-auto animate-pulse">
            <Sparkles className="h-10 w-10 text-rose-500" />
          </div>
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-gray-800">診断中...</h2>
            <p className="text-sm text-gray-500">
              AIがあなたの肌を分析しています
              <br />
              少々お待ちください
            </p>
          </div>
          <div className="flex justify-center gap-1">
            {[0, 1, 2].map((i) => (
              <div
                key={i}
                className="w-2 h-2 bg-rose-400 rounded-full animate-bounce"
                style={{ animationDelay: `${i * 0.2}s` }}
              />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <QuizStep
      question={currentQuestion}
      currentStep={currentIndex + 1}
      totalSteps={totalSteps}
      selectedValue={answers[currentQuestion.id]}
      onSelect={handleSelect}
      onBack={handleBack}
    />
  );
}
