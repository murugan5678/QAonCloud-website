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
                  title="Your QA is slowing you down "
                  highlight="more than you think"
                  description="You built a CI/CD pipeline to help you ship faster. But releases kept piling up for testing. Your engineers had to write test cases when they should’ve been building code. Bugs slipped through. "
                  subDescription="Somehow, somewhere along the way, QA became a bottleneck. Now you’re struggling to choose between shipping fast and shipping safe, while all your competitors are stepping it up. "
                  marginBottom={2}
                />
            <ContentWrapper>
                <SmoothReleases
                  title="BFSI testing services that are a "
                  highlight="cut above the rest"
                  features={[
                    {
                      title: "QA is the bottleneck",
                      description:
                        "Your engineers are doing their best, turning in code on time. But releases wait days for testing. QA always seems to fall behind and eventually something slips through.",
                      icon: "star",
                    },
                    {
                      title: "Your engineers are on QA-duty",
                      description:
                        "Let’s face it, you developers didn't sign up to write test scripts. But they spend 20-30% of their time testing, when they should be building features.",
                      icon: "user",
                    },
                    {
                      title: "Your customers find bugs before you do",
                      description:
                        "Flaky tests, missed edge cases, or bugs in production, lead to an overall loss of trust. Sounds like a nightmare, doesn’t it? ",
                      icon: "circle",
                    },
                    // {
                    //   title: "Value for Money",
                    //   description:
                    //     "Unmatched, high-level QA expertise at a fraction of the cost, ensuring accuracy, speed, and reliability",
                    //   icon: "arrow",
                    // },
                    // {
                    //   title: "Tailored to your needs.",
                    //   description:
                    //     "Ensuring products are intuitive, user-friendly, with user-oriented functionalities, reducing churn.",
                    //   icon: "arrow",
                    // },
                  ]}
                />
                <QualityTestingServices title="AI-accelerated QA that "
                  highlight="keeps up with your cadence."
                  services={[
                    {
                      title: "QA that keeps up with you",
                      description:
                        "Want to ship daily? We’ll make it happen! We plug into your CI/CD pipeline to facilitate daily deployments. No more releases waiting on testing.",
                      learnMoreHref: "/services/functional-testing",
                      icon: "code",
                    },
                    {
                      title: "Free your engineers to build",
                      description:
                        "Free up 20-30% of your developers’ time so they can focus on what they do best - writing code. We’ll handle all the testing.",
                      learnMoreHref: "/services/functional-testing",
                      icon: "bolt",
                    },
                    {
                      title: "Catch bugs before customers do",
                      description:
                        "You won’t be finding new bugs in support tickets. Because our tests actually work. Our coverage catches real issues, it doesn’t just pass. We’ll catch all the bugs before production. ",
                      learnMoreHref: "/services/functional-testing",
                      icon: "arrow",
                    },
                    // {
                    //   title: "Performance Testing",
                    //   description:
                    //     "Ensures your platform is fast, stable, and responsive, even during peak transaction volumes.",
                    //   learnMoreHref: "/services/functional-testing",
                    //   icon: "robot",
                    // },
                    // {
                    //   title: "Regulatory Compliance Testing",
                    //   description:
                    //     "Keeps an eye on compliance! Helps you meet regulatory demands with confidence, with no delays. ",
                    //   learnMoreHref: "/services/functional-testing",
                    //   icon: "shield",
                    // },
                    // {
                    //   title: "Security Testing",
                    //   description:
                    //     "Safeguards transactions and sensitive data, keeping things secure and trustworthy.",
                    //   learnMoreHref: "/services/functional-testing",
                    //   icon: "mobile",
                    // },
                    // {
                    //   title: "Regression Testing",
                    //   description:
                    //     "Safeguards what already works, ensuring new updates don’t break critical financial flows.",
                    //   learnMoreHref: "/services/functional-testing",
                    //   icon: "mobile",
                    // },
                  ]} 
                />
                <Partnerships
                imageSrc="/Partnership.png" // your screenshot
                companyName="Indihood"
                companyLogo="/indihood_logo.png"
                highlightPercent="60%"
                description="We went from weekly releases to daily deploys. QAonCloud's team ramped on our product in two weeks and now they catch things our engineers never would have tested for."
              />
              <QABenefits />
            </ContentWrapper>
            
              <FAQs
                title="Questions Saas teams "
                highlight="frequently ask"
                faqs={[
                  {
                    question: "How fast can you ramp up on our product?",
                    answer:
                      "Since we embed industry experts, most of our QA teams are productive within 2-3 weeks. We’ll start with your most critical user flows and take it from there. You'll see your releases speed up within a month.",
                  },
                  {
                    question: "Do you integrate with our CI/CD pipeline?",
                    answer:
                      "Yes, we do. We work with GitHub Actions, GitLab CI, CircleCI, Jenkins, and most major CI tools. Tests run automatically on every push, PR, or deployment.",
                  },
                  {
                    question: "Can you test across browsers and devices?",
                    answer:
                      "Yes, we can! Our AI runs tests parallely across Chrome, Firefox, Safari, Edge, and mobile viewports. You get complete cross-browser coverage, and no time penalty.",
                  },
                  {
                    question: "What if we already have some tests written?",
                    answer:
                      "That’s not a problem at all! We’ll gladly work with what you have. If your existing tests are solid, we’ll build on them. If they could use some work, we’ll help you clean them up and fine-tune them. ",
                  },
                  {
                    question: 'What does "40% faster" actually mean?',
                    answer:
                      "Simply put, what usually 12 months with traditional QA approaches takes just 7 months with us. We save time by letting our AI handle the repetitive work (test generation, execution, data creation) while our engineers focus on strategic judgment calls.",
                  },
                  {
                    question: 'How does pricing work?',
                    answer:
                      "We typically work on monthly engagements starting with a focused pilot engagement. Pricing depends entirely on the scope (number of surfaces, test types, release frequency) of work involved. ",
                  },
                ]}
              />
              
    
              <ContentWrapper>
                
                <Banner
                  title="Ready to put your app "
                  highlight="to the test?"
                  description="Our Saas QA experts are always up for a quick chat. No pitch deck, no six-meeting sales cycle. Just an honest conversation about how we can speed up your releases and ensure quality."
                  
                  ctaLabel="TALK TO A SAAS QA EXPERT"
                  ctaHref="/how-we-work"
                />
                
              </ContentWrapper>
          </div>
      </div>
        
    </div>
    
  )
}
