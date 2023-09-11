import styles from "./Header.module.css";

function Header() {
  return (
    <header id="home-section" className={styles.header}>
      <div className={styles.info_container}>
        <div className={styles.heading_2_container}>
          <h2 className={`${styles.heading_2} ${styles.image_text}`}>
            Your Oral Health is Our{" "}
            <span className={styles.concern}>Concern</span>
          </h2>
        </div>
        <p className={styles.image_description}>
          If you are facing any difficulties, please approach us, as we have a
          list of best Dental professionals across the US who provide best
          dental care for you and your problems.
        </p>
        <button className={styles.button}>View Dentists</button>
      </div>
      <div className={styles.carousel_container}>
        {/* <div className={`${styles.overlay_box} ${styles.left_box1}`}></div>
        <div className={`${styles.overlay_box} ${styles.left_box2}`}></div> */}
        <video
          className={styles.video}
          controls
          width="100%"
          autoPlay
          muted
          loop
          height="100%"
        >
          <source
            width="100%"
            src="dentist_video.mp4"
            type="video/mp4"
          ></source>
        </video>
      </div>
    </header>
  );
}

export default Header;
