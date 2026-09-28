const SCORE_RANKS = [
  { label: "Diamond", minimumScore: 35, tone: "diamond" },
  { label: "Emerald", minimumScore: 30, tone: "emerald" },
  { label: "Platinum", minimumScore: 25, tone: "platinum" },
  { label: "Gold", minimumScore: 20, tone: "gold" },
  { label: "Silver", minimumScore: 10, tone: "silver" },
  { label: "Bronze", minimumScore: 1, tone: "bronze" },
] as const;

const UNRANKED = {
  label: "None",
  minimumScore: 0,
  tone: "none",
} as const;

export type ScoreRank = (typeof SCORE_RANKS)[number] | typeof UNRANKED;

export function getScoreRank(score: number): ScoreRank {
  return SCORE_RANKS.find((rank) => score >= rank.minimumScore) ?? UNRANKED;
}

export function getRankLabel(score: number): ScoreRank["label"] {
  return getScoreRank(score).label;
}
