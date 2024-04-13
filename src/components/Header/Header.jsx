import styles from "./Header.module.css";
import { useEffect, useState } from "react";
function Header() {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    // Function to check screen width and update isSmallScreen state
    const checkScreenWidth = () => {
      setIsSmallScreen(window.innerWidth < 1361);
    };

    // Add event listener to check screen width on window resize
    window.addEventListener("resize", checkScreenWidth);

    // Initial check
    checkScreenWidth();

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("resize", checkScreenWidth);
    };
  }, []);

  const videoSource = isSmallScreen ? null : "dentist_video.webm";
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
        {videoSource && (
          <video
            className={styles.video}
            controls
            width="100%"
            autoPlay
            muted
            loop
            height="100%"
          >
            <source width="100%" src={videoSource} type="video/mp4"></source>
          </video>
        )}
      </div>
    </header>
  );
}

export default Header;
