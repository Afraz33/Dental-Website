import styles from "./Navbar.module.css";
function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img
          src="/Dental-logo.png"
          alt="logo"
          className={styles.logo_pic}
        ></img>
        <p className={styles.heading_3}>Dental Shelter</p>
      </div>
      <ul className={styles.Links}>
        <li className={styles.ListItem}>Why us?</li>
        <li className={styles.ListItem}>Our Services</li>
        <li className={styles.ListItem}>Home</li>
        <li className={styles.ListItem}>Policy</li>

        <button className={styles.button}>Book Now</button>
      </ul>
    </nav>
  );
}

export default Navbar;
