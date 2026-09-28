import assert from "node:assert/strict";
import { test } from "node:test";
import { getRankLabel, getScoreRank } from "../lib/score-rank";

test("score ranks change at each threshold", () => {
  const expectations = [
    [-1, "None"],
    [0, "None"],
    [1, "Bronze"],
    [9, "Bronze"],
    [10, "Silver"],
    [19, "Silver"],
    [20, "Gold"],
    [24, "Gold"],
    [25, "Platinum"],
    [29, "Platinum"],
    [30, "Emerald"],
    [34, "Emerald"],
    [35, "Diamond"],
    [100, "Diamond"],
  ] as const;

  for (const [score, expectedLabel] of expectations) {
    assert.equal(getRankLabel(score), expectedLabel);
  }
});

test("score rank exposes the matching visual tone", () => {
  assert.deepEqual(getScoreRank(25), {
    label: "Platinum",
    minimumScore: 25,
    tone: "platinum",
  });
  assert.deepEqual(getScoreRank(30), {
    label: "Emerald",
    minimumScore: 30,
    tone: "emerald",
  });
  assert.deepEqual(getScoreRank(35), {
    label: "Diamond",
    minimumScore: 35,
    tone: "diamond",
  });
});
