import { ContentWrapper } from '@/components/Common/ContentWrapper/ContentWraper'
import ClientSlider from '@/components/HomePage/Slider/Slider'

import React from 'react'
import classes from "./page.module.css"
import QualityAssurance from '@/components/Industries/QualityAssurance/QualityAssurance'
import { SmoothReleases } from '@/components/Industries/SmoothReleases/SmoothReleases'
import QualityTestingServices from '@/components/Industries/QualityServices/QualityServices'
import FAQs from '@/components/Industries/FAQS/FAQs'
import { Banner } from '@/components/Common/Banner/Banner'
import ServicePageHeader from '@/components/Industries/Header/ServicePageHeader'
import Partnerships from '@/components/Industries/Partnership/Partnership'
import QABenefits from '@/components/Industries/Benefits/Benefits'


export default function page() {
  return (
    <div>
      <div className={classes.container}>
          <div className={classes.pageContent}>
            <div className={classes.homeHeroBg}> 
              <ServicePageHeader />
            </div> 
            <ClientSlider />
            <QualityAssurance
                  title="In Fintech, mistakes can be"
                  highlight="costly"
                  description="Other industries are more forgiving when it comes to bugs. But not FinTech."
                  subDescription="Because in FinTech, a bug isn't just a mistake. It's a regulatory incident. A glaring headline. An act of non-compliance.  
                                  That’s why most FinTech teams are forced to choose between compliance and speed. "
                  marginBottom={2}
                />
            <ContentWrapper>
                <SmoothReleases
                  title="BFSI testing services that are a "
                  highlight="cut above the rest"
                  features={[
                    {
                      title: "Deep Fintech Domain Expertise",
                      description:
                        "Our experience, proficiency in best practices and technical sophistication speaks for itself. ",
                      icon: "star",
                    },
                    {
                      title: "Accelerated time-to-market",
                      description:
                        "We’ll keep it simple, quick, and hassle-free, working alongside your development teams.",
                      icon: "user",
                    },
                    {
                      title: "No Compromises on Quality",
                      description:
                        "Robust tools, dynamic work model, and modern software testing approach",
                      icon: "circle",
                    },
                    {
                      title: "Value for Money",
                      description:
                        "Unmatched, high-level QA expertise at a fraction of the cost, ensuring accuracy, speed, and reliability",
                      icon: "arrow",
                    },
                    {
                      title: "Tailored to your needs.",
                      description:
                        "Ensuring products are intuitive, user-friendly, with user-oriented functionalities, reducing churn.",
                      icon: "arrow",
                    },
                  ]}
                />
                <QualityTestingServices title="Services  "
                  highlight="We Offer"
                  services={[
                    {
                      title: "360° App Testing",
                      description:
                        "Talk about total coverage! Keeps every feature, integration, and transaction running smoothly.",
                      learnMoreHref: "/services/functional-testing",
                      icon: "code",
                    },
                    {
                      title: "Functional Testing",
                      description:
                        "Ensures every payment, login, and feature works as expected, every single time.",
                      learnMoreHref: "/services/functional-testing",
                      icon: "bolt",
                    },
                    {
                      title: "Data Integrity Testing",
                      description:
                        "Guarantees financial data stays accurate, consistent, and untampered, from start to finish.",
                      learnMoreHref: "/services/functional-testing",
                      icon: "arrow",
                    },
                    {
                      title: "Performance Testing",
                      description:
                        "Ensures your platform is fast, stable, and responsive, even during peak transaction volumes.",
                      learnMoreHref: "/services/functional-testing",
                      icon: "robot",
                    },
                    {
                      title: "Regulatory Compliance Testing",
                      description:
                        "Keeps an eye on compliance! Helps you meet regulatory demands with confidence, with no delays. ",
                      learnMoreHref: "/services/functional-testing",
                      icon: "shield",
                    },
                    {
                      title: "Security Testing",
                      description:
                        "Safeguards transactions and sensitive data, keeping things secure and trustworthy.",
                      learnMoreHref: "/services/functional-testing",
                      icon: "mobile",
                    },
                    {
                      title: "Regression Testing",
                      description:
                        "Safeguards what already works, ensuring new updates don’t break critical financial flows.",
                      learnMoreHref: "/services/functional-testing",
                      icon: "mobile",
                    },
                  ]} 
                />
                <Partnerships
                imageSrc="/Partnership.png" // your screenshot
                companyName="Indihood"
                companyLogo="/indihood_logo.png"
                highlightPercent="60%"
                description="indihood’s loan management mobile and web app turned out to be better than they’d imagined! Faster, more user-friendly, better performing, and bug-free."
              />
              <QABenefits />
            </ContentWrapper>
            
              <FAQs
                title="Questions FinTech teams ask"
                highlight="us"
                faqs={[
                  {
                    question: "How fast can you get started?",
                    answer:
                      "Most teams are up and running within 2-3 weeks. We start with a discovery call to understand your product and compliance requirements, then move into a focused pilot engagement.",
                  },
                  {
                    question: "Do you understand [specific regulation]?",
                    answer:
                      "We've worked with PCI-DSS, SOC 2 Type II, PSD2, state money transmitter requirements, GDPR, and more. If there's a regulation we haven't encountered, we'll tell you upfront, and we learn about it fast.",
                  },
                  {
                    question: "What if we already have some QA in place?",
                    answer:
                      "We don’t expect you to change your processes, we integrate into your way of work. Most clients start by handing us their biggest pain point (compliance testing, regression suites, or a specific product surface) and expand from there.",
                  },
                  {
                    question: "How do you handle sensitive test data?",
                    answer:
                      "We use synthetic test data generation, so real customer data is never exposed. This keeps your compliance with data privacy regulations in check, removing a major security risk from your testing process.",
                  },
                  {
                    question: 'What does "40% faster" actually mean?',
                    answer:
                      "If traditional QA takes 12 months, we’ll do it in 7. We save a lot of time with our AI handling repetitive work (test generation, execution, data creation), letting our engineers focus on judgment calls and edge cases.",
                  },
                  {
                    question: 'How does pricing work?',
                    answer:
                      "We typically work on monthly engagements starting with a focused pilot engagement. Pricing depends entirely on the scope of work and complexity involved.",
                  },
                ]}
              />
              
    
              <ContentWrapper>
                
                <Banner
                  title="Ship faster with"
                  highlight="no compliance anxiety"
                  description="Sit down with our FinTech QA expert to discuss your QA needs. No presentations, no six-meeting sales cycle. Just an honest conversation about where QA is slowing you down to see how we can help."
                  
                  ctaLabel="TALK TO A FINTECH QA EXPERT"
                  ctaHref="/how-we-work"
                />
                
              </ContentWrapper>
          </div>
      </div>
        
    </div>
    
  )
}
