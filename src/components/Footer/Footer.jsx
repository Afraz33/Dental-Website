import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer className={styles.Footer}>
      <h3 className={`${styles.heading_3} ${styles.name}`}>
        First Stop Dental @ All Rights reserved
      </h3>
      <div className={styles.links}>
        <h3 className={styles.heading_3}>Contact</h3>
        <h3 className={styles.heading_3}>Office</h3>
        <h3 className={styles.heading_3}>Privacy Policy</h3>
      </div>
    </footer>
  );
}

export default Footer;
