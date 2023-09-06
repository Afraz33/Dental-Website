import styles from "./Footer.module.css";
function Footer() {
  return (
    <footer className={styles.Footer}>
      <h3
        style={{
          marginLeft: "150px",
          display: "flex",
          columnGap: "10px",
          color: "white",
          marginTop: "80px",
        }}
        className={styles.heading_3}
      >
        First Stop Dental @ All Rights reserved
      </h3>
      <div
        style={{
          marginRight: "150px",
          display: "flex",
          columnGap: "10px",
          color: "white",
          height: "40px",
        }}
      >
        <h3 className={styles.heading_3}>Home</h3>
        <h3 className={styles.heading_3}>Policy</h3>
        <h3 className={styles.heading_3}>Features</h3>
      </div>
    </footer>
  );
}

export default Footer;
