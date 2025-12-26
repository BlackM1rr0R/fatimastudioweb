import React, { useMemo } from "react";
import styles from "./index.module.css";
import { Autoplay, Pagination } from "swiper/modules";
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



import { Link } from "react-router-dom";
const Projects = () => {
  const data = useMemo(() => [
    {
      id: 1,
      image: `${Post1}`,
      title: "FORMCOND LLC",
      link: "https://www.behance.net/fatimabashirli",
      country: "Graphic Designer",
    },
    {
      id: 2,
      image: `${Post2}`,
      title: "ALISON.LOGISTICS",
      link: "https://www.behance.net/fatimabashirli",
      country: "Graphic Designer",
    },
    {
      id: 3,
      image: `${Post3}`,
      title: "MOON GROUP",
      link: "https://www.behance.net/fatimabashirli",
      country: "Graphic Designer",
    },
    {
      id: 4,
      image: `${Post4}`,
      title: "GANJLIK GARDEN RESIDENCE",
      link: "https://www.behance.net/fatimabashirli",
      country: "Graphic Designer",
    },
    {
      id: 5,
      image: `${Post5}`,
      title: "NEW YEAR POSTS",
      link: "https://www.behance.net/fatimabashirli",
      country: "Graphic Designer",
    },
    {
      id: 6,
      image: `${Post6}`,
      title: "FERRUM KAPITAL BANK",
      link: "https://www.behance.net/fatimabashirli",
      country: "Graphic Designer",
    },
    {
      id: 7,
      image: `${Post7}`,
      title: "ALISON TRAVEL",
      link: "https://www.behance.net/fatimabashirli",
      country: "Graphic Designer",
    },
    {
      id: 8,
      image: `${Post8}`,
      title: "WOWLAASH CERTIFICATE",
      link: "https://www.behance.net/fatimabashirli",
      country: "Graphic Designer",
    },
    {
      id: 9,
      image: `${Post9}`,
      title: "CASTROL AZERBAIJAN OFFICIAL",
      link: "https://www.behance.net/fatimabashirli",
      country: "Graphic Designer",
    },
    {
      id: 10,
      image: `${Post10}`,
      title: "CAMELA GIFT DESIGN",
      link: "https://www.behance.net/fatimabashirli",
      country: "Graphic Designer",
    },
    {
      id: 11,
      image: `${Post11}`,
      title: "FERRUM KAPITAL BANK",
      link: "https://www.behance.net/fatimabashirli",
      country: "Graphic Designer",
    },
    {
      id: 12,
      image: `${Post12}`,
      title: "ATLACADEMY",
      link: "https://www.behance.net/fatimabashirli",
      country: "Graphic Designer",
    },
    {
      id: 13,
      image: `${Post13}`,
      title: "HAYAA COLLECTION",
      link: "https://www.behance.net/fatimabashirli",
      country: "ArtDirector",
    },
    {
      id: 14,
      image: `${Post14}`,
      title: "LOGO DESIGN",
      link: "https://www.behance.net/fatimabashirli",
      country: "Graphic Designer",
    },
    {
      id: 15,
      image: `${Post15}`,
      title: "THE 9TH WAY AGENCY",
      link: "https://www.behance.net/fatimabashirli",
      country: "Graphic Designer",
    },
    {
      id: 16,
      image: `${Post16}`,
      title: "ATLACADEMY",
      link: "https://www.behance.net/fatimabashirli",
      country: "Graphic Designer",
    },
    {
      id: 17,
      image: `${Post17}`,
      title: "BLOG",
      link: "https://www.behance.net/fatimabashirli",
      country: "SMM & Designer",
    },
    {
      id: 18,
      image: `${Post18}`,
      title: "LINE AGENCY",
      link: "https://www.behance.net/fatimabashirli",
      country: "Graphic Designer",
    },
    {
      id: 19,
      image: `${Post19}`,
      title: "ALISON LOGISTICS",
      link: "https://www.behance.net/fatimabashirli",
      country: "Graphic Designer",
    },
    {
      id: 20,
      image: `${Post20}`,
      title: "TRUSTLY ACADEMY",
      link: "https://www.behance.net/fatimabashirli",
      country: "Web Designer",
    },
    {
      id: 21,
      image: `${Post21}`,
      title: "DEUTSCHE AKADEMIE BAKU",
      link: "https://www.behance.net/fatimabashirli",
      country: "Graphic Designer",
    },
    {
      id: 22,
      image: `${Post22}`,
      title: "DECEMBER CONTENT",
      link: "https://www.behance.net/fatimabashirli",
      country: "Art Director & Designer",
    },
    {
      id: 23,
      image: `${Post23}`,
      title: "HAYAA COLLECTION",
      link: "https://www.behance.net/fatimabashirli",
      country: "Art Director",
    },
    {
      id: 24,
      image: `${Post24}`,
      title: "CAFE & PATISSERIE",
      link: "https://www.behance.net/fatimabashirli",
      country: "Graphic Designer",
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
