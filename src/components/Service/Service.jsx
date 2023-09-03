import styles from "./Service.module.css";
function Service() {
  return (
    <section className={styles.service}>
      <h2 className={styles.heading_2}>
        3 simple steps for achieving your best smile!
      </h2>
      <div className={styles.steps_div}>
        <div className={styles.card}>
          <img
            src="/speaking.jpg"
            alt="speaking"
            className={styles.image}
          ></img>
          <div className={styles.number}>
            <h3>1</h3>
          </div>
          <p className={styles.description}>
            Schedule an appointment with your preferred dentist
          </p>
        </div>

        <div className={styles.card}>
          <img
            src="/dentist_speak.jpg"
            alt="speaking"
            className={styles.image}
          ></img>
          <div className={styles.number}>
            <h3>2</h3>
          </div>
          <p className={styles.description}>
            Speak with a dentist about your goals
          </p>
        </div>

        <div className={styles.card}>
          <img
            src="/fianlize_plan.jpg"
            alt="speaking"
            className={styles.image}
          ></img>
          <div className={styles.number}>
            <h3>3</h3>
          </div>
          <p className={styles.description}>
            Create a plan and start your smile journey
          </p>
        </div>
      </div>
      <div className={styles.container}>
        <button className={styles.button}>Book an appointment</button>
      </div>
    </section>
  );
}

export default Service;
