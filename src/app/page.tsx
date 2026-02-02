import GreenCards from "@/components/HomePage/GreenCardsSection/GreenCards";
import Hero from "@/components/HomePage/HeroSection/Hero";

import ClientSlider from "@/components/HomePage/Slider/Slider";
import classes from './page.module.css'
import TestingServices from "@/components/HomePage/TestingServices/TestingServices";
import Testimonials from "@/components/HomePage/TestimonialsSection/Testimonials";
import QAoncloudGuarentee from "@/components/HomePage/QAoncloudGuarentee/QAoncloudGuarentee";
import { Banner } from "@/components/Common/Banner/Banner";
import Footer from "@/components/Common/Footer/Footer";
import { FeatureGrid } from "@/components/Common/FeatureGrid/FeatureGrid";
import PartnershipSection from "@/components/HomePage/PartnerTestingSection/PartnershipSection";
import CaseStudiesSection from "@/components/HomePage/CaseStudiesSection/CaseStudies";
import PartnerSection from "@/components/HomePage/PartnerSection/PartnerSection";
import { ContentWrapper } from "@/components/Common/ContentWrapper/ContentWraper";
import HowWedeliver from "@/components/HomePage/HowDoWeDeliver/Howwedeliver";


export default function Home() {
  return (
    <div>
       <div className={classes.container}>
          <div className={classes.pageContent}>
            <div className={classes.homeHeroBg}> 
              <ContentWrapper> 
                <Hero />
              </ContentWrapper>  
              
            </div>
            <div>

            </div>
              <ClientSlider />
              <ContentWrapper> 
                <GreenCards />
              </ContentWrapper> 
              
              <PartnerSection />
              <ContentWrapper> 
                <HowWedeliver />
                <TestingServices />
              </ContentWrapper>
              
              <Testimonials />
              
              
              <ContentWrapper> 
                <QAoncloudGuarentee />
                <PartnershipSection /> 
                <CaseStudiesSection />
                <Banner
                  title="Ready to ship "
                  highlight="faster? "
                  description="It takes just 10 mins to make your releases 40% faster. Talk to our team about your QA challenges and we’ll find the best solution for you. "
                  //subDescription="You've got a product to build and users to delight. Let us handle the testing so you can focus on what matters most  shipping great software that works."
                  ctaLabel="Talk to an expert"
                  ctaHref="/how-we-work"
                />
               </ContentWrapper>
              
                     
          </div>
      
    </div>
    {/* <FeatureGrid /> */}
      
    </div>
   
  )
  
}