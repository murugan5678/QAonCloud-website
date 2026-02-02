import React from 'react';
import styles from './AboutUsApproach.module.css';

const AboutUsApproach = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>
            Our approach <span className={styles.highlight}>is simple</span>
          </h1>
          <p className={styles.description}>
            We combine AI-powered testing automation with senior QA engineers who understand your domain. This hybrid approach helps you ship **40% faster** while maintaining the highest quality standards. Our AI handles repetitive tasks and generates comprehensive test cases, while our engineers provide strategic oversight, handle complex scenarios, and ensure nothing falls through the cracks.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsApproach;
