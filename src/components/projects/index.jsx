import React, { useMemo } from "react";
import styles from "./index.module.css";
import { Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import Post1 from "../../assets/images/post1.png";
import Post2 from "../../assets/images/post2.png";
import Post3 from "../../assets/images/post3.png";
import Post4 from "../../assets/images/post4.png";
import Post5 from "../../assets/images/post5.png";
import Post6 from "../../assets/images/post6.png";
import Post7 from "../../assets/images/post7.png";
import Post8 from "../../assets/images/post8.png";
import Post9 from "../../assets/images/post9.png";
import Post10 from "../../assets/images/post10.png";
import Post11 from "../../assets/images/post11.png";
import Post12 from "../../assets/images/post12.png";
import Post13 from "../../assets/images/post13.png";
import Post14 from "../../assets/images/post14.png";
import Post15 from "../../assets/images/post15.png";
import Post16 from "../../assets/images/post16.png";
import Post17 from "../../assets/images/post17.png";
import Post18 from "../../assets/images/post18.png";
import Post19 from "../../assets/images/post19.png";
import Post20 from "../../assets/images/post20.png";
import Post21 from "../../assets/images/post21.png";
import Post22 from "../../assets/images/post22.png";
import Post23 from "../../assets/images/post23.png";
import Post24 from "../../assets/images/post24.png";
import ProjectOne1 from "../../assets/images/saytaz.jpg";
import ProjectOne2 from "../../assets/images/azerholiday.jpg";
import ProjectOne3 from "../../assets/images/brown.png";
import ProjectOne4 from "../../assets/images/onlineshop.png";
import ProjectOne5 from "../../assets/images/perfume.png";
import ProjectOne6 from "../../assets/images/binary.png";
import ProjectOne7 from "../../assets/images/interview.png";
import ProjectOne8 from "../../assets/images/shoppy.png";
import ProjectOne9 from "../../assets/images/rashadmirza.png";
import ProjectOne10 from "../../assets/images/ty.png";
import ProjectOne11 from "../../assets/images/company.png";
import ProjectOne12 from "../../assets/images/luxe.png";
import ProjectOne13 from "../../assets/images/haya.png";
import ProjectOne14 from "../../assets/images/azers.png";
import ProjectOne15 from "../../assets/images/fweb.png";
import ProjectOne16 from "../../assets/images/image 731.png";
import ProjectOne17 from "../../assets/images/Minimalist Booking Freelance Design Tablet Mockup Instagram Post (1) 1.png";
import ProjectOne18 from "../../assets/images/Neutral Phone Mockup Aesthetic New Post Instagram Story 1.png";
import ProjectOne19 from "../../assets/images/Frame 24 (1) 1.png";
import ProjectOne20 from "../../assets/images/White and Beige Minimalist Aesthetic New in my Blog Instagram Post 1.png";
import ProjectOne21 from "../../assets/images/Group 3 1 1.png";
import ProjectOne22 from "../../assets/images/image 747 1.png";
import ProjectOne23 from "../../assets/images/Brown Green Terracotta Minimal Social Media Mockup Instagram Post 1.png";
import ProjectOne24 from "../../assets/images/ekol.png";
import ProjectOne25 from "../../assets/images/teze9.png";
import ProjectOne26 from "../../assets/images/teze1.png";
import ProjectOne27 from "../../assets/images/teze2.png";
import ProjectOne28 from "../../assets/images/teze3.png";
import ProjectOne29 from "../../assets/images/teze4.png";
import ProjectOne30 from "../../assets/images/teze5.png";
import ProjectOne31 from "../../assets/images/teze6.png";
import ProjectOne32 from "../../assets/images/teze7.png";
import ProjectOne33 from "../../assets/images/teze8.png";


import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeUp, staggerContainer, viewportOnce } from "../../animations";

const CARD_SPRING = { type: "spring", stiffness: 260, damping: 22 };

const cardVariants = {
  rest: { y: 0, boxShadow: "0px 0px 0px rgba(0,0,0,0)", transition: CARD_SPRING },
  hovered: {
    y: -12,
    boxShadow: "0px 18px 40px rgba(0,0,0,0.14)",
    transition: CARD_SPRING,
  },
};

const cardImageVariants = {
  rest: { scale: 1, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
  hovered: { scale: 1.07, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] } },
};

const Projects = () => {
  const data = useMemo(() => [
  {
    id: 25,
    image: ProjectOne25,
    link: "https://www.behance.net/fatimabashirli",
    title: "PHOTO SHOOT ORGANIZATION",
    country: "Creative Director",
  },
  {
    id: 26,
    image: ProjectOne26,
    link: "https://www.behance.net/fatimabashirli",
    title: "EKOL.AZ",
    country: "Designer and SMM",
  },
  {
    id: 27,
    image: ProjectOne27,
    link: "https://www.behance.net/fatimabashirli",
    title: "ASOİU / UFAZ",
    country: "Designer",
  },
  {
    id: 28,
    image: ProjectOne28,
    link: "https://www.behance.net/fatimabashirli",
    title: "AZƏRBAYCAN TİBB UNİVERSİTETİ",
    country: "Designer",
  },
  {
    id: 29,
    image: ProjectOne29,
    link: "https://www.behance.net/fatimabashirli",
    title: "AZƏRBAYCAN TİBB UNİVERSİTETİ",
    country: "Designer and SMM",
  },
  {
    id: 30,
    image: ProjectOne30,
    link: "https://www.behance.net/fatimabashirli",
    title: "ASOİU / UFAZ",
    country: "Designer",
  },
  {
    id: 31,
    image: ProjectOne31,
    link: "https://www.behance.net/fatimabashirli",
    title: "AZƏRBAYCAN TİBB UNİVERSİTETİ",
    country: "Designer and SMM",
  },
  {
    id: 32,
    image: ProjectOne32,
    link: "https://www.behance.net/fatimabashirli",
    title: "AZƏRBAYCAN TİBB UNİVERSİTETİ",
    country: "Designer and SMM",
  },
  {
    id: 33,
    image: ProjectOne33,
    link: "https://www.behance.net/fatimabashirli",
    title: "AZƏRBAYCAN TİBB UNİVERSİTETİ",
    country: "Designer and SMM",
  },
    {
    id: 1,
    image: ProjectOne1,
    title: "Ureb.com, Site.az, Sayt.az",
    link: "https://sayt.az/",
    country: "Web Designer & Graphic Designer",
  },
  {
    id: 2,
    image: ProjectOne2,
    title: "Azeholidays.com",
    link: "https://azeholidays.com/",
    country: "Web Designer",
  },
  {
    id: 3,
    image: ProjectOne3,
    title: "Fizioterapevt Yusif Zeynalov",
    link: "https://www.figma.com/design/DafjmZrAmgKu164rzryY8Q",
    country: "Web Designer",
  },
  {
    id: 4,
    image: ProjectOne4,
    title: "WhatShop Mobile App",
    link: "https://www.figma.com/design/DafjmZrAmgKu164rzryY8Q",
    country: "Mobile Designer",
  },
  {
    id: 5,
    image: ProjectOne5,
    title: "LAPARFUMEGALLERY.COM",
    link: "https://perfumenewwebsite.vercel.app/",
    country: "Web Designer",
  },
  {
    id: 6,
    image: ProjectOne6,
    title: "BINARYSCHOOL.AZ",
    link: "https://www.instagram.com/binaryschool.az",
    country: "Web Designer",
  },
  {
    id: 7,
    image: ProjectOne7,
    title: "INTERVIEWER.AZ",
    link: "https://www.figma.com/file/X49EfCJLGIOZzmnwWMyXFM",
    country: "Web & Graphic Designer",
  },
  {
    id: 8,
    image: ProjectOne8,
    title: "SHOPPY.AZ",
    link: "https://www.figma.com/file/oSO7tXZPhMUVg0GmrTHW3b",
    country: "Web & Graphic Designer",
  },

  {
    id: 10,
    image: ProjectOne10,
    title: "THANK YOU BUSINESS CARD",
    country: "Graphic Designer",
  },
  {
    id: 11,
    image: ProjectOne11,
    title: "COMPANY WEBSITE",
    country: "Web Designer",
  },
  {
    id: 12,
    image: ProjectOne12,
    title: "LUXE INSTAGRAM TEMPLATE",
    country: "Graphic Designer & SMM",
  },
  {
    id: 13,
    image: ProjectOne13,
    title: "HAYA COLLECTION BRAND BUSINESS CARD",
    country: "Graphic Designer",
  },
  {
    id: 14,
    image: ProjectOne14,
    title: "AZER ABDULLAYEV PHOTOGRAPHY",
    country: "Logo Design",
  },
  {
    id: 15,
    image: ProjectOne15,
    title: "FATIMA BASHIR WEBSITE",
    country: "UX/UI Designer",
  },
  {
    id: 16,
    image: ProjectOne16,
    title: "CODA AGENCY",
    country: "Designer",
  },
  {
    id: 17,
    image: ProjectOne17,
    title: "INSURANCE COMPANY TRUST WAVE",
    country: "UX/UI Designer",
  },
  {
    id: 18,
    image: ProjectOne18,
    title: "COLORSTORM.AZ",
    country: "Designer",
  },
  {
    id: 19,
    image: ProjectOne19,
    title: "TRUSTLY.AZ",
    country: "Art Director & Designer",
  },
  {
    id: 20,
    image: ProjectOne20,
    title: "TAB.EDU.AZ",
    country: "Designer",
  },
  {
    id: 21,
    image: ProjectOne21,
    title: "ASADZADE.SANAN",
    country: "Logo Designer",
  },
  {
    id: 22,
    image: ProjectOne22,
    title: "CODE INNOVATOR DEVELOPMENT",
    country: "Designer",
  },
  {
    id: 23,
    image: ProjectOne23,
    title: "ASADZADE.SANAN",
    country: "Designer",
  }, 
  {
    id: 9,
    image: ProjectOne9,
    title: "RASHADMIRZA.COM",
    link: "https://www.behance.net/fatimabashirli",
    country: "Web Designer",
  },
  // ===================== POSTS =====================
  {
    id: 101,
    image: Post1,
    title: "FORMCOND LLC",
    link: "https://www.behance.net/fatimabashirli",
    country: "Graphic Designer",
  },
  {
    id: 102,
    image: Post2,
    title: "ALISON LOGISTICS",
    link: "https://www.behance.net/fatimabashirli",
    country: "Graphic Designer",
  },
  {
    id: 103,
    image: Post3,
    title: "MOON GROUP",
    link: "https://www.behance.net/fatimabashirli",
    country: "Graphic Designer",
  },
  {
    id: 104,
    image: Post4,
    title: "GANJLIK GARDEN RESIDENCE",
    link: "https://www.behance.net/fatimabashirli",
    country: "Graphic Designer",
  },
  {
    id: 105,
    image: Post5,
    title: "NEW YEAR POSTS",
    link: "https://www.behance.net/fatimabashirli",
    country: "Graphic Designer",
  },
  {
    id: 106,
    image: Post6,
    title: "FERRUM KAPITAL BANK",
    link: "https://www.behance.net/fatimabashirli",
    country: "Graphic Designer",
  },
  {
    id: 107,
    image: Post7,
    title: "ALISON TRAVEL",
    link: "https://www.behance.net/fatimabashirli",
    country: "Graphic Designer",
  },
  {
    id: 108,
    image: Post8,
    title: "WOWLAASH CERTIFICATE",
    link: "https://www.behance.net/fatimabashirli",
    country: "Graphic Designer",
  },
  {
    id: 109,
    image: Post9,
    title: "CASTROL AZERBAIJAN OFFICIAL",
    link: "https://www.behance.net/fatimabashirli",
    country: "Graphic Designer",
  },
  {
    id: 110,
    image: Post10,
    title: "CAMELA GIFT DESIGN",
    link: "https://www.behance.net/fatimabashirli",
    country: "Graphic Designer",
  },
  {
    id: 111,
    image: Post11,
    title: "FERRUM KAPITAL BANK",
    link: "https://www.behance.net/fatimabashirli",
    country: "Graphic Designer",
  },
  {
    id: 112,
    image: Post12,
    title: "ATLACADEMY",
    link: "https://www.behance.net/fatimabashirli",
    country: "Graphic Designer",
  },
  {
    id: 113,
    image: Post13,
    title: "HAYAA COLLECTION",
    link: "https://www.behance.net/fatimabashirli",
    country: "Art Director",
  },
  {
    id: 114,
    image: Post14,
    title: "LOGO DESIGN",
    link: "https://www.behance.net/fatimabashirli",
    country: "Graphic Designer",
  },
  {
    id: 115,
    image: Post15,
    title: "THE 9TH WAY AGENCY",
    link: "https://www.behance.net/fatimabashirli",
    country: "Graphic Designer",
  },
  {
    id: 116,
    image: Post16,
    title: "ATLACADEMY",
    link: "https://www.behance.net/fatimabashirli",
    country: "Graphic Designer",
  },
  {
    id: 117,
    image: Post17,
    title: "BLOG",
    link: "https://www.behance.net/fatimabashirli",
    country: "SMM & Designer",
  },
  {
    id: 118,
    image: Post18,
    title: "LINE AGENCY",
    link: "https://www.behance.net/fatimabashirli",
    country: "Graphic Designer",
  },
  {
    id: 119,
    image: Post19,
    title: "ALISON LOGISTICS",
    link: "https://www.behance.net/fatimabashirli",
    country: "Graphic Designer",
  },
  {
    id: 120,
    image: Post20,
    title: "TRUSTLY ACADEMY",
    link: "https://www.behance.net/fatimabashirli",
    country: "Web Designer",
  },
  {
    id: 121,
    image: Post21,
    title: "DEUTSCHE AKADEMIE BAKU",
    link: "https://www.behance.net/fatimabashirli",
    country: "Graphic Designer",
  },
  {
    id: 122,
    image: Post22,
    title: "DECEMBER CONTENT",
    link: "https://www.behance.net/fatimabashirli",
    country: "Art Director & Designer",
  },
  {
    id: 123,
    image: Post23,
    title: "HAYAA COLLECTION",
    link: "https://www.behance.net/fatimabashirli",
    country: "Art Director",
  },
  {
    id: 124,
    image: Post24,
    title: "CAFE & PATISSERIE",
    link: "https://www.behance.net/fatimabashirli",
    country: "Graphic Designer",
  }, {
    id: 24,
    image: ProjectOne24,
    title: "EKOL.AZ",
    country: "Designer and SMM",
  },
  


  ], []);
  return (
    <div className={styles.background}>
      <div className={styles.control}>
        <motion.div
          className={styles.projectTeil}
          variants={staggerContainer(0.14)}
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
        >
          <motion.h1 variants={fadeUp}>Project Schedule</motion.h1>
          <motion.h2 variants={fadeUp}>
            My working experience and career journey{" "}
            {/* The arrow keeps nudging to hint the slider moves sideways. */}
            <motion.span
              style={{ display: "inline-block" }}
              animate={{ x: [0, 8, 0] }}
              transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
            >
              {"->"}
            </motion.span>
          </motion.h2>
        </motion.div>
        <Swiper
          modules={[Autoplay]}
          className={styles.price}
          spaceBetween={50}
          slidesPerView={2.5}
          autoplay={{
            delay: 2000,
            disableOnInteraction: false,
          }}
          breakpoints={{
            0: {
              spaceBetween: 24,
              slidesPerView: 1,
            },
            768: {
              spaceBetween: 24,
              slidesPerView: 2,
            },
            992: {
              spaceBetween: 50,
              slidesPerView: 2.5,
            },
          }}
        >
          {data.map((item) => (
            <SwiperSlide key={item.id}>
              <div className={styles.controlSwiper}>
                {/* Naming the hover state on the card lets the image zoom and
                    the card lift together as one gesture. */}
                <motion.div
                  className={styles.border}
                  initial="rest"
                  animate="rest"
                  whileHover="hovered"
                  variants={cardVariants}
                >
                  <Link target="_blank" to={item.link}>
                    <motion.img
                      src={item.image}
                      alt=""
                      variants={cardImageVariants}
                    />
                    <h2>{item.title}</h2>
                    <h3>{item.country}</h3>
                  </Link>
                </motion.div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
