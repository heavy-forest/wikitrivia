import AppHead from "../components/app-head";
import PageShell from "../components/page-shell";
import * as styles from "../styles/privacy.css";

export default function PrivacyPage() {
  return (
    <>
      <AppHead title="Privacy | Wikitrivia" />
      <PageShell>
        <div className={styles.content}>
          <section className={styles.section}>
            <h1 className={styles.heading}>Privacy</h1>
            <p className={styles.text}>
              This deployment does no telemetry. Your score is between you and
              yourself only :)
            </p>
            <p className={styles.text}>
              Your browser still saves your progress and preferences locally.
              Clear this site’s browser data if you want a fresh start.
            </p>
            <p className={styles.text}>
              The{" "}
              <a href="https://wikitrivia.tomjwatson.com/privacy">
                original Wikitrivia deployment
              </a>{" "}
              does collect some analytics. See upstream page for details.
            </p>
          </section>
        </div>
      </PageShell>
    </>
  );
}
