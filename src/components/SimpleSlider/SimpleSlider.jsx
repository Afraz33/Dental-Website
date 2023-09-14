import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

import styles from "./SimpleSlider.module.css";

// import required modules
import { Navigation } from "swiper/modules";

export default function App() {
  return (
    <>
      <Swiper
        slidesPerView={4}
        spaceBetween={-19}
        navigation={true}
        modules={[Navigation]}
        className="Swiper"
      >
        <SwiperSlide>
          <div className={styles.card}>
            <img
              src="/dentist4.AVIF"
              // srcSet="dentist4-320w.AVIF 768w,"
              alt="dentist"
              className={styles.image}
            ></img>
            <h3 className={styles.heading_3}>Periodontist</h3>
            <div className={styles.occupation}>
              <h4 className={styles.heading_4}> Dr. William Turner </h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <img
              src="/dentist3.AVIF"
              alt="dentist"
              // srcSet="dentist3-320w.AVIF 768w,"
              className={styles.image}
            ></img>
            <h3 className={styles.heading_3}>Cosmetic Dentist</h3>
            <div className={styles.occupation}>
              <h4 className={styles.heading_4}> Dr. David Reynolds</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <img
              src="/dentist3.AVIF"
              alt="dentist"
              // srcSet="dentist3-320w.AVIF 768w,"
              className={styles.image}
            ></img>
            <h3 className={styles.heading_3}>Cosmetic Dentist</h3>
            <div className={styles.occupation}>
              <h4 className={styles.heading_4}> Dr. David Reynolds</h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className={styles.card}>
            <img
              src="/dentist2.AVIF"
              alt="dentist"
              // srcSet="dentist2-320w.AVIF 768w,"
              className={styles.image}
            ></img>
            <h3 className={styles.heading_3}>Orthodontist</h3>
            <div className={styles.occupation}>
              <h4 className={styles.heading_4}> Dr. Michael Anderson </h4>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className={styles.card}>
            <img
              style={{ aspectRatio: "3/2" }}
              src="/dentist1.AVIF"
              alt="dentist"
              // srcSet="dentist1_shorter.AVIF 768w,"
              className={styles.image}
            ></img>
            <h3 className={styles.heading_3}>Oncologist</h3>
            <div className={styles.occupation}>
              <h4 className={styles.heading_4}> Dr. John Doe</h4>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </>
  );
}
