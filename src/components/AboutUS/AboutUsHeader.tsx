import React from 'react';
import styles from './AboutUsHeader.module.css';
import Image from 'next/image';

const AboutUsHeader = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h1>
            We are QAonCloud
          </h1>
          <p className={styles.description}>
            QAonCloud is an AI-accelerated QA partner for teams looking to ship faster, without cutting corners.
          </p>
          <div className={styles.logoWrapper}>
            <Image
              src="/qaoncloud-logo.png"
              alt="QAonCloud Logo"
              width={120}
              height={120}
              className={styles.logo}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsHeader;
