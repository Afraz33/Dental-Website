import styles from "./Header.module.css";
function Header() {
  return (
    <header className={styles.header}>
      <div class={styles.carousel_container}>
        <div className={`${styles.overlay_box} ${styles.left_box1}`}></div>
        <div className={`${styles.overlay_box} ${styles.left_box2}`}></div>
        <img
          src="/header-img.jpg"
          alt="Carousel"
          class={styles.header_img}
        ></img>
        <h2 className={`${styles.heading_2} ${styles.image_text}`}>
          Your Oral Health is Our{" "}
          <span className={styles.concern}>Concern</span>
        </h2>
        <p className={styles.image_description}>
          If you are facing any difficulties, please approach us, as we have a
          list of best Dental professionals across the US who provide best
          dental care for you and your problems.
        </p>
        <button className={styles.button}>View Dentists</button>
      </div>
    </header>
  );
}

export default Header;
