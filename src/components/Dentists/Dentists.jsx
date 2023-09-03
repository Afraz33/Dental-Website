import styles from "./Dentists.module.css";
function Dentists() {
  return (
    <section className={styles.Dentists}>
      <h2 className={styles.heading_2}>
        Meet your dentists at{" "}
        <span className={styles.name}>FirstStopDental!</span>
      </h2>
      <div className={styles.grid}>
        <div className={styles.card}>
          <img src="/doc.jpg" alt="doc" className={styles.image}></img>
          <h3 className={styles.heading_3}>Dr. John Doe</h3>
          <h4 className={styles.heading_4}> Oncologist</h4>
        </div>
        <div className={styles.card}>
          <img src="/doc.jpg" alt="doc" className={styles.image}></img>
          <h3 className={styles.heading_3}>Dr. John Doe</h3>
          <h4 className={styles.heading_4}> Oncologist</h4>
        </div>
        <div className={styles.card}>
          <img src="/doc.jpg" alt="doc" className={styles.image}></img>
          <h3 className={styles.heading_3}>Dr. John Doe</h3>
          <h4 className={styles.heading_4}> Oncologist</h4>
        </div>
        <div className={styles.card}>
          <img src="/doc.jpg" alt="doc" className={styles.image}></img>
          <h3 className={styles.heading_3}>Dr. John Doe</h3>
          <h4 className={styles.heading_4}> Oncologist</h4>
        </div>
        <div className={styles.card}>
          <img src="/doc.jpg" alt="doc" className={styles.image}></img>
          <h3 className={styles.heading_3}>Dr. John Doe</h3>
          <h4 className={styles.heading_4}> Oncologist</h4>
        </div>
        <div className={styles.card}>
          <img src="/doc.jpg" alt="doc" className={styles.image}></img>
          <h3 className={styles.heading_3}>Dr. John Doe</h3>
          <h4 className={styles.heading_4}> Oncologist</h4>
        </div>
      </div>
    </section>
  );
}

export default Dentists;
