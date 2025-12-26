import React, { useMemo } from "react";
import styles from "./index.module.css";
import { Autoplay, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
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
import { Link } from "react-router-dom";
const Projects = () => {
  const data = useMemo(() => [
      {
      id: 9,
      image: `${ProjectOne9}`,
      title: "RASHADMIRZA.COM",
      link: "https://www.behance.net/fatimabashirli",
      country: "Web Designer",
    },
    {
      id: 1,
      link: "https://sayt.az/",
      image: `${ProjectOne1}`,
      title: "Ureb.com, Site.az, Sayt.az ",
      country: "Web Designer and Graphic Designer",
    },
    {
      id: 2,
      image: `${ProjectOne2}`,
      link: "https://azeholidays.com/",
      title: "Azeholidays.com",
      country: "Web Designer",
    },
    {
      id: 3,
      image: `${ProjectOne3}`,
      link: "https://www.figma.com/design/DafjmZrAmgKu164rzryY8Q/Shopping-mobile-App-WhatShop?node-id=0-1&node-type=canvas&t=JRTT02TRv64iyjLV-0",
      title: "FIZIOTERAPEVT YUSIF ZEYNALOV",
      country: "Web Designer",
    },
    {
      id: 14,
      image: `${ProjectOne14}`,
      title: "AZER ABDULLAYEV PHOTOGRAPHY",

      country: "Logo Design",
    },
    {
      id: 15,
      image: `${ProjectOne15}`,
      title: "FATIMA BASHIR WEBSITE",

      country: "UX/UI Designer",
    },
    {
      id: 16,
      image: `${ProjectOne16}`,
      title: "CODA AGENCY",

      country: "Designer",
    },
    {
      id: 17,
      image: `${ProjectOne17}`,
      title: "INSURANCE COMPANY TRUST WAVE",

      country: "UX/UI Designer",
    },
    {
      id: 18,
      image: `${ProjectOne18}`,
      title: "COLORSTORM.AZ",

      country: "Graphic Designer",
    },
    {
      id: 19,
      image: `${ProjectOne19}`,
      title: "TRUSTLY.AZ",

      country: "Art Director & Designer",
    },
    {
      id: 20,
      image: `${ProjectOne20}`,
      title: "TAB.EDU.AZ",

      country: "Graphic Designer",
    },
    {
      id: 21,
      image: `${ProjectOne21}`,
      title: "ASADZADE.SANAN",

      country: "Logo Designer",
    },
    {
      id: 22,
      image: `${ProjectOne22}`,
      title: "CODE INNOVATOR DEVELOPMENT",

      country: "Designer",
    },
    {
      id: 23,
      image: `${ProjectOne23}`,
      title: "ASADZADE.SANAN",

      country: "Graphic Designer",
    },
    {
      id: 10,
      image: `${ProjectOne10}`,
      title: "THANK YOU BUSINESS CARD",

      country: "Graphic Designer",
    },
    {
      id: 11,
      image: `${ProjectOne11}`,
      title: "COMPANY WEBSITE",

      country: "Web Designer",
    },
    {
      id: 12,
      image: `${ProjectOne12}`,
      title: "LUXE INSTAGRAM TEMPLATE",

      country: "Graphic Designer and SMM",
    },
    {
      id: 13,
      image: `${ProjectOne13}`,
      title: "HAYA COLLECTION BRAND BUSINESS CARD",
      country: "Graphic Designer",
    },
    {
      id: 4,
      link: "https://www.figma.com/design/DafjmZrAmgKu164rzryY8Q/Shopping-mobile-App-WhatShop?node-id=0-1&node-type=canvas&t=JRTT02TRv64iyjLV-0",
      image: `${ProjectOne4}`,
      title: "WHATSHOP ",
      country: "Mobile Designer",
    },
    {
      id: 5,
      image: `${ProjectOne5}`,
      link: "https://perfumenewwebsite.vercel.app/",
      title: "LAPARFUMEGALLERY.COM",
      country: "Web Designer",
    },

    {
      id: 6,
      image: `${ProjectOne6}`,
      link: "https://www.instagram.com/binaryschool.az?igsh=MTIyZ2t4NmM3cG44YQ==",
      title: "BINARYSCHOOL.AZ",
      country: "Graphic Designer",
    },
    {
      id: 7,
      image: `${ProjectOne7}`,
      link: "https://www.figma.com/file/X49EfCJLGIOZzmnwWMyXFM?type=design",
      title: "INTERVIEWER.AZ",
      country: "Graphic Designer and Web Designer",
    },
    {
      id: 8,
      image: `${ProjectOne8}`,
      link: "https://www.figma.com/file/oSO7tXZPhMUVg0GmrTHW3b?type=design",
      title: "SHOPPY.AZ",
      country: "Graphic Designer and Web Designer",
    },
  

  ]);
  return (
    <div className={styles.background}>
      <div className={styles.control}>
        <div className={styles.projectTeil}>
          <h1>Project Schedule</h1>
          <h2>
            My working experience and career journey <span>-></span>
          </h2>
        </div>
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
                <div className={styles.border}>
                  <Link target="_blank" to={item.link}>
                    <img src={item.image} alt="" />
                    <h2>{item.title}</h2>
                    <h3>{item.country}</h3>
                  </Link>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Projects;
