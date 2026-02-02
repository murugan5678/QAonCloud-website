import React from 'react';
import styles from './Coverages.module.css';

const Coverages = () => {
  const phases = [
    {
      title: "Discovery & Setup",
      duration: "Week 1-2",
      whatHappens: [
        "Learning product, tech stack, release cadence",
        "Mapping user paths and risk areas",
        "Setting up CI/CD integrations",
        "Defining success metrics"
      ],
      timeCommitment: [
        "2-3 hours for kickoff",
        "Grant access to staging",
        "Introduce team members"
      ],
      whatYouGet: [
        "Tailored QA strategy",
        "Clear scope and coverage",
        "Named engineer(s)"
      ]
    },
    {
      title: "Ramp & Validate",
      duration: "Week 2-4",
      whatHappens: [
        "AI generates initial test cases",
        "Engineers refine and add domain-specific cases",
        "First test cycles run on staging",
        "Validation of approach"
      ],
      timeCommitment: [
        "Review initial findings",
        "Provide feedback on priorities"
      ],
      whatYouGet: [
        "First bug reports",
        "Validated test coverage baseline",
        "Proof of product understanding"
      ]
    },
    {
      title: "Integrated Delivery",
      duration: "Week 4+",
      whatHappens: [
        "QA runs in sync",
        "Automated reports",
        "Engineers available",
        "Continuous refinement"
      ],
      timeCommitment: [
        "Ship code"
      ],
      whatYouGet: [
        "Pre-release confidence",
        "Bugs caught before production",
        "QA that keeps pace"
      ]
    }
  ];

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <div className={styles.header}>
          <h1>
            From kickoff to coverage <span className={styles.highlight}>in weeks</span>
          </h1>
          <p className={styles.subtitle}>
            Here's what happens when you start working with us
          </p>
        </div>

        <div className={styles.phasesContainer}>
          {phases.map((phase, index) => (
            <div key={index} className={styles.phaseCard}>
              <div className={styles.phaseHeader}>
                <h3 className={styles.phaseTitle}>{phase.title}</h3>
                <span className={styles.duration}>{phase.duration}</span>
              </div>

              <div className={styles.phaseContent}>
                <div className={styles.section}>
                  <h4 className={styles.sectionTitle}>What happens</h4>
                  <ul className={styles.list}>
                    {phase.whatHappens.map((item, itemIndex) => (
                      <li key={itemIndex} className={styles.listItem}>
                        <span className={styles.bullet}>•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.section}>
                  <h4 className={styles.sectionTitle}>Your time commitment</h4>
                  <ul className={styles.list}>
                    {phase.timeCommitment.map((item, itemIndex) => (
                      <li key={itemIndex} className={styles.listItem}>
                        <span className={styles.bullet}>•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className={styles.section}>
                  <h4 className={styles.sectionTitle}>What you get</h4>
                  <ul className={styles.list}>
                    {phase.whatYouGet.map((item, itemIndex) => (
                      <li key={itemIndex} className={styles.listItem}>
                        <span className={styles.bullet}>•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Coverages;
