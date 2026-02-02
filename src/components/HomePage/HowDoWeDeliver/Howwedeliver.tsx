import React from "react";
import SectionHeader from "@/components/Common/SectionHeader/SectionHeader";

import styles from "./Howwedeliver.module.css";
import ServiceCard from "@/components/Common/ServiceCard/ServiceCard";

function HowWedeliver() {
  return (
    <section className={styles.section}>
      <div className={styles.content}>
        <SectionHeader
          title="How do we deliver "
          highlight="2X faster? "
          description="Accelerated by AI, validated by human expertise, our QA testing services are reliable, thorough, and a lot faster than traditional QA. "
        />

        <div
          className={styles.cardsGrid}
        >
          <ServiceCard
            icon={<span style={{ color: "#3b82f6" }}>&lt;/&gt;</span>}
            title="AI handles the grunt work"
            description="Be it test case generation, scriptless automation, or synthetic test data, our AI handles the high-volume, repetitive work that slows teams down.

"
          />

          <ServiceCard
            icon={<span style={{ color: "#3b82f6" }}>⚡</span>}
            title="Our engineers make the calls"
            description="Nothing about your product or your users is generic. Our engineers learn your product, understand user behaviour, and make the strategic calls that algorithms can't."
          />

          <ServiceCard
            icon={<span style={{ color: "#3b82f6" }}>↗</span>}
            title="You ship faster, with confidence"
            description="Detailed, weekly reports. Bugs caught before production. Engineers doing what they do best instead of testing.We’re fast, thorough, and accurate. You can't call an algorithm at 2AM, but you can call us!"
          />
           {/* <ServiceCard
            icon={<span style={{ color: "#3b82f6" }}>🛡</span>}
            title="Security Testing"
            description="No room for vulnerabilities. Our penetration testing and security audits protect your users and your reputation."
          />

          <ServiceCard
            icon={<span style={{ color: "#3b82f6" }}>🤖</span>}
            title="AI / ML QA"
            description="Specialized testing for ML models and AI features. Validate accuracy, bias, and edge cases at scale."
          /> */}

         

          {/* <ServiceCard
            icon={<span style={{ color: "#3b82f6" }}>📱</span>}
            title="Mobile Testing"
            description="Cross-platform testing for iOS and Android to ensure a seamless mobile experience."
          /> */}
        </div>
      </div>
    </section>
  );
}

export default HowWedeliver;