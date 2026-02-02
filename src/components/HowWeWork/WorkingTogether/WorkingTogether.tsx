import React from 'react';
import styles from './WorkingTogether.module.css';

const WorkingTogether = () => {
  const aiHandles = [
    "Test case generation from your product",
    "Repetitive execution at scale",
    "Synthetic test data creation",
    "Parallel cloud execution",
    "Regression suite maintenance"
  ];

  const engineersHandle = [
    "Test strategy and prioritization",
    "Edge cases and exploratory testing",
    "Domain-specific judgment calls",
    "\"Should we ship this?\" decisions",
    "Your Slack messages at 2am"
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>
            Two systems working <span className={styles.highlight}>together</span>
          </h1>
          <p className={styles.subtitle}>
            Traditional QA is slow because humans handle repetitive tasks. Our AI handles the repetitive work, while our engineers focus on what matters.
          </p>
        </div>
        
        <div className={styles.cardsContainer}>
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>What AI Handles</h2>
            <ul className={styles.list}>
              {aiHandles.map((item, index) => (
                <li key={index} className={styles.listItem}>
                  <span className={styles.bullet}>•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
          
          <div className={styles.card}>
            <h2 className={styles.cardTitle}>What Engineers Handle</h2>
            <ul className={styles.list}>
              {engineersHandle.map((item, index) => (
                <li key={index} className={styles.listItem}>
                  <span className={styles.bullet}>•</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkingTogether;
