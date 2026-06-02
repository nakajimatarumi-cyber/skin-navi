"use client";

import { QuizQuestion } from "@/data/quiz";
import { Progress } from "@/components/ui/progress";
import { Button } from "@/components/ui/button";
import { ChevronLeft } from "lucide-react";

type Props = {
  question: QuizQuestion;
  currentStep: number;
  totalSteps: number;
  selectedValue?: string;
  onSelect: (value: string) => void;
  onBack: () => void;
};

export default function QuizStep({
  question,
  currentStep,
  totalSteps,
  selectedValue,
  onSelect,
  onBack,
}: Props) {
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-b from-rose-50 to-white flex flex-col">
      {/* Progress bar */}
      <div className="sticky top-0 bg-white/90 backdrop-blur border-b border-rose-100 px-4 py-3">
        <div className="max-w-lg mx-auto">
          <div className="flex items-center justify-between mb-2">
            <button
              onClick={onBack}
              className="flex items-center gap-1 text-sm text-gray-500 hover:text-gray-700 transition-colors"
            >
              <ChevronLeft className="h-4 w-4" />
              戻る
            </button>
            <span className="text-sm text-rose-500 font-medium">
              {currentStep} / {totalSteps}
            </span>
          </div>
          <Progress value={progress} className="h-2" />
        </div>
      </div>

      {/* Question */}
      <div className="flex-1 flex flex-col justify-center px-4 py-8">
        <div className="max-w-lg mx-auto w-full space-y-6">
          <div className="space-y-2">
            <h2 className="text-xl font-bold text-gray-800 leading-snug">
              {question.question}
            </h2>
            {question.description && (
              <p className="text-sm text-gray-500">{question.description}</p>
            )}
          </div>

          <div className="space-y-3">
            {question.options.map((option) => {
              const selected = selectedValue === option.value;
              return (
                <button
                  key={option.value}
                  onClick={() => onSelect(option.value)}
                  className={`w-full text-left px-4 py-4 rounded-xl border-2 transition-all ${
                    selected
                      ? "border-rose-400 bg-rose-50 shadow-sm"
                      : "border-gray-200 bg-white hover:border-rose-200 hover:bg-rose-50/50"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    {option.emoji && (
                      <span className="text-2xl">{option.emoji}</span>
                    )}
                    <span
                      className={`font-medium ${
                        selected ? "text-rose-700" : "text-gray-700"
                      }`}
                    >
                      {option.label}
                    </span>
                    {selected && (
                      <span className="ml-auto text-rose-500">✓</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
