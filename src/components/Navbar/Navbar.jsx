import { useState, useEffect } from "react";

import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

function Navbar() {
  const [navOptions, setNavOptions] = useState(false);
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const lowWidthStyle = {
    position: isSmallScreen ? "fixed" : "",
    top: isSmallScreen ? "10%" : "",
  };
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
  const toggleNavOptions = () => {
    if (isSmallScreen) {
      setNavOptions(!navOptions);
    }
  };
  return (
    <>
      <div
        className={styles.toggle}
        style={{
          backgroundColor: "white",
          textAlign: "end",
        }}
      >
        <div className={styles.logoNav}>
          <img
            src="/Dental-logo.webP"
            alt="logo"
            className={styles.logo_pic}
          ></img>
          <p className={styles.heading_3}>First Stop Dental</p>
        </div>
        <svg
          onClick={toggleNavOptions}
          className={styles.navButton}
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 480 512"
          style={{ margin: "25px 50px 10px 0px" }}
        >
          <path d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM0 256c0-17.7 14.3-32 32-32H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z" />
        </svg>
      </div>
      {(!isSmallScreen || navOptions) && (
        <nav
          className={`${isSmallScreen ? styles["margin-top"] : ""} ${
            styles.navbar
          }`}
          style={lowWidthStyle}
        >
          <div className={styles.logo}>
            <img
              src="/Dental-logo.webP"
              alt="logo"
              className={styles.logo_pic}
            ></img>
            <p className={styles.heading_3}>First Stop Dental</p>
          </div>

          <ul className={styles.Links}>
            <Link
              style={{ textDecoration: "none" }}
              className={styles.ListItem}
              to="/"
            >
              Home
            </Link>

            <a
              className={styles.ListItem}
              style={{ textDecoration: "none" }}
              href="#features"
            >
              Why us?
            </a>

            <a
              className={styles.ListItem}
              style={{ textDecoration: "none" }}
              href="#enhancements"
            >
              Our Services
            </a>
            <a
              className={styles.ListItem}
              style={{ textDecoration: "none" }}
              href="#BeforeAfter"
            >
              Before-After
            </a>
            <a
              className={styles.ListItem}
              style={{ textDecoration: "none" }}
              href="#OurTeam"
            >
              Our Team
            </a>
            <Link
              style={{ textDecoration: "none" }}
              className={styles.ListItem}
              to="/pricing"
            >
              Pricing
            </Link>

            <Link
              style={{ textDecoration: "none" }}
              className={styles.ListItem}
              to="/faq"
            >
              FAQ
            </Link>
            <button className={styles.button}>Book Now</button>
          </ul>
        </nav>
      )}
    </>
  );
}

export default Navbar;
