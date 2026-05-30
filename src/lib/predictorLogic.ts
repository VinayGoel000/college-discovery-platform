import { type College } from "@/types";

export type PredictorExam = "None" | "JEE Main" | "JEE Advanced" | "CUET" | "NEET" | "CAT" | "GATE";

export type PredictorChance = "High Chance" | "Moderate Chance" | "Low Chance";

export type PredictorResult = College & {
  matchedExam: string;
  closingRank: number;
  chance: PredictorChance;
};

export function getChanceCategory(userRank: number, closingRank: number): PredictorChance {
  if (userRank <= closingRank * 0.7) {
    return "High Chance";
  }

  if (userRank <= closingRank) {
    return "Moderate Chance";
  }

  return "Low Chance";
}

export function isPredictorEligible(userRank: number, closingRank: number) {
  return userRank <= closingRank * 1.15;
}

export function sortPredictorResults(results: PredictorResult[]) {
  return [...results].sort((left, right) => {
    const chanceOrder: Record<PredictorChance, number> = {
      "High Chance": 0,
      "Moderate Chance": 1,
      "Low Chance": 2
    };

    const chanceDelta = chanceOrder[left.chance] - chanceOrder[right.chance];
    if (chanceDelta !== 0) {
      return chanceDelta;
    }

    return left.closingRank - right.closingRank;
  });
}
