import React from 'react';
import styles from './AboutUsBuiltBy.module.css';

const AboutUsBuiltBy = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>
            Built by <span className={styles.highlight}>Desicrew</span> in 2016
          </h1>
          <p className={styles.description}>
            QAonCloud was formed to solve an issue teams constantly face - frequent delays and buggy releases. We're a trusted software testing company, and we've worked with startups and global businesses across industries, combining fast, precise automation with reliable, skilled engineers with deep domain expertise.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsBuiltBy;
