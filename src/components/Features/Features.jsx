import styles from "./Features.module.css";

function Features() {
  return (
    <section id="features" className={styles.Features}>
      <h3 className={styles.heading_2}>Dentistry You Can Count On</h3>
      <h4 className={styles.heading_3}>
        SAME AND NEXT DAY EMERGENCY APPOINTMENTS
      </h4>
      <div className={styles.grid}>
        <div className={styles.card}>
          <div className={styles.image}>
            <img
              width="80"
              height="80"
              className={styles.svg}
              src="/family-vector.AVIF"
              alt="family"
            ></img>
          </div>
          <h4 style={{ textAlign: "center", marginTop: "0" }}>
            One Stop Dentistry
          </h4>
          <p style={{ textAlign: "center", marginTop: "4px" }}>
            General, cosmetic, pediatric, implant, oral surgery, orthodontic and
            sedation dentistry for all ages.{" "}
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img
              width="80"
              height="80"
              className={styles.svg}
              src="/medical-kit.AVIF"
              alt="family"
            ></img>
          </div>
          <h4 style={{ textAlign: "center", marginTop: "0" }}>
            Same Day Emergency Care
          </h4>
          <p style={{ textAlign: "center", marginTop: "4px" }}>
            We welcome same & next day appointments. We're here for you when you
            need us.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img
              width="80"
              height="80"
              className={styles.svg}
              src="/calendar.AVIF"
              alt="family"
            ></img>
          </div>
          <h4 style={{ textAlign: "center", marginTop: "0" }}>
            Open 6 days a week
          </h4>
          <p style={{ textAlign: "center", marginTop: "4px" }}>
            You can rely on our team of dentists to receive the care you need
            when you need it.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img
              width="80"
              height="80"
              className={styles.svg}
              src="/computer.AVIF"
              alt="family"
            ></img>
          </div>
          <h4 style={{ textAlign: "center", marginTop: "0" }}>
            Modern Digital Dental Office
          </h4>
          <p style={{ textAlign: "center", marginTop: "4px" }}>
            Book appointments online, receive text reminders and other
            convenient digital tools for an updated dental experience.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img
              width="80"
              height="80"
              className={styles.svg}
              src="/virtual-check.AVIF"
              alt="family"
            ></img>
          </div>
          <h4 style={{ textAlign: "center", marginTop: "0" }}>
            Virtual Check-Ins
          </h4>
          <p style={{ textAlign: "center", marginTop: "4px" }}>
            Complete forms online from home, and check-in offsite until
            appointment time.
          </p>
        </div>
        <div className={styles.card}>
          <div className={styles.image}>
            <img
              width="80"
              height="80"
              className={styles.svg}
              src="/credit-card.AVIF"
              alt="family"
            ></img>
          </div>
          <h4 style={{ textAlign: "center", marginTop: "0" }}>
            Flexible Payment Options
          </h4>
          <p style={{ textAlign: "center", marginTop: "4px" }}>
            All PPO dental insurances accepted. Financing available. We will
            help you get the care you need today.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Features;
