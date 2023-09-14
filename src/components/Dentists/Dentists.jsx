import styles from "./Dentists.module.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
function Dentists() {
  return (
    <section id="OurTeam" className={styles.Dentists}>
      <h2 className={styles.heading_2}>
        Meet Our Team at <span className={styles.name}>FirstStopDental!</span>
      </h2>
      <div className={styles.swiperContainer}>
        <Swiper
          spaceBetween={20}
          breakpoints={{
            576: {
              // width: 576,
              slidesPerView: 1,
            },
            768: {
              // width: 768,
              slidesPerView: 1,
            },
            1700: {
              // width: 768,
              spaceBetween: 20,
              slidesPerView: 3,
            },
            1600: {
              // width: 768,
              spaceBetween: 20,
              slidesPerView: 3,
            },
            1500: {
              // width: 768,
              spaceBetween: 20,
              slidesPerView: 3,
            },
            1400: {
              // width: 768,
              spaceBetween: 20,
              slidesPerView: 3,
            },
            1300: {
              // width: 768,
              spaceBetween: 20,
              slidesPerView: 2,
            },
            1200: {
              // width: 768,
              spaceBetween: 20,
              slidesPerView: 2,
            },
            1100: {
              // width: 768,
              spaceBetween: 20,
              slidesPerView: 2,
            },
            1000: {
              // width: 768,
              spaceBetween: 20,
              slidesPerView: 2,
            },
            900: {
              // width: 768,
              spaceBetween: 20,
              slidesPerView: 1,
            },
            800: {
              // width: 768,
              spaceBetween: 20,
              slidesPerView: 1,
            },
            760: {
              // width: 768,
              spaceBetween: 20,
              slidesPerView: 1,
            },
          }}
          navigation={true}
          modules={[Navigation]}
          className={styles.mySwiper}
        >
          <SwiperSlide className={styles.swiper_slide}>
            <div className={styles.card}>
              <img
                src="/dentist4_new.webp"
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
          <SwiperSlide className={styles.swiper_slide}>
            <div className={styles.card}>
              <img
                src="/dentist3_new.webp"
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
          <SwiperSlide className={styles.swiper_slide}>
            {" "}
            <div className={styles.card}>
              <img
                src="/dentist2_new.webp"
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
          <SwiperSlide className={styles.swiper_slide}>
            <div className={styles.card}>
              <img
                // style={{ aspectRatio: " 247 / 380" }}
                src="/dentist1_new.webp"
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
          <SwiperSlide className={styles.swiper_slide}>
            <div className={styles.card}>
              <img
                src="/dentist1_new.webp"
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
      </div>
    </section>
  );
}

export default Dentists;
