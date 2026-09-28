import { getScoreRank } from "../lib/score-rank";
import * as styles from "../styles/score.css";

interface Props {
  score: number;
  title: string;
}

export default function Score(props: Props) {
  const { score, title } = props;
  const rank = getScoreRank(score);

  return (
    <div className={styles.score} data-tone={rank.tone}>
      <span className={styles.segment}>{title}</span>
      <span aria-hidden="true" className={styles.separator}>
        /
      </span>
      <span className={styles.segment}>{score}</span>
      <span aria-hidden="true" className={styles.separator}>
        /
      </span>
      <span className={styles.segment}>{rank.label}</span>
    </div>
  );
}
