"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import styles from "./TestimonialSlider.module.css";

const testimonials = [
// {
//     text: "Throughout the project, they demonstrated professionalism, expertise, and effective communication from inquiry to closure. We rate the quality of their work 9 out of 10. The testing team showcased excellent technical skills and attention to detail, achieving thorough testing according to the plan. We appreciate the comprehensive project closure report. Overall, we highly recommend QAonCloud as a software testing company.",
//     name: "Kavitha Sivashankaran",
//     role: " Quality and Regulatory Affairs , G3 MEDICAL SYSTEMS PVT LTD",
//     img: "/59-Kavitha Sivashankaran - G3 -.jpeg", // replace with your image path
//   },
  {
    text: "I like how proactive the testing team is in trying to find issues… I think that’s something we appreciate a lot, not just doing the job we ask for but going above and beyond.",
    name: "Robert Johnson",
    role: " Principal Software Engineer, AT&T Cybersecurity",
    img: "/Gautam Chakravarthy.jpg",
  },
  {
    text: "QAonCloud more than exceeded our expectations! They’ve freed up a lot of time that we would previously spend trying to find the issues with our product, to spend it on actually resolving the issues that have been found.",
    name: "Richard Crosby",
    role: "Head of Engineering, Notabene",
    img: "Donald Le.jpg",
  },
  {
    text: "We’ve seen huge improvements in the stability of our app, and our developers can focus on their work, then work together with the QA team to fix and deploy a stable app.",
    name: "Quentin Mussche",
    role: "Head of Technology, Prompto",
    img: "Toby Hunt - Connectworxs.jpg", // replace with your image path
  },
  {
    text: "The QAonCloud team was pretty independent, you can rely on them to do their work, and their communication, when needed, was pretty smooth.",
    name: "Miguel Romero",
    role: "Co-Founder and CTO, Netzo",
    img: "35-greg.jpg",
  },
  {
    text: "We can fully rely on the testing results… we know the testing is done thoroughly and reliably… And when we tell the QAonCloud team to test something, our developers can focus on something else…",
    name: "Alex Lipuntsov",
    role: "Project Manager, IQ Hive",
    img: "Shalini Gupta.jpg",
  },
  {
    text: "QAonCIoud has helped us bring a higher level of quality to our web properties. Their team is highly capable and skilled, and bring a level of proficiency to the table that allows them to be immediately productive.",
    name: "Hasnain Baxamoosa",
    role: "Sr. Product Manager for Web Technologies, AlienVault",
    img: "/Hasnain Baxamoosa.jpg",
  },
    {
    text: "Thank you for all the time you have taken off our hands to test our growing product and do it well. We appreciate all the attention to detail and promptness of response.",
    name: "Pratyush Singh",
    role: "Co-founder, Venzi",
    img: "/pratyush singh.jpg",
  },
  {
    text: "QAonCloud team members are flexible and adaptive. The QA testers are collaborative and function effectively with the available data, and can easily adapt to the requirements as and when needed. The team manager maintains high efficiency and productivity among the teams while pushing them to be autonomous and self-sufficient.",
    name: "Ishansh Singh",
    role: "Product Specialist, Avanti",
    img: "/Ishansh - Avanti.jpg",
  },
   {
    text: "QAonCIoud has constantly impressed us with quick turnarounds and detailed reports on testing. In addition, they have accommodated our requests for quick tests and sanity tests within a few hours.",
    name: "Leya Sathyan",
    role: "Program Manager, Indihood",
    img: "/leya - indihood.jpg",
  },
    {
    text: "QAonCloud is a great addition to our team, helping us out with testing and maintaining the quality of our product. They are very flexible and easily adapted to our processes and tools. They are very rigorous during the testing process, pay attention to detail, and always ask questions of our development team if something is unclear.",
    name: "Daan Depaepe",
    role: "Chief Technology Officer, Prompto",
    img: "/Daan Depaep.jpg",
  },

];

export default function TestimonialSlider() {
  return (
    <section className={styles.section}>
      <div className={styles.sliderWrap}>
        <Swiper
          modules={[Pagination]}
          pagination={{
            clickable: true,
            dynamicBullets: true,
          }}
          loop={false}
          className={styles.swiper}
          spaceBetween={16}
          slidesPerView="auto"
          centeredSlides={false}
          breakpoints={{
            320: {
              slidesPerView: 1.1,
              spaceBetween: 16,
              centeredSlides: true,
            },
            480: {
              slidesPerView: 1.3,
              spaceBetween: 16,
              centeredSlides: true,
            },
            640: {
              slidesPerView: 1.8,
              spaceBetween: 20,
              centeredSlides: false,
            },
            768: {
              slidesPerView: 2.2,
              spaceBetween: 20,
              centeredSlides: false,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
              centeredSlides: false,
            },
            1280: {
              slidesPerView: 3.5,
              spaceBetween: 24,
              centeredSlides: false,
            },
          }}
          onSwiper={(swiper) => {
            // Update slides on window resize
            const handleResize = () => {
              swiper.update();
            };
            window.addEventListener('resize', handleResize);
            return () => {
              window.removeEventListener('resize', handleResize);
            };
          }}
        >
          {testimonials.map((item, i) => (
            <SwiperSlide key={i} className={styles.slide}>
              <div className={styles.card}>
                <h3 className={styles.quote}>{item.text}</h3>
                <div className={styles.footer}>
                  <img
                    src={item.img}
                    alt={item.name}
                    className={styles.avatar}
                  />
                  <div>
                    <div className={styles.name}>{item.name}</div>
                    <div className={styles.role}>{item.role}</div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}