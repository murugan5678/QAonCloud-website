import React from 'react';
import styles from './AboutUsOutside.module.css';

const AboutUsOutside = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>
            We don't look in <span className={styles.highlight}>from the outside</span>
          </h1>
          <p className={styles.description}>
            We become part of your team. Our engineers embed themselves in your development process, understand your product vision, and take ownership of quality outcomes. We don't just follow test cases - we collaborate with your developers, participate in planning sessions, and proactively identify potential issues before they become problems. This deep integration allows us to provide context-aware testing that generic QA services simply can't match.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsOutside;
