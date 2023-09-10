import styles from "./Dentists.module.css";
function Dentists() {
  return (
    <section className={styles.Dentists}>
      <h2 className={styles.heading_2}>
        Meet Our Team at <span className={styles.name}>FirstStopDental!</span>
      </h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <img src="/dentist1.png" alt="dentist" className={styles.image}></img>
          <h3 className={styles.heading_3}>Oncologist</h3>
          <div className={styles.occupation}>
            <h4 className={styles.heading_4}> Dr. John Doe</h4>
          </div>
        </div>
        <div className={styles.card}>
          <img src="/dentist2.png" alt="dentist" className={styles.image}></img>
          <h3 className={styles.heading_3}>Orthodontist</h3>
          <div className={styles.occupation}>
            <h4 className={styles.heading_4}> Dr. Michael Anderson </h4>
          </div>
        </div>
        <div className={styles.card}>
          <img src="/dentist3.png" alt="dentist" className={styles.image}></img>
          <h3 className={styles.heading_3}>Cosmetic Dentist</h3>
          <div className={styles.occupation}>
            <h4 className={styles.heading_4}> Dr. David Reynolds</h4>
          </div>
        </div>
        <div className={styles.card}>
          <img src="/dentist4.png" alt="dentist" className={styles.image}></img>
          <h3 className={styles.heading_3}>Periodontist</h3>
          <div className={styles.occupation}>
            <h4 className={styles.heading_4}> Dr. William Turner </h4>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Dentists;
