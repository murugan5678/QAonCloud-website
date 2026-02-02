import React from 'react';
import styles from './SigningUpFor.module.css';

const SigningUpFor = () => {
  const milestones = [
    {
      title: "By Day 7",
      achievements: [
        "Kickoff call completed",
        "Access to staging environment",
        "Initial test strategy defined",
        "First test cases generated"
      ]
    },
    {
      title: "By Day 14",
      achievements: [
        "Test cycles running on staging",
        "First bug reports delivered",
        "Coverage baseline established",
        "Team rhythm established"
      ]
    },
    {
      title: "By Day 30",
      achievements: [
        "Full integration with workflow",
        "Comprehensive coverage achieved",
        "Release confidence improved",
        "ROI metrics available"
      ]
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>
            What you're signing <span className={styles.highlight}>up for</span>
          </h1>
          <p className={styles.subtitle}>
            Clear milestones. No surprises.
          </p>
        </div>

        <div className={styles.milestonesGrid}>
          {milestones.map((milestone, index) => (
            <div key={index} className={styles.milestoneCard}>
              <h3 className={styles.milestoneTitle}>{milestone.title}</h3>
              <ul className={styles.achievementsList}>
                {milestone.achievements.map((achievement, achievementIndex) => (
                  <li key={achievementIndex} className={styles.achievementItem}>
                    <span className={styles.checkIcon}>✓</span>
                    {achievement}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className={styles.noteCard}>
          <div className={styles.noteIcon}>⭐</div>
          <p className={styles.noteText}>
            We typically start with a focused engagement so you can validate fit before committing long-term. If it's not working, we'll tell you and you can walk away.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SigningUpFor;
