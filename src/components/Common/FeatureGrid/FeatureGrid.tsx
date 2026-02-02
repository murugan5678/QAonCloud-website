import { FeatureCard } from "./FeatureCard";
import styles from "./FeatureGrid.module.css";


export const FeatureGrid = () => {
  return (
    <div className={styles.grid}>
      <FeatureCard
        title="Much faster than hiring in-house"
        description="Hiring, training and equipping an in-house QA team takes 6+ months. And when someone leaves, you’re left with coverage gaps and piling tasks.We’re productive in weeks, with zero recruiting costs or management overhead. With us, your QA coverage stays consistent, evolving with your product. "
        icon={<StarIcon />}
      />

      <FeatureCard
        title="More reliable than offshore vendors"
        description="Offshore QA is often synonymous with junior resources, constant supervision, and communication gaps. Quality remains questionable, and teams end up spending more time managing QA than ever. Our senior engineers become part of the team, learn your product, and own outcomes. No chaos, no hand-holding. Just quality you can trust."
        icon={<UserIcon />}
      />

      <FeatureCard
        title="More effective than AI tools alone"
        description="There’s a lot that AI testing tools can do. But they don’t understand users, edge cases, or what a bug signifies. You can’t call an algorithm when you’ve got a problem! There’s a lot that AI testing tools can do. But they don’t understand users, edge cases, or what a bug signifies. You can’t call an algorithm when you’ve got a problem!We combine AI-accelerated QA with senior engineers whose expertise offers context, optimizes prioritization, and ensures accountability. "
        icon={<CircleIcon />}
      />

      <FeatureCard
        title="More efficient than engineers on QA"
        description="Every minute your engineers spend on QA is time they aren’t doing what they were hired to do. This puts a pause on feature delivery, slowing releases.Let your engineers do what they do best. Leave the testing to our specialists.  "
        icon={<ArrowIcon />}
      />
    </div>
  );
};

/* Simple SVG icons */
const StarIcon = () => (
  <svg width="58" height="58" viewBox="0 0 24 24" fill="none" stroke="#3B82F6">
    <polygon points="12 2 15 9 22 9 17 14 19 21 12 17 5 21 7 14 2 9 9 9" />
  </svg>
);

const UserIcon = () => (
  <svg width="58" height="58" viewBox="0 0 24 24" fill="none" stroke="#3B82F6">
    <circle cx="12" cy="7" r="4" />
    <path d="M5 21c0-4 14-4 14 0" />
  </svg>
);

const CircleIcon = () => (
  <svg width="58" height="58" viewBox="0 0 24 24" fill="none" stroke="#3B82F6">
    <circle cx="12" cy="12" r="10" />
  </svg>
);

const ArrowIcon = () => (
  <svg width="58" height="58" viewBox="0 0 24 24" fill="none" stroke="#3B82F6">
    <path d="M5 12h14M13 5l6 7-6 7" />
  </svg>
);
