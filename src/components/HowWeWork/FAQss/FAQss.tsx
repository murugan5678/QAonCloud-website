"use client";

import React, { useState } from 'react';
import styles from './FAQss.module.css';
import SectionHeader from '@/components/Common/SectionHeader/SectionHeader';    
interface FAQItem {
  question: string;
  answer: string;
}
const FAQss: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How fast can you ramp up on our product?",
      answer: "Since we embed industry experts, most of our QA teams are productive within 2-3 weeks. We'll start with your most critical user flows and take it from there. You'll see your releases speed up within a month."
    },
    {
      question: "Do you integrate with our CI/CD pipeline?",
      answer: "Yes, we do. We work with GitHub Actions, GitLab CI, CircleCI, Jenkins, and most major CI tools. Tests run automatically on every push, PR, or deployment."
    },
    {
      question: "Can you test across browsers and devices?",
      answer: "Yes, we can! Our AI runs tests parallely across Chrome, Firefox, Safari, Edge, and mobile viewports. You get complete cross-browser coverage, and no time penalty."
    },
    {
      question: "What if we already have some tests written?",
      answer: "That's not a problem at all! We'll gladly work with what you have. If your existing tests are solid, we'll build on them. If they could use some work, we'll help you clean them up and fine-tune them."
    },
    {
      question: "What does '40% faster' actually mean?",
      answer: "Simply put, what usually takes 12 months with traditional QA approaches takes just 7 months with us. We save time by letting our AI handle the repetitive work (test generation, execution, data creation) while our engineers focus on strategic judgment calls."
    },
    {
      question: "How does pricing work?",
      answer: "We typically work on monthly engagements starting with a focused pilot engagement. Pricing depends entirely on the scope (number of surfaces, test types, release frequency) of work involved."
    }
  ];

  const toggleFAQ = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <SectionHeader title="Questions we're frequently asked." highlight="(FAQs)" />
        {/* <div className={styles.header}>
          <h1>
            Questions we're frequently <span className={styles.highlight}>asked</span>
            <span className={styles.parentheses}>(FAQs)</span>
          </h1>
        </div> */}

        <div className={styles.faqsList}>
          {faqs.map((faq, index) => (
            <div key={index} className={styles.faqItem}>
              <button
                className={styles.question}
                onClick={() => toggleFAQ(index)}
                aria-expanded={activeIndex === index}
              >
                <h3>{faq.question}</h3>
                <span className={`${styles.icon} ${activeIndex === index ? styles.active : ''}`}>
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M19 9L12 16L5 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
              <div className={`${styles.answer} ${activeIndex === index ? styles.answerOpen : ''}`}>
                <p>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQss;
