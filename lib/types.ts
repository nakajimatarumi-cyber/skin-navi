export type RecommendationResult = {
  skinProfile: string;
  recommendedProductIds: string[];
  reasons: Record<string, string>;
  routineTips: string[];
  peelingAdvice: string;
};
