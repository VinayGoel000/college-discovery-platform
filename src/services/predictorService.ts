import { mockColleges } from "@/data/mockColleges";
import { type College } from "@/types";
import {
  getChanceCategory,
  isPredictorEligible,
  type PredictorExam,
  type PredictorResult,
  sortPredictorResults
} from "@/lib/predictorLogic";

export type PredictorQuery = {
  exam: PredictorExam;
  rank: number;
};

export function predictColleges({ exam, rank }: PredictorQuery): PredictorResult[] {
  if (exam === "None") {
    return [];
  }

  const results = mockColleges.flatMap((college: College) => {
    const match = college.acceptedExams.find((acceptedExam) => acceptedExam.exam === exam);

    if (!match || !isPredictorEligible(rank, match.closingRank)) {
      return [];
    }

    return [
      {
        ...college,
        matchedExam: match.exam,
        closingRank: match.closingRank,
        chance: getChanceCategory(rank, match.closingRank)
      }
    ];
  });

  return sortPredictorResults(results);
}
