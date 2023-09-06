import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>
        <img
          src="/Dental-logo.png"
          alt="logo"
          className={styles.logo_pic}
        ></img>
        <p className={styles.heading_3}>First Stop Dental</p>
      </div>
      <ul className={styles.Links}>
        <li className={styles.ListItem}></li>
        <li className={styles.ListItem}>Why us?</li>

        <li className={styles.ListItem}>Our Services</li>
        <li className={styles.ListItem}>Before-After</li>
        <li className={styles.ListItem}>Our Team</li>

        <button className={styles.button}>Book Now</button>
      </ul>
    </nav>
  );
}

export default Navbar;
