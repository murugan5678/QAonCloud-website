import React from 'react';
import styles from './HowWeDeliver.module.css';
import Image from 'next/image';
import Button from '@/components/Common/Button/Button';

const HowWeDeliver = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.content}>
          <div className={styles.textContent}>
            <h1>
              How we deliver QA <span className={styles.highlight}>40% faster</span>
            </h1>
            <p className={styles.description}>
              AI eliminates the slow parts. Engineers handle the hard parts. Here's how it actually works
            </p>
            <Button 
              href="/contact"
              className={styles.ctaButton}
            >
              Talk To Our Experts
            </Button>
          </div>
          <div className={styles.imageWrapper}>
            <Image
              src="/human-robot-hand.png"
              alt="Human hand reaching to robotic hand"
              width={500}
              height={400}
              className={styles.image}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeDeliver;
