import React from 'react';
import styles from './Workflow.module.css';

const Workflow = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>
            We plug into <span className={styles.highlight}>your workflow</span>
          </h1>
          <p className={styles.subtitle}>
            You don't change how you work. We adapt to you.
          </p>
        </div>

        <div className={styles.sectionsGrid}>
          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Communication</h2>
            <div className={styles.logos}>
              <div className={styles.logo}>Slack</div>
              <div className={styles.logo}>Teams</div>
              <div className={styles.logo}>Discord</div>
            </div>
            <ul className={styles.list}>
              <li className={styles.listItem}>Daily standups in your channel</li>
              <li className={styles.listItem}>Bug reports where you work</li>
              <li className={styles.listItem}>Weekly summaries</li>
              <li className={styles.listItem}>Direct access to engineers</li>
            </ul>
          </div>

          <div className={styles.sectionCard}>
            <h2 className={styles.sectionTitle}>Tooling</h2>
            <div className={styles.logos}>
              <div className={styles.logo}>CircleCI</div>
              <div className={styles.logo}>GitHub</div>
            </div>
            <ul className={styles.list}>
              <li className={styles.listItem}>CI/CD integration</li>
              <li className={styles.listItem}>Test case management</li>
              <li className={styles.listItem}>Bug tracking sync</li>
              <li className={styles.listItem}>Automated reporting</li>
            </ul>
          </div>
        </div>

        <div className={styles.cadenceSection}>
          <h2 className={styles.sectionTitle}>Cadence</h2>
          <ul className={styles.list}>
            <li className={styles.listItem}>Sprints, releases, or continuous</li>
            <li className={styles.listItem}>We match your release schedule</li>
            <li className={styles.listItem}>24-hour turnaround for critical bugs</li>
            <li className={styles.listItem}>Flexible coverage based on risk</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Workflow;
